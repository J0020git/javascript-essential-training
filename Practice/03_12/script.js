/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Laptop {
  constructor(name, year, os, screenSize, cpu) {
    this.name = name;
    this.year = year;
    this.os = os;
    this.screenSize = screenSize;
    this.cpu = cpu;
    this.power = false;
  }

  togglePower() {
    this.power = !this.power;
  }
}

const macbook = new Laptop("Macbook Pro", 2019, "MacOS", 13, {
  name: "Intel Core i5",
  cores: 4,
  baseClock: 1.4,
});

macbook.togglePower();
console.log(macbook);
