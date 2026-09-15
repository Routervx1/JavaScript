const prompt = require('prompt-sync')({sigint: true});

// Random number from 1 - 10
const numberToGuess = Math.floor(Math.random() * 10) + 1;

console.log(numberToGuess);