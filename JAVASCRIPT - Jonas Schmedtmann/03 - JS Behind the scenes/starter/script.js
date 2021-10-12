'use strict';

// SCOPE CHAIN

function calcAge (birthYear) {
  const age = 2021 - birthYear;

  function printAge () {
    let output = `${firstName}, are ${age}, born in ${birthYear}!`
    console.log(output);

    if(birthYear >= 1981 && birthYear <= 1996) {
      var milleninial = true;
      const firstName = 'Steven';
      const str = `Oh, You're a milleninial, ${firstName}!`
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT!';

      console.log(add(2, 3));
    }
    console.log(milleninial);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Hamza';
calcAge(1993);


//  HOISTING AND TDZ

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Hamza';
let job = 'Coder';
const year = '1993';

// Functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function(a, b) {
  return a + b;
}

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All Products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// THIS keyword

console.log(this);

const calculateAge = function (yearOfBirth) {
  console.log(2021 - yearOfBirth);
  console.log(this);
};
calculateAge(1993);

const calculateAgeArrow = yearOfBirth => {
  console.log(2021 - yearOfBirth);
  console.log(this);
};

calculateAgeArrow(1969);

const hamza = {
  year: 1993,
  calculateAge: function() {
    console.log(this);
    // console.log(2021 - this.year);
  }
};
hamza.calculateAge();

const matilda = {
  year: 2017,
};

matilda.calculateAge = hamza.calculateAge;
matilda.calculateAge();

const f = hamza.calculateAge;
f();

// this keyword NOTES

// **this keyword/variable: is basically a special variable that is created for every execution context and therefore any function.​

// this keyword => will always take the value of the owner of the function in which, the this keyword is used.​

// We also say, that it points to the owner of that function.​

// ​

// ​

// the value of the this keyword is not static. So it's not always the same. It depends on how the function is actually called. And its value is only assigned when the function is actually called.​

// ​

// **But what does that actually mean 🤔? Well, let's analyze four different ways in which functions can be called.​

// ​

// 1. Method: this = <Object that is calling the method>​

// So as a function attached to an object. So when we call a method, the this keyword inside that method will simply point to the object on which the method is called.​

// (it points to the object that is calling the method).​

// ​

// 2. simply calling function as normal functions: this = undefined​

// So not as a method and so not attached to any object. In this case, the this keyword, will simply be undefined.​

// However, that is only valid for strict mode. So if you're not in strict mode, this will actually point to the global object,​

// which in case of the browser is the window object. And that can be very problematic.​

// ​

// 3. Arrow functions this = <this of surrounding function (lexical this)>​

// arrow functions do not get their own 'this keyword'. Instead, if you use 'the this variable' in an arrow function,​

// it will simply be the this keyword of the surrounding function. So of the parent function. and in technical terms, ​

// this is called the 'lexical this keyword,' because it simply gets picked up from the outer lexical scope of the arrow function.​

// ​

// 4. Event listener this = <DOM element that the handler is attached to>​

// if a function is called as an event listener, then the this keyword will always point to the DOM element ​

// that the handler function is attached to.​

// ​

// => these are two pretty common misconceptions:​

// this keyword will never point to the function in which we are using it.​

// this keyword will never point to the variable environment of the function.​

// ​

// ​

// **there are other ways in which we can call a function: new, call, apply, bind

// The this keyword points to the window object in three cases: ​

// ​

// a. if the this keyword is outside of any function (just outside in global scope)​

// e.g.​

// console.log(this);​

// // Window object {...}​

// ​

// ​

// b. If the lexical scope (parent scope) of arrow function is global scope​

// e.g.​

// ​

//     const age = birthYear => {​
//     console.log(birthYear);​
//     console.log(this);​
//     }​
//     ​
//     age(1990);​

// // 1990​

// // Window object {...}​

// ​

// ​

// c. In case of regular function if you are not using strict mode​

// e.g.​

//     const age = function (birthYear) {​
//     console.log(birthYear);​
//     console.log(this);​
//     };​
//     ​
//     age(1990);​

// // 1990​

// // Window object {...}​​



//  .................. More Examples.....................

     
//  Working with THIS keyword
 
//  only in strict mode will be undefined
function start() {
    console.log(this);
}
start();
 
//  only in strict mode will be undefined
const newStart = function() {
    console.log(this);
}
newStart();
 
//  work in strict mode and point on WINDOW object
//    arrow functions don`t have own THIS KEYWORD they use lexical scope or parent scope its same 
const arr = () => console.log(this);
arr();
 
 
const person = {
    show: function() {
        // points on obj who is calling the method
        console.log(this);
    }
}
 
person.show();
 
 
// Event listeners
const btn = document.querySelector('button');
//  in this example THIS always point on Dom element who is attached handler BTN on this example
// btn.addEventListener('click', function() {
//     console.log(this);
// })
 
//  this example show on WINDOW OBJECT
// btn.addEventListener('click', () => {
//     console.log(this);
// })
 
 
 
const men = {
    //  parent scope
    name: 'Alex',
    here: () => {
        console.log(this);
    },
    //  object inside object
    job: {
        look: () => {
            console.log(this);
        }
    },
    regular: function() {
        console.log(this);
    }
}
 
// point to window obj
men.job.look();
 
//  also point to window obj
men.here();
 
//  point on obj who is calling
men.regular();

// ......... Regular Functions v/s Arrow Functions .........

const hk = {
  firstName: 'Hamza',
  year: 1993,
  calcAge: function() {
    // console.log(this);
    console.log(2021 - this.year);

    // Problem -> this keyowrd inside a fucntion is undefined!

    // // Solution 1 (Pre ES6)
      // // Re=define this as self/that by storing it in const so it is in Parent scope (and not defined in a function)
    // const self = this; // can be called self/that (pre ES6 solution)
    // const isMillenial =  function() {
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial();
    
    // Solution 2 (ES6 solution)
      // Using an arrow function as it doesnt have it's own 'this' keyword and inherits it from it's parent scope
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};
hk.greet();
hk.calcAge();
// Arrow functions dont have their own 'this' keyword!
// Never use arrow function as method!!

const addExprs =  function (a,b) {
  console.log(arguments);
  return a + b;
};
addExprs(2, 5);
addExprs(2, 5, 8, 12);

// 'arguments' keyword exists only for regular functions and NOT arrow functions!

// var addArrow = (a, b) => {
//   console.log(arguments);
//  return a + b;
// };

// addArrow(2, 5, 8);

// Primitive v/s Reference Types

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const mee = {
  name: 'Hamza',
  age: '28',
};

const friend = mee;
friend.age = 23;

console.log('Friend:', friend);
console.log('Me:', mee);

// Primitives are stored in Call Stack & References are stored in Heap

// To make the objects immutable one can also use Object.freeze() method on either of the variables. This can prevent one from changing the property values.

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before Marriage', jessica);
console.log('After Marriage', marriedJessica);

// Copying Objects

const videogame = {
  genre: 'action',
  name: 'uncharted 3',
};
const videogameCopy = Object.assign({ user: 'Bhavnish' }, videogame);
console.log(videogameCopy);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before Marriage', jessica2);
console.log('After Marriage', jessicaCopy);

// Object.assign only creates a 'shallow' copy, i.e. if another object is nested inside the object then this method won't work!

// If it's a shallow copy, nested objects won't be copied to a different location in memory. Thus, modifying the nested object through one variable will modify this object for all variables that has a reference to it.
// If it's a deep copy, all nested objects will be copied to different places in memory. In other words, it won't copy references only, but rather whole objects.

// Use Lodash (external library) for creating deep copy

