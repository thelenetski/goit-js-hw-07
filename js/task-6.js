function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const quantityBoxes = document.querySelector("input");
const boxes = document.querySelector("#boxes");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");

create.addEventListener("click", handleSubmit);
destroy.addEventListener("click", destroyBoxes);

function handleSubmit() {
  const input = quantityBoxes.value;
  if (1 <= input && input <= 100 && input !== "") {
    createBoxes(input);
  } else {
    alert("Введіть число від 1 до 100");
  }

  quantityBoxes.value = "";
}

function createBoxes(amount) {
  destroyBoxes();
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    let box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.background = getRandomHexColor();
    boxes.append(box);
    size += 10;
  }
}

function destroyBoxes() {
  let allBoxes = boxes.querySelectorAll("div");
  if (allBoxes) allBoxes.forEach((elem) => elem.remove());
}
