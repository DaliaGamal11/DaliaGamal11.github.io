const facts = [
  "☕ Coffee-powered problem solver",
  "🎨 Turning ideas into visuals",
  "🤖 Automation makes me weirdly happy",
  "🧠 Curious & creative mind",
  "📚 Always learning"
];

let index = 0;

const card = document.getElementById("funCard");
const progress = document.getElementById("progressBar");

card.addEventListener("click", () => {
  index = (index + 1) % facts.length;
  card.textContent = facts[index];
  progress.style.width = `${((index + 1) / facts.length) * 100}%`;
});
