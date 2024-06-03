function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyBox = document.querySelector("body");
const spanBoxColorValue = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", () => {
  let rndClr = getRandomHexColor();
  bodyBox.style.background = rndClr;
  spanBoxColorValue.textContent = rndClr;
});
