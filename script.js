'use strict';

///////////////////////////////////////
// Coding Challenge #2
/*
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event 
listener that changes the color of the selected h1 element ('header') to 
blue, each time the BODY element is clicked. Do NOT select the h1 element
 again!

 And now explain to YOURSELF (or someone around you) WHY this worked! 
Take all the time you need. Think about WHEN exactly the callback 
function is executed, and what that means for the variables involved in 
this example.

// GOOD LUCK 😀
*/
/*

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
*/

/*
/////////////////////////////////////////////////////////////////
// Closures

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

// More examples of closures (Example #1)

let jam;
const hol = function () {
  const rob = 23;
  jam = function () {
    console.log(rob * 2);
  };
};

const sam = function () {
  const rak = 777;
  jam = function () {
    console.log(rak * 2);
  };
};

hol();
jam();
console.dir(jam);

// Re-assigning jam function
sam();
jam();
console.dir(jam);
// A closure always makes sure that a function never loses its connnection to the variables that were present at its birthplace

// Example #2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);

// This is the timeout function in js, the first parameter is what the function should do, the second parameter is milliseconds in which the specifified function needs to work
// setTimeout(function () {
//   console.log('TIMER');
// }, 5000);


/////////////////////////////////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)

const runOnce = function () {
  console.log('This will never run again!');
};

runOnce();

// IIFE
(function () {
  console.log('This will never run again!');
  const isPrivate = 77;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 77;
  var notPrivate = 87l
}

console.log(isPrivate);
console.log(notPrivate);
*/
/*
/////////////////////////////////////////////////////////////////
// Coding Challenge #1
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose,
 and an array with the number of replies for each option. This data is
  stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The 
method does 2 things:
  1.1. Display a prompt window for the user to input the number of the 
  selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, 
  if the option is 3, increase the value AT POSITION 3 of the array by 1.
   Make sure to check if the input is a number and if the number makes 
   sense (e.g answer 52 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answer poll" button.

3. Create a method 'displayResults' which displays the poll results. 
The method takes a string as an input (called 'type'), which can be
 either 'string' or 'array'. If type is 'array', simply display the 
 results array as it is, using console.log(). This should be the default
  option. If type is 'string', display a string like "Poll results are 
  13, 2, 4, 1". 

4. Run the 'displayResults' method at the end of each 'registerNewAnswer'
 method call.

HINT: Use many of the tools you learned about in this and the last 
section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the 
test data. Use both the 'array' and the 'string' option. Do NOT put the
 arrays in the poll object! So what shoud the this keyword look like in
  this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// #1
/*
const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    // console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]


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
