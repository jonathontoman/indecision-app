class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi i am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name = "Anonymous", age = 0, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

const student = new Student("Jonathon", 34, "History");
console.log(student);
console.log(student.getDescription());

const otherStudent = new Student();
console.log(otherStudent);
console.log(otherStudent.getDescription());

class Traveller extends Person {
  constructor(name = "Anonymous", age = 0, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const traveller = new Traveller("Bonnie", 10, "Churchdown");
console.log(traveller.getGreeting());
