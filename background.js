
chrome.browserAction.onClicked.addListener(function (activeTab) {
    var newURL = "http://wezen.ir";
    chrome.tabs.create({ url: newURL });
});