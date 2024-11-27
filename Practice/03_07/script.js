/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const macbook = {
  name: "MacBook Pro",
  year: 2019,
  osName: "Sonoma",
  screenSize: 13,
  cpu: {
    name: "Intel Core i5",
    cores: 4,
    baseClock: 1.4,
  },
};

console.log(macbook);
