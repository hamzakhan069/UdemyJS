'use strict';

// 1. Default Parameters in ES6
// __________________________________

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5 way
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('H123', 3);
createBooking('H1235', undefined, 300);

// 2. How passing Arguements works: Value v/s Reference
// _______________________________________________________

const flight = 'LH234';
const hamza = { name: 'Hamza Khan', passport: 2434389837489 };
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2434389837489) {
    alert('Check In');
  } else {
    alert('Wrong Passport!');
  }
};
checkIn(flight, hamza);
console.log(flight);
console.log(hamza);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};
newPassport(hamza);
checkIn(flight, hamza);

// 3. First Class and Higher Order Functions
// ______________________________________________

// 4. Fucntions accepting Callback Functions
// ______________________________________________

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// Higher Order Function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Tranformed String : ${fn(str)}`);
  console.log(`Tranformed by ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// 5. Functions returning Functions
// _______________________________________

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey 🙄');
greeterHey('Hamza');
greeterHey('Steve');

greet('Hello')('Hamza');

//Challenge

const greetFn = greeting => name => console.log(`${greeting} ${name}`);

greetFn('Hi')('Hamza');

// 6. the Call and Apply methods
// ________________________________

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Hamza Khan');
lufthansa.book(635, 'John Doe');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Doesnt work because it's a regular function call whose 'this' keyword points to undefined
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airline',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// Apply method

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
// ES6 Apply alternative
book.call(swiss, ...flightData);

// 7. the Bind method
// _________________________

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Hamza Khan');
bookEW23('Payal Srivastava');
bookEW23('Rahul Prakash');

// With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

// 8. Immediately Invoked Function Expressions
// ______________________________________________

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();
// IIFE
(function () {
  console.log('This will never run again FR');
})();

(() => console.log('This will also never run again'))();

// 9. Closures
// ______________

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
console.dir(booker);

// Closure Example 1

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
// Re-assigning f function
h();
f();

// Closure Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`----- We are now boarding all ${n} passengers -----`);
    console.log(
      `----- There are 3 groups, each with ${perGroup} passengers -----`
    );
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds...`);
};

boardPassengers(180, 3);
