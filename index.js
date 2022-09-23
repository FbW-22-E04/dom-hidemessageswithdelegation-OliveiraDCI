"use strict";

const container = document.getElementById("container");
const buttons = document.querySelectorAll(".remove-button");

container.addEventListener("click", (e) => {
  buttons.forEach((button) => {
    if (e.target == button) {
      button.parentElement.style.display = "none";
    }
  });
});
