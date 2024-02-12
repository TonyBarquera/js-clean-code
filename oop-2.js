// Before ES6
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return `Hello, I am ${this.name}`;
}

function Developer(name) {
  this.name = name;
}

// Inheritance
Developer.prototype = Object.create(Person.prototype);

Developer.prototype.writeCode = function(coffee) {
  if(coffee) {
    console.log('I am working in a new feature');
  } else {
    console.log('I need coffee, please!');
  }
}

const dev = new Developer('Tony');
console.log(dev.greet());
dev.writeCode();

// ES6
class Feline {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}

class Cat extends Feline {
  constructor(name) {
    super(name);
  }

  sayMeuw() {
    console.log('Meuw Meuw Meuw');
  }
}

const cat = new Cat('Oliver');
cat.greet();
cat.sayMeuw();