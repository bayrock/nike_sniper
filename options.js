/*
Options.js

Author:Bayrock
Description: Handles the extensions options
*/

// Saves preferences to chrome.storage
function save() {
  var size = document.getElementById('size').value;
  var auto = document.getElementById('autocart').checked;
  chrome.storage.sync.set({
    shoeSize: size,
    autoCart: auto
  }, function() {
    // Notify the user we saved
    var status = document.getElementById('status');
    status.textContent = 'Options saved!';
    setTimeout(function() {
      status.textContent = '';
    }, 1000);
  });
}

// Restores preferences
function restore() {
  chrome.storage.sync.get({
    shoeSize: '10.5', //default to 10.5
    autoCart: true //default to true
  }, function(items) {
    document.getElementById('size').value = items.shoeSize;
    document.getElementById('autocart').checked = items.autoCart;
  });
}

// Event listeners
document.addEventListener('DOMContentLoaded', restore);
document.getElementById('save').addEventListener('click', save);
