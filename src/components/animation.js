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

export function circlePath(id, n1, n2) {
  anime({
    targets: `#${id}`,
    keyframes: [
      { clipPath: `circle(${n1}%)` }, // start frame
      { clipPath: `circle(${n2}%)` }, // end frame
    ],
    easing: "easeOutQuad",
  });
}
