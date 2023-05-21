window.addEventListener("load", function() {
  const dots = document.querySelectorAll(".dot");
  let delay = 0;

  dots.forEach((dot, index) => {
    dot.style.animationDelay = `${delay}s`;
    delay += 0.3; // Ajuste o atraso entre os pontos conforme desejado
  });
});
