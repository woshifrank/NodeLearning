const person1 = require('./person');
const User = require('./user');
const user1 = new User('frank',30);
console.log(person1);
console.log(person1.age);
user1.greeting();