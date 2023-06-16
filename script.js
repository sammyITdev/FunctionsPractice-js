'use strict';

/////////////////////////////////////////////////////////////////
// Coding Challenge #1

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
};

/*
/////////////////////////////////////////////////////////////////
// The Call, Apply, and Bind Methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Umida Rakhimova');
lufthansa.book(285, 'Saidhon Rakhimov');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// DOES NOT WORK
// book(23, 'Aziza Rakhimova');

// call method
book.call(eurowings, 23, 'Aziza Rakhimova');
console.log(eurowings);

book.call(lufthansa, 78, 'Otabek Rakhimov');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'JH',
  bookings: [],
};

book.call(swiss, 47, 'Umida Rakhimova');
console.log(swiss);

// Apply method
const flightData = [59, 'James Holmes'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method
// book.call(eurowings, 23, 'Aziza Rakhimova');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookJH = book.bind(swiss);

bookEW(61, 'Julia Roberts');
bookLH(74, 'Angelina Jolie');
bookJH(86, 'Justin Bieber');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Samira Rakhimova');
bookEW23('Saidhon Rakhimov');

// With Even Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// const addVAT = value => value + value * 0.23

console.log(addVAT(100));
console.log(addVAT(700));
console.log(addVAT(31));

const addTaxRate = function (rate) {
  return function (value) {
    console.log(value + value * rate);
  };
};

const value1 = addTaxRate(0.23);
value1(100);
value1(700);

/////////////////////////////////////////////////////////////////
// Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('James');
greeterHey('Sam');

greet('Hello')('Mom');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Dad');


/////////////////////////////////////////////////////////////////
// Functions Accepting Callback Functions 

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order function (because takes in another function)
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('✋');
};

document.body.addEventListener('click', high5);

['James', 'Robert', 'Holmes'].forEach(high5);


/////////////////////////////////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference

const flight = 'JH143';
const sherlock = {
  name: 'Sherlock Holmes',
  passport: 457583954314839,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'JH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 457583954314839) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, sherlock);
// console.log(flight);
// console.log(sherlock);

// Is the same as doing...
// const flightNum = flight;
// const passenger = sherlock;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000000);
};

newPassport(sherlock);
checkIn(flight, sherlock);


/////////////////////////////////////////////////////////////////
// Default Parameters 

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('JH143');
createBooking('JH143', 2, 800);
createBooking('JH143', 2);
createBooking('JH143', 5);

createBooking('JH143', undefined, 1000);
*/
