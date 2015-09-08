/*
Autocart.js

Author:Bayrock
Description: Adds the desired shoe and size to the cart
*/

var Prefs = {};

// Restore preferences
chrome.storage.sync.get({
	shoeSize: '10.5', //default to 10.5
	autoCart: true //default to true
}, function(items) {
	Prefs["size"] = items.shoeSize;
	Prefs["auto"] = items.autoCart;
});

function AutoCart() {

	var sizeList = document.getElementsByName("skuAndSize")[0];

	for(var i = 0; i < sizeList.length; i++) {

		if(sizeList.options[i].text.trim() == Prefs["size"]) {
			sizeList.selectedIndex = i;
		}
	}

	var buttons = document.getElementsByTagName("button");
	for(var i = 0; i < buttons.length; ++i) {

		if(buttons[i].className.indexOf("add-to-cart") > -1) {
			buttons[i].click();
		}
	}

}

function CartTick() {
	if(document.getElementsByName("skuAndSize")[0] != undefined && Prefs["auto"]) {
		setTimeout(AutoCart, 600);
	} else {
		setTimeout(CartTick, 300);
	}
}

setTimeout(CartTick, 500);
