// Hoisting
// In time of compilation JS move all declaration to the top
// Only in declaration, not in initialization or assignment 

greet();

function greet() {
  const greeting = 'Hello World!';
  console.log(greeting);
}