// arguments object no longer bound with arrow functions

const add = function(a, b) {
  console.log(arguments);
  return a + b;
};
console.log(add(55, 1));

const addEs6 = (a, b) => {
  //arguments not defined
  //console.log(arguments);
  return a + b;
};
console.log(addEs6(55, 1));

// this keyword no longer bound

const user = {
  name: "Jonathon",
  cities: ["Cheltenham", "Gloucester"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " lived in " + city);
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  // array of numbers
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => this.multiplyBy * number);
  }
};

console.log(multiplier.multiply());
