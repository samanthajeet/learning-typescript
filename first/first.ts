// run tsc filename.ts to generate .js file
// run node filename.js


/** DATA TYPES */

// any type: superset of all data types in TypeScript. Equivalent to opting out of type checking for a variable. Great if you're unsure of the type of variable when writing an application
let myVariable: any = "This is a String" // any type
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean

// Built-in Type: types which are built in TypeScript. Includes number, string, boolean, void, null, undefined
let num: number = 5;
let firstName: string = 'Sam';
let isPresent: boolean = true;

// Void : the absence of having any type at all.
function warnUsuer(): void {
  console.log('this is my warning message');
}

let unusable: void = undefined


// USER-DEFINED types. Includes enum, class, interface, array, and tuple

// Tuple: allows you to express an array with a fixed number of elements who types are known, but need not be the same

  //Delcare a tuple type
let x: [string, number];
  //Initialize it
x = ['hello', 10]; // OK
x = [10, 'hello']; // ERROR]

console.log(x[0].substring(1)) // OK
console.log(x[1].substring(1)) // Error, 'number' does not have 'substring'

//Enum: giving more friendly names to sets of numeric values

enum Color {Red, Green, Blue}
let c: Color = Color.Green;

  //enums being numbering their members at 0. You can manually change the value of members

enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green

enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2]
console.log(colorName) // Green




// Class
class Car {
  // fields
  model: String;
  doors: Number;
  isElectrict: Boolean;

  constructor(model: String, doors: Number, isElectric: Boolean){
    this.model = model;
    this.doors = doors;
    this.isElectrict = isElectric;
  }

  displayMake(){
    console.log(`This car is ${this.model}`)
  }
}

const Prius = new Car('Prius', 4, true)

Prius.displayMake()


/** ----------- */

function greeter(person) {
  return `Aloha ${person}`
}

let user = 'Olivia Benson'
let user2 = 'Liz Lemon'
let userArray = [1,2,3]

console.log(greeter(user))

//type annotations are lightweight ways to record the intended contract of the function or variable
// greeter function is intended to be called with a single string paramter

function greeter2(person: string){ 
  return `Aloha ${person}!`
}

console.log(greeter2(user2))
// console.log(greeter2(userArray))
//will result in error : arg type 'number[]' is not assignable to param of type 'string


// Interfaces

interface Person {
  firstName: string,
  lastName: string;
}

function greet(person: Person){
  return `Hello, ${person.firstName} ${person.lastName}`
}

let user3 = { firstName: "Leslie", lastName: "Knope"}

console.log(greet(user3))

// Classes

class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public  lastName: string){ //public allows us to automatically create properties with that name
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}

let student = new Student('Hermione', 'J.', 'Granger');

console.log(greet(student)) //greet function from line 76
console.log(student)