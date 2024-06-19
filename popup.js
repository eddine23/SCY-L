document.addEventListener("DOMContentLoaded", function () {
  const historyDiv = document.getElementById("history");
  const toggleButtons = document.querySelectorAll(".toggle-btn");
  const searchInput = document.getElementById("search-input");
  const deleteBtn = document.getElementById("delete-btn");
  const cleanHistoryBtn = document.getElementById("clean-history-btn");
  const dateRangeContainer = document.getElementById("date-range-container");
  const deleteDateRangeBtn = document.getElementById("delete-date-range-btn");
  const selectAllCheckbox = document.getElementById("select-all");
  const shortcutButtons = document.querySelectorAll(".shortcut-btn");
  const fullscreenLink = document.getElementById("fullscreen-link");

  let activeFilter = "all";
  chrome.storage.local.get({ history: [] }, function (result) {
    let history = result.history;
    displayHistory(history);

    toggleButtons.forEach((button) => {
      button.addEventListener("click", function () {
        activeFilter = button.id.split("-")[0];
        filterHistory(history, activeFilter);
      });
    });

    searchInput.addEventListener("input", function () {
      filterHistory(history, activeFilter, searchInput.value);
    });

    deleteBtn.addEventListener("click", function () {
      const checkboxes = document.querySelectorAll(
        '.history-item input[type="checkbox"]:checked'
      );
      const idsToDelete = Array.from(checkboxes).map((cb) =>
        parseInt(cb.dataset.id)
      );
      history = history.filter((item, index) => !idsToDelete.includes(index));
      chrome.storage.local.set({ history: history }, function () {
        displayHistory(history);
      });
    });

    cleanHistoryBtn.addEventListener("click", function () {
      dateRangeContainer.style.display =
        dateRangeContainer.style.display === "none" ? "flex" : "none";
    });

    deleteDateRangeBtn.addEventListener("click", function () {
      const startDate = new Date(document.getElementById("start-date").value);
      const endDate = new Date(document.getElementById("end-date").value);
      history = history.filter((item) => {
        const itemDate = new Date(item.timestamp);
        return !(itemDate >= startDate && itemDate <= endDate);
      });
      chrome.storage.local.set({ history: history }, function () {
        displayHistory(history);
      });
    });

    selectAllCheckbox.addEventListener("change", function () {
      const checkboxes = document.querySelectorAll(
        '.history-item input[type="checkbox"]'
      );
      checkboxes.forEach((cb) => (cb.checked = selectAllCheckbox.checked));
    });

    shortcutButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const hours = parseInt(button.dataset.hours || 0);
        const days = parseInt(button.dataset.days || 0);
        const now = new Date();
        const cutoffDate = new Date(
          now - (hours * 60 * 60 * 1000 + days * 24 * 60 * 60 * 1000)
        );
        history = history.filter(
          (item) => new Date(item.timestamp) >= cutoffDate
        );
        chrome.storage.local.set({ history: history }, function () {
          displayHistory(history);
        });
      });
    });

    fullscreenLink.addEventListener("click", function (e) {
      e.preventDefault();
      window.open("fullscreen.html", "_blank");
    });
  });

  function displayHistory(history) {
    historyDiv.innerHTML = "";
    history.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "history-item";
      div.innerHTML = `
              <input type="checkbox" data-id="${index}">
              <div class="history-details">
                  <span class="timestamp">${new Date(
                    item.timestamp
                  ).toLocaleString()}</span>
                  <span class="action-content">${item.action}</span>
              </div>
              <div class="action-buttons">
                  <button class="action-button google" onclick="searchText('${
                    item.action
                  }')">Google</button>
                  <button class="action-button copy" onclick="copyText('${
                    item.action
                  }')">Copy</button>
                  <button class="action-button youtube" onclick="searchYouTube('${
                    item.action
                  }')">YouTube</button>
                  <button class="action-button link" onclick="visitLink('${
                    item.action
                  }')">Link</button>
              </div>
          `;
      historyDiv.appendChild(div);
    });
  }

  function filterHistory(history, filter, searchTerm = "") {
    const filteredHistory = history
      .filter((item) => {
        if (filter === "all") return true;
        switch (filter) {
          case "S":
            return item.action.startsWith("Searched on Google:");
          case "C":
            return item.action.startsWith("Copied:");
          case "Y":
            return item.action.startsWith("Searched on YouTube:");
          case "L":
            return item.action.startsWith("Visited link:");
          default:
            return true;
        }
      })
      .filter((item) =>
        item.action.toLowerCase().includes(searchTerm.toLowerCase())
      );
    displayHistory(filteredHistory);
  }
});

function saveToHistory(action) {
  const timestamp = new Date().toISOString();
  chrome.storage.local.get({ history: [] }, function (result) {
    const history = result.history;
    history.push({ action, timestamp });
    chrome.storage.local.set({ history });
  });
}

function searchText(text) {
  saveToHistory(`Searched on Google: ${text}`);
  window.open(
    `https://www.google.com/search?q=${encodeURIComponent(text)}`,
    "_blank"
  );
}

function copyText(text) {
  saveToHistory(`Copied: ${text}`);
  navigator.clipboard.writeText(text);
  alert("Text copied to clipboard");
}

function searchYouTube(text) {
  saveToHistory(`Searched on YouTube: ${text}`);
  window.open(
    `https://www.youtube.com/results?search_query=${encodeURIComponent(text)}`,
    "_blank"
  );
}

function visitLink(url) {
  saveToHistory(`Visited link: ${url}`);
  if (/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(url)) {
    window.open(url, "_blank");
  } else {
    alert("Invalid URL");
  }
}
