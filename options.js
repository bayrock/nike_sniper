/*
Options.js

Author:Bayrock
Description: Handles the extensions options
*/

// Saves preferences to chrome.storage
function savePreferences() {
  var name = document.getElementById('name').value;
  var interval = document.getElementById('interval').value;
  var size = document.getElementById('size').value;
  var auto = document.getElementById('autocart').checked;

  chrome.storage.sync.set({
    shoeName: name,
    refreshInterval: interval,
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
function setPreferences() {
  chrome.storage.sync.get({
    shoeName: 'Jordan', //default to Jordan
    refreshInterval: 5000, //default to 5 seconds
    shoeSize: '10.5', //default to 10.5
    autoCart: true //default to true
  }, function(items) {
    document.getElementById('name').value = items.shoeName;
    document.getElementById('interval').value = items.refreshInterval;
    document.getElementById('size').value = items.shoeSize;
    document.getElementById('autocart').checked = items.autoCart;
  });
}

// Event listeners
document.addEventListener('DOMContentLoaded', setPreferences);
document.getElementById('save').addEventListener('click', savePreferences);
