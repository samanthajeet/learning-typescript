var a = 5;
var b = 5;
var c = a + b;
console.log(c);
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
var otherCar = {
    model: 'Prius',
    make: 'Toyota',
    display: function () { }
};
{
    console.log('hi');
}
/** ----------- */
function greeter(person) {
    return "Aloha " + person;
}
var user = 'Olivia Benson';
var user2 = 'Liz Lemon';
console.log(greeter(user));
function greeter2(person) {
    return "Aloha " + person + "!";
}
console.log(greeter2(user2));
