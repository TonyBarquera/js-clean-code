// --- Namming an array (user the name in plural) ---
// No recommended
const user = ['Tony', 'Alan', 'Sergio'];
const userList = ['Tony', 'Alan', 'Sergio'];

// Recommended
const users = ['Tony', 'Alan', 'Sergio'];
const userNames = ['Tony', 'Alan', 'Sergio'];

// --- Namming a boolean (use prefix is, has or can) ---
// No recommended
const valid = true;
const read = false;
const color = true;

// Recommended
const isValid = true;
const canRead = false;
const hasColor = true;

// --- Namming numbers (you can use prefix min, max and total) ---
// No recommeded
const users_ = 15;

// Recommended 
const maxUsers = 50;
const minUsers = 10;
const totalUsers = 15;

// --- Namming function (verb + sustantive) ---
// No recommended
createUserIfNotExist();
updateUserIfNotEmpty();
sendEmailIfIsValid();

// Recommended
createUser();
updateUser();
sendEmail();

// --- Namming classes (sustantives) ---
// No recommended
class Data {}
class Manager {}
class Info {}

// Recommended
class User {}
class UserProfile {}
class Account {}