"use strict";
import data from "./data.json" assert { type: "json" };

// grab all three button elements inside div with class [.period-div] with button element
window.addEventListener("DOMContentLoaded", () => {
  const periodButtons = document.querySelectorAll(".period-div button");
  const periodButtonsDiv = document.querySelector(".period-div");
  const currentValue = document.querySelectorAll(".data-div p:nth-of-type(2)");
  const previousValue = document.querySelectorAll(".data-div p:nth-of-type(3)");

  periodButtonsDiv.addEventListener("click", (event) => updateValue(event));

  const updateValue = (event) => {
    if (event.target.tagName === "BUTTON") {
      removeActiveClass();
      let index = event.target.dataset.index;
      for (let i = 0; i < currentValue.length; i++) {
        currentValue[i].textContent = data[i].timeframes[index].current + "hrs";
        previousValue[i].textContent =
          "Last Week - " + data[i].timeframes[index].previous + "hrs";
      }
      event.target.classList.add("active");
    }
  };

  const removeActiveClass = () => {
    periodButtons.forEach((button) => {
      button.classList.remove("active");
    });
  };
});
