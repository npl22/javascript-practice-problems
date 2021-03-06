// Write a function that takes three strings - a verb, an adjective, and a noun - uppercases and interpolates them into the sentence "We shall VERB the ADJECTIVE NOUN". Use ES6 template literals.
//
// For example,
//
// > madLib('make', 'best', 'guac');
// "We shall MAKE the BEST GUAC."

function madLib(verb, adj, noun) {
  return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`;
}

// Input:
// A String, called searchString.
// A String, called subString.
// Output: A Boolean. true if the subString is a part of the searchString.
//
// > isSubstring("time to program", "time")
// true
//
// > isSubstring("Jump for joy", "joys")
// false

function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}

// fizzBuzz
//
// 3 and 5 are magic numbers.
//
// Define a function fizzBuzz(array) that takes an array and returns a new array of every number in the array that is divisible by either 3 or 5, but not both.

function fizzBuzz(array) {
  const result = [];
  array.forEach(el => {
    if (el % 3 === 0 ^ el % 5 === 0) {
      result.push(el);
    }
  });
  return result;
}

const array = new Array(100);
for (let i = 0; i < 100; i++) { array[i] = i + 1; }
console.log(fizzBuzz(array));

// isPrime
//
// Define a function isPrime(number) that returns true if number is prime. Otherwise, false. Assume number is a positive integer.

function isPrime(number) {
  if (number === 2 || number === 3) { return true; }
  if (number % 2 === 0) { return false; }

  for (let i = 3; i < Math.sqrt(number)+1; i += 2) {
    if (number % i === 0) { return false; }
  }
  return true;
}

console.log(isPrime(2));
console.log(isPrime(10));
console.log(isPrime(15485863));
console.log(isPrime(3548563));

// sumOfNPrimes
//
// Write a function sumOfNPrimes(n) that returns the sum of the first n prime numbers. Hint: use isPrime as a helper method.

function sumOfNPrimes(n) {
  let sum = 2;
  let count = 1;
  if ( n === 0 ) { return 0; }
  if ( n === 1 ) { return 2; }
  if ( n === 2 ) { return 2+3; }

  let i = 3;
  while (count < n) {
    if (isPrime(i)) {
      sum += i;
      count++;
    }
    i += 2;
  }
  return sum;
}

console.log(sumOfNPrimes(0));
console.log(sumOfNPrimes(1));
console.log(sumOfNPrimes(4));
console.log(sumOfNPrimes(100));
