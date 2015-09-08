/*
Nikescan.js

Author:Bayrock
Description: Scans the page for the desired shoe
*/

var shoeName = "Jordan"; // What keyword should we target?
var found = false;

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

setTimeout(NikeScan, 5000);
