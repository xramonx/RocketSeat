const name = "Ramon";
const birthYear = 1985;
const today = new Date();
const age = today.getFullYear() - birthYear;;

console.log(age);

//option 1 with traditional JS
console.log('My name is '+ name + ' and I am ' + age +' years old');

//option 2 with ES6
console.log(`My name is ${name} and I am ${age} years old`);
