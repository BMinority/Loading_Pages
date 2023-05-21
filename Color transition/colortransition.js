window.addEventListener("load", function() {
  const backgroundTransition = document.querySelector(".background-transition");
  const animationDuration = 5;

  setInterval(changeBackgroundColor, animationDuration * 1000);

  function changeBackgroundColor() {
    backgroundTransition.style.animation = "none";
    void backgroundTransition.offsetWidth;
    backgroundTransition.style.animation = `backgroundTransition ${animationDuration}s linear infinite`;
  }
});
