/*
Options.js

Author: Bayrock
Description: Handles the extensions options
*/

// Saves preferences to chrome.storage
function savePreferences() {
  var name = document.getElementById('name').value;
  var interval = document.getElementById('interval').value;
  var size = document.getElementById('size').value;
  var enabled = document.getElementById('enabled').checked;

  chrome.storage.sync.set({
    shoeName: name,
    refreshInterval: interval,
    shoeSize: size,
    scanEnabled: enabled
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
    document.getElementById('enabled').checked = response.enabled;
  });
}

// Event listeners
document.addEventListener('DOMContentLoaded', setPreferences);
document.getElementById('save').addEventListener('click', savePreferences);
