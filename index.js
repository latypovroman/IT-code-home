const decrementButton = document.querySelector("#dec");
const incrementButton = document.querySelector("#inc");
const counter = document.querySelector("span");

decrementButton.addEventListener("click", () => {
  counter.textContent--;
});

incrementButton.addEventListener("click", () => {
  counter.textContent++;
});
