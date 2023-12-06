"use strict";
import data from "./data.json" assert { type: "json" };

// grab all three button elements inside div with class [.period-div] with button element
const periodButtons = document.querySelectorAll(".period-div button");
const currentValue = document.querySelectorAll(".data-div p:nth-of-type(2)");
const previousValue = document.querySelectorAll(".data-div p:nth-of-type(3)");

periodButtons[0].addEventListener("click", (event) => updateValue(event));
periodButtons[1].addEventListener("click", (event) => updateValue(event));
periodButtons[2].addEventListener("click", (event) => updateValue(event));

const updateValue = (event) => {
  removeActiveClass();
  event.target.classList.add("active");
  let index = event.target.dataset.index;
  for (let i = 0; i < currentValue.length; i++) {
    currentValue[i].textContent = data[i].timeframes[index].current + "hrs";
    previousValue[i].textContent =
      "Last Week - " + data[i].timeframes[index].previous + "hrs";
  }
};

const removeActiveClass = () => {
  periodButtons.forEach((button) => {
    button.classList.remove("active");
  });
};
