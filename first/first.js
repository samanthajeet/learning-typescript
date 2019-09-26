// run tsc filename.ts to generate .js file
// run node filename.js
/** DATA TYPES */
// any type: superset of all data types in TypeScript. Equivalent to opting out of type checking for a variable
var myVariable = "This is a String"; // any type
// Built-in Type: types which are built in TypeScript. Includes number, string, boolean, void, null, undefined
var num = 5;
var firstName = 'Sam';
var isPresent = true;
// User-defined types. Includes enum, class, interface, array, and tuple
// Class
var Car = /** @class */ (function () {
    function Car(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isElectrict = isElectric;
    }
    Car.prototype.displayMake = function () {
        console.log("This car is " + this.model);
    };
    return Car;
}());
var Prius = new Car('Prius', 4, true);
Prius.displayMake();
/** ----------- */
function greeter(person) {
    return "Aloha " + person;
}
var user = 'Olivia Benson';
var user2 = 'Liz Lemon';
var userArray = [1, 2, 3];
console.log(greeter(user));
//type annotations are lightweight ways to record the intended contract of the function or variable
// greeter function is intended to be called with a single string paramter
function greeter2(person) {
    return "Aloha " + person + "!";
}
console.log(greeter2(user2));
function greet(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user3 = { firstName: "Leslie", lastName: "Knope" };
console.log(greet(user3));
// Classes
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var student = new Student('Hermione', 'J.', 'Granger');
console.log(greet(student)); //greet function from line 76
console.log(student);
