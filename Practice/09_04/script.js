/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

/**
 * Function to generate random hex color
 */
const randColor = () => {
  let hexColor = Math.floor(Math.random() * 16777215).toString(16);
  return hexColor;
};

const grid = document.querySelector("ul.grid");
const tiles = document.querySelectorAll("ul.grid li.cell");
const main = document.querySelector("body");

grid.addEventListener("mouseenter", () => {
  grid.style.outline = `solid 2px #${randColor()}`;
});

grid.addEventListener("mouseleave", () => {
  grid.style.outline = "";
});

grid.addEventListener("click", (event) => {
  if (event.target === grid) {
    return;
  }

  if (event.target.style.backgroundColor) {
    event.target.style.backgroundColor = "";
  } else {
    event.target.style.backgroundColor = `#${randColor()}`;
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    tiles.forEach((tile) => {
      tile.style.backgroundColor = "";
    });
  } else if (event.key === "Enter") {
    tiles.forEach((tile) => {
      tile.style.backgroundColor = `#${randColor()}`;
    });
  } else if (event.key === "Shift") {
    if (main.style.backgroundColor) main.style.backgroundColor = "";
    else main.style.backgroundColor = "darkgrey";
  }
});
