const cards = document.getElementById("cards");

let isDown = false;
let startX;
let scrollX = 0;

cards.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX;
});

window.addEventListener("mouseup", () => {
  isDown = false;
});

window.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  const walk = e.pageX - startX;
  cards.scrollLeft = scrollX - walk;
});
