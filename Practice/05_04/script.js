/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

const backpackNames = document.querySelectorAll(".backpack__name");
const secondBackpack = document.querySelector("#pack02");
const secondBackpackImage = secondBackpack.querySelector(
  ".backpack__image img"
);
const firstBackpackImage = document.querySelector(
  "#pack01 figure.backpack__image img"
);
const firstBackpackLidStatus = document.querySelector(
  "#pack01 .feature.backpack__lid span"
).innerText;

const backpackImageSources = Array.from(
  document.querySelectorAll(".backpack figure.backpack__image img")
).map((img) => img.src);

console.log(backpackNames);
console.log(secondBackpack);
console.log(secondBackpackImage);
console.log(firstBackpackImage);
console.log(firstBackpackLidStatus);
console.log(backpackImageSources);
