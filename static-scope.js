// static scope

const age = 21;

function mainApp() {
  const age = 26;  
  printAge();
}

function printAge() {
  console.log(age);
}

mainApp();