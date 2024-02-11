// block scope

{
  let gretting = 'Hello World!';
  var lang = 'English';

  console.log(gretting);
}

// console.log(gretting); // Error: greeting is not defined
console.log(lang); // var defines a variable in global scope