"use strict";


const buttons = document.getElementsByClassName('flex-buttons-main');
const flexList = document.getElementById("flex");
const itemList = document.getElementsByClassName('list-item')

const handleButtonClick = ({ target }) => {

  flexList.style.flexDirection = target.dataset.flexDirection;
};

for (const btn of buttons) {
  btn.addEventListener("click", handleButtonClick);}

