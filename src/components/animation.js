import anime from "animejs/lib/anime.es.js";

export function animateCart(direction) {
  anime({
    targets: ".cart",
    right: ["-400px", "0px"],
    direction: `${direction}`,
    easing: "easeOutQuad",
    duration: 500,
  });
  anime({
    targets: ".cart-background",
    width: ["0vw", "100vw"],
    direction: `${direction}`,
    easing: "easeOutQuad",
    duration: 500,
  });
}
