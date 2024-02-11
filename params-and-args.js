// Args: Used in the function call
// Params: Used inside the function
// Recomendation: Max 3 arguments per function

// Param -> number
function getDouble(number) {
  return number * 2;
}

// Arg -> 4
getDouble(10);

// Default params
function greet(person = 'strange') {
  console.log(`Hello ${person}`);
}

greet();
greet('Tony');

// If you not send the argument to the function and this doesn't have
// a default parameter, the value of the parameter is undefined

// Spread operator - Rest parameter
function add(...args) {
  return args.reduce((acc, number) => acc + number, 0);
}

add(1, 2, 3, 4, 5); // 15