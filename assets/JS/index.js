"use strict";


const buttons = document.querySelectorAll("#buttons>button");
const flex = document.getElementById("flex");

const handleButtonClick = ({ target }) => {

  flex.style.flexDirection = target.innerText.toLowerCase();
};

for (const btn of buttons) {
  btn.addEventListener("click", handleButtonClick);}