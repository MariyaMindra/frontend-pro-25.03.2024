function User(name, surname, age, residence) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.residence = residence;
}

User.prototype.displayInfo = function() {
    console.log(`Ім'я: ${this.name}, Прізвище: ${this.surname} Вік: ${this.age}, Місце проживання: ${this.residence}`);
};

User.prototype.getInfo = function() {
    return {
        name: this.name,
        surname: this.surname,
        age: this.age,
        residence: this.residence
    }
}

const user = new User('Oleg', 'Some', 33, 'Ukraine');
const user2 = new User('Петро', 'Іванчук', 22, 'Львів');

user.displayInfo();
user2.displayInfo();

console.log (user.getInfo());
















