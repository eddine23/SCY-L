// Utility function to validate URLs
function isValidURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

// Create a new div element for the pop-up dialog
var dialog = document.createElement("div");
dialog.id = "scy-dialog";
dialog.style.position = "absolute";
dialog.style.zIndex = "999999999";
dialog.style.display = "none";
dialog.style.padding = "8px";
dialog.style.background = "#f9f9f9";
dialog.style.borderRadius = "8px";
dialog.style.boxShadow = "0px 0px 18px rgba(0, 0, 0, 0.3)";
dialog.style.fontFamily = "Helvetica Neue,Helvetica,Arial,sans-serif";
dialog.style.fontSize = "18px";
dialog.style.color = "#333";
dialog.style.textAlign = "center";

function createButton(id, text, style) {
  var button = document.createElement("button");
  button.id = id;
  button.style = style;
  button.textContent = text;
  return button;
}

var buttons = [
  {
    id: "googleBtn",
    text: "Search",
    style:
      "background: linear-gradient(to right, #4285F4, #34A853, #FBBC05, #EA4335); color: white;",
  },
  {
    id: "copyBtn",
    text: "Copy",
    style: "background-color: #007BFF; color: #ffffff;",
  },
  {
    id: "youtubeBtn",
    text: "YouTube",
    style:
      "background: linear-gradient(to right, #FF0000, #FF0000); color: #ffffff;",
  },
];

buttons.forEach((button) => {
  var btn = createButton(
    button.id,
    button.text,
    button.style +
      " border: 1px solid #000; border-radius: 4px; box-shadow: #fff 4px 4px 0 0,#000 4px 4px 0 1px; box-sizing: border-box; cursor: pointer; display: inline-block; font-family: ITCAvantGardeStd-Bk,Arial,sans-serif; font-size: 14px; font-weight: 800; line-height: 20px; margin: 5px 5px 10px 5px; overflow: visible; padding: 4px 20px; text-align: center; text-transform: none; touch-action: manipulation; user-select: none; -webkit-user-select: none; vertical-align: middle; white-space: nowrap;"
  );
  dialog.appendChild(btn);
});

document.body.appendChild(dialog);

function handleAction(action, selection) {
  var timestamp = new Date().toLocaleString();
  chrome.storage.local.get({ history: [] }, function (result) {
    var history = result.history;
    history.push({ action: action, timestamp: timestamp });
    chrome.storage.local.set({ history: history });
  });
}

dialog.addEventListener("mousedown", function (e) {
  e.stopPropagation(); // Prevent the event from triggering the selectionchange listener
  var selection = window.getSelection().toString().trim();

  if (e.target.id === "youtubeBtn" && selection) {
    window.open(
      "https://www.youtube.com/results?search_query=" +
        encodeURIComponent(selection)
    );
    handleAction(`Searched on YouTube: ${selection}`, selection);
  } else if (e.target.id === "copyBtn") {
    navigator.clipboard.writeText(selection);
    handleAction(`Copied: ${selection}`, selection);
  } else if (e.target.id === "googleBtn" && selection) {
    window.open(
      "https://www.google.com/search?q=" + encodeURIComponent(selection)
    );
    handleAction(`Searched on Google: ${selection}`, selection);
  } else if (e.target.id === "visitLinkBtn" && isValidURL(selection)) {
    window.open(
      selection.startsWith("http") ? selection : "http://" + selection
    );
    handleAction(`Visited link: ${selection}`, selection);
  }
  dialog.style.display = "none";
});

document.addEventListener("selectionchange", function () {
  var selection = window.getSelection().toString().trim();
  if (selection) {
    var range = window.getSelection().getRangeAt(0);
    var rect = range.getBoundingClientRect();
    dialog.style.left =
      rect.left + rect.width / 2 - dialog.offsetWidth / 2 + "px";
    dialog.style.top = rect.bottom + window.pageYOffset + "px";

    if (isValidURL(selection)) {
      if (!document.getElementById("visitLinkBtn")) {
        var visitLinkBtn = createButton(
          "visitLinkBtn",
          "Visit Link",
          "background-color: #000; color: #ffffff;"
        );
        dialog.appendChild(visitLinkBtn);
      }
    } else {
      var visitLinkBtn = document.getElementById("visitLinkBtn");
      if (visitLinkBtn) {
        visitLinkBtn.remove();
      }
    }

    dialog.style.display = "block";
  } else {
    dialog.style.display = "none";
  }
});

document.addEventListener("mousedown", function (e) {
  if (e.target !== dialog && !dialog.contains(e.target)) {
    dialog.style.display = "none";
  }
});
