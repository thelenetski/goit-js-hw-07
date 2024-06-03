"use strict";

const cats = document.querySelectorAll(".item");

console.log(`Number of categories: ${cats.length}`);

for (let cat of cats) {
  console.log(`Category: ${cat.querySelector("h2").textContent}`);
  console.log(`Elements: ${cat.querySelectorAll("li").length}`);
}
