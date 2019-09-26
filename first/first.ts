let a = 5;
let b = 5;
let c = a + b;
console.log(c);

// run tsc filename.ts to generate .js file
// run node filename.js


/** DATA TYPES */

// any type: superset of all data types in TypeScript. Equivalent to opting out of type checking for a variable
let myVariable: any = "This is a String" // any type

// Built-in Type: types which are built in TypeScript. Includes number, string, boolean, void, null, undefined
let num: number = 5;
let firstName: string = 'Sam';
let isPresent: boolean = true;

// User-defined types. Includes enum, class, interface, array, and tuple

// Class
class Car {
  // fields
  model: String;
  doors: Number;
  isElectrict: Boolean;

  constructor(model: String, doors: Numbers, isElectric: Boolean){
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

// Interface: allows you to define the structure of variables

// const otherCar = {  
//   model: 'Prius',  
//   make: 'Toyota',  
//   display() => { console.log('hi'); }  
// }

interface ICar {
  model: String,
  make: String,
  display(): void
}

const otherCar: ICar = {
  model: 'Prius',
  make: 'Toyota',
  display() => { console.log('hi')}
}


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
console.log(greeter2(userArray)) //will result in error : arg type 'number[]' is not assignable to param of type 'string