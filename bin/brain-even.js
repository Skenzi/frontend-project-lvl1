#!/usr/bin/env node

import readlineSync from 'readline-sync';
import gameIsEven from '../src/even.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const isWin = gameIsEven();
if (isWin) {
  console.log(`Congratulations ${userName}!`);
} else {
  console.log(`Let's try again, ${userName}.`);
}
