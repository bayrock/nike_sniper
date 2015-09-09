/*
Background.js

Author:Bayrock
Description: Handles the background processes
*/

// Page action
function ValidUrl(tabId, changeInfo, tab) {
  if (tab.url.indexOf('nike') > -1) {
		chrome.pageAction.show(tabId);
	}
}

chrome.tabs.onUpdated.addListener(ValidUrl);
