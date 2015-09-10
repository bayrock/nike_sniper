/*
Autocart.js

Author:Bayrock
Description: Adds the desired shoe and size to the cart
*/

// Retrieve preferences
chrome.runtime.sendMessage({action: "send"}, function(response) {
	shoeSize = response.size;
	autoCart = response.auto;
});

// Auto add-to-cart
function AutoCart() {

	var sizeList = document.getElementsByName("skuAndSize")[0];

	for(var i = 0; i < sizeList.length; i++) {

		if(sizeList.options[i].text.trim() == shoeSize) {
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
	if(document.getElementsByName("skuAndSize")[0] != undefined && autoCart) {
		setTimeout(AutoCart, 500);
	} else {
		setTimeout(CartTick, 500);
	}
}

setTimeout(CartTick, 500);
