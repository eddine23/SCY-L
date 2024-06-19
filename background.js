chrome.contextMenus.create({
  title: "SCY",
  contexts: ["selection"],
  onclick: function (info) {
    var searchQuery = info.selectionText;
    var url =
      "https://www.youtube.com/results?search_query=" +
      encodeURIComponent(searchQuery);
    chrome.tabs.create({ url: url });
  },
});
