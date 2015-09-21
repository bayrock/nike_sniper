/*
Scan.js

Author:Bayrock
Description: Scans the page for the desired shoe
*/

var found = false;

// Retrieve preferences
chrome.runtime.sendMessage({action: "send"}, function(response) {
  shoeName = response.shoe;
  refreshInterval = response.interval;
  scanEnabled = response.enabled;

  if (scanEnabled) {
    setTimeout(ScanTick, refreshInterval);
  }
});

// Scan the site for the keyword
function NikeScan() {

	var products = document.getElementsByClassName("product-display-name");

  for (var i = 0; i < 5; i++) {
    if (products[i].innerHTML.match(shoeName) == shoeName) {
      var shoe = document.getElementsByClassName("grid-item")[i];

      window.location.href = shoe.getElementsByTagName('a')[i].href;
      found = true;
      break;
    }
  }

  if (!found) {
    location.reload(true);
  }

}

function TwitterScan() {

  for (var i = 0; i < 4; i++) {
    var tweet = document.getElementsByClassName("js-tweet-text")[i].innerHTML;

    if (tweet.match(shoeName) == shoeName) {
      document.getElementsByClassName("twitter-timeline-link")[0].click();
      found = true;
      break;
    }
  }

  if (!found) {
    location.reload(true);
  }

}

function ScanTick() {
  if (document.getElementsByClassName("product-display-name")[0] != undefined) {
    NikeScan();
  } else if (document.getElementsByClassName("js-tweet-text")[0] != undefined) {
    TwitterScan();
  } else if (scanEnabled) {
    setTimeout(ScanTick, refreshInterval);
  }
}
