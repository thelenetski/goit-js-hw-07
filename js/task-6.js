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
  let box = ``;

  for (let i = 0; i < amount; i += 1) {
    box += `<div style="
      width:${size}px;
      height:${size}px;
      background:${getRandomHexColor()};
    "></div>`;
    size += 10;
  }

  boxes.insertAdjacentHTML("afterbegin", box);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
