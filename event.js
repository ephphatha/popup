chrome.browserAction.onClicked.addListener( function(tab) {
    chrome.windows.create({
        tabId:     tab.id,
        type:      "popup",
        incognito: tab.incognito
    });
});