
const background = document.querySelector(".background");
for (var i = 0; i <= 12; i++) {
  const blocks = document.createElement("div");
  blocks.classList.add("block");
  background.appendChild(blocks);
}

let animateBlocks = () => {
  anime({
    targets: ".block",
    translateX: () => {
      return anime.random(-500, 50);
    },
    translateY: () => {
      return anime.random(-150, 150);
    },
    scale: () => {
      return anime.random(1, 5);
    },

    easing: "linear",
    duration: 3000,
    delay: anime.stagger(10),
    complete: animateBlocks
  });
};
animateBlocks();
