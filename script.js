// Swipe hint animation
const cards = document.getElementById("cards");

let isDown = false;
let startX;
let scrollLeft;

cards.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - cards.offsetLeft;
  scrollLeft = cards.scrollLeft;
});

cards.addEventListener("mouseleave", () => {
  isDown = false;
});

cards.addEventListener("mouseup", () => {
  isDown = false;
});

cards.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - cards.offsetLeft;
  const walk = (x - startX) * 2;
  cards.scrollLeft = scrollLeft - walk;
});
