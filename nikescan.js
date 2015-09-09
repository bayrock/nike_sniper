/*
Nikescan.js

Author:Bayrock
Description: Scans the page for the desired shoe
*/

var found = false;

// Check preferences
chrome.storage.sync.get({
	shoeName: 'Jordan', //default to Jordan
	refreshInterval: 5000 //default to 5 seconds
}, function(items) {
	shoeName = items.shoeName;
	refreshInterval = items.refreshInterval;
	setTimeout(ScanTick, refreshInterval);
});

// Scan the site for the keyword
function NikeScan() {

	var products = document.getElementsByClassName("product-display-name");

	for (var i = 0; i < 5; i++) {

		if (products[i].innerHTML.match(shoeName) == shoeName) {
			var shoe = document.getElementsByClassName("grid-item")[i];

			window.location.href = shoe.getElementsByTagName('a')[i].href;
			found = true
			break;
		}
	}

	if (!found) {
		location.reload(true);
	}

}

function ScanTick() {
	if(document.getElementsByClassName("product-display-name")[0] != undefined) {
		NikeScan()
	} else {
		setTimeout(ScanTick, 5000);
	}
}
