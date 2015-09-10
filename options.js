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
      chrome.runtime.reload() //reload background
    }, 1000);
  });
}

// Restores preferences
function setPreferences() {
  chrome.runtime.sendMessage({action: "send"}, function(response) {
    document.getElementById('name').value = response.shoe;
  	document.getElementById('interval').value = response.interval;
  	document.getElementById('size').value = response.size;
  	document.getElementById('autocart').checked = response.auto;
  });
}

// Event listeners
document.addEventListener('DOMContentLoaded', setPreferences);
document.getElementById('save').addEventListener('click', savePreferences);
