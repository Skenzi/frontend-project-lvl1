#!/usr/bin/env node
import { name, gameIsEven } from '../src/index.js';

const userName = name();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const isWin = gameIsEven();
if (isWin) {
  console.log(`Congratulations ${userName}!`);
} else {
  console.log(`Let's try again, ${userName}.`);
}
