/*
Background.js

Author:Bayrock
Description: Handles the background processes
*/

// Preferences
chrome.storage.sync.get({
  shoeName: 'Jordan', //default to Jordan
  refreshInterval: 5000, //default to 5 seconds
  shoeSize: '10.5', //default to 10.5
  autoCart: true //default to true
}, function(items) {
  // Deliver preferences
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action == "send")
        sendResponse({
          shoe: items.shoeName,
          interval: items.refreshInterval,
          size: items.shoeSize,
          auto: items.autoCart
        });
    });
});

// Page action
function ValidUrl(tabId, changeInfo, tab) {
  if (tab.url.indexOf('nike.com') > -1) {
		chrome.pageAction.show(tabId);
  }
}

chrome.tabs.onUpdated.addListener(ValidUrl);
