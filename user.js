class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    // method
    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    }
}
module.exports = User;