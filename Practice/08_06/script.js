/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

// Function declaration
function changeTitle1(newTitle) {
  document.querySelector("title").innerText = newTitle;
}

// Function expression
const changeTitle2 = function (newTitle) {
  document.querySelector("title").innerText = newTitle;
};

// Arrow function expression
const changeTitle3 = (newTitle) =>
  (document.querySelector("title").innerText = newTitle);

changeTitle1("One: The number 1");
changeTitle2("Two: The number 2");
changeTitle3("Three: The number 3");

// Immediately-invoked function expression
((newTitle) => (document.querySelector("title").innerText = newTitle))(
  "Four: The number 4"
);
