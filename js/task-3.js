"use strict";

const input = document.querySelector("#name-input");
const hello = document.querySelector("#name-output");
const inputDefaultText = "Anonymous";

input.addEventListener("input", (event) => {
  if (event.currentTarget.value && !/^\s*$/.test(event.currentTarget.value)) {
    hello.textContent = event.currentTarget.value.trim();
  } else {
    hello.textContent = inputDefaultText;
  }
});
