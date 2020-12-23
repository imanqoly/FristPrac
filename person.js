class Person {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }

    intro(){
        console.log(`my name is ${this.name} and I have ${this.age} years old`);
    }
}

module.exports = Person;