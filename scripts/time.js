$(document).ready(function () {

  // Update the time every second
  setInterval(updateTime, 1000);
  updateTime(); // Initial call to update the time

  function updateTime() {
    // Get the element with id 'time'
    var time = document.getElementById("time");
    // Set the text of the time element to the current date and time
    time.innerHTML = "EBL — " + moment().format("H:mm:ss");
  }
});
