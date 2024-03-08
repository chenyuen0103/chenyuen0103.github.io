// loadComponents.js
document.addEventListener("DOMContentLoaded", function() {
  // Load the header
  fetch('/header.html') // Adjust the path as necessary
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
    }).catch(error => console.log('Error loading the header:', error));

  // Load the sidebar
  fetch('/sidebar.html') // Adjust the path as necessary
    .then(response => response.text())
    .then(data => {
      document.getElementById('sidebar-placeholder').innerHTML = data;
    }).catch(error => console.log('Error loading the sidebar:', error));
});
