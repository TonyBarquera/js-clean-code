// Before ES6
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return `Hello, I am ${this.name}`;
}

const person = new Person('Tony');
// console.log(person.name);
console.log(person.greet());

// ES6
class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, I am a cat and my name is ${this.name}`;
  }
}

const cat = new Cat('Michi');
// console.log(cat.name);
console.log(cat.greet());