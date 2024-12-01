/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */
const secondBackpack = document.querySelector("#pack02");

secondBackpack.classList.add("class1");
secondBackpack.classList.add("class2");
secondBackpack.classList.remove("class2");

console.log(secondBackpack.attributes);
console.log(secondBackpack.hasAttribute("data-id"));
secondBackpack.setAttribute("data-id", 2);
console.log(secondBackpack.getAttribute("data-id"));
secondBackpack.setAttribute("data-id", 22);
console.log(secondBackpack.getAttribute("data-id"));

const secondBackpackTitle = secondBackpack.querySelector("h1.backpack__name");
secondBackpackTitle.style.color = "red";
