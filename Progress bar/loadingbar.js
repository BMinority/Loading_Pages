window.addEventListener("load", function() {
  var progressBar = document.querySelector(".progress");
  var width = 0;
  var interval = setInterval(increaseWidth, 10);

  function increaseWidth() {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width++;
      progressBar.style.width = width + "%";
    }
  }
});
