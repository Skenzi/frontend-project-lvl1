#!/usr/bin/env node
import { name, gameCalc } from '../src/index.js';

const userName = name();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const isWin = gameCalc();
if (isWin) {
  console.log(`Congratulations ${userName}!`);
} else {
  console.log(`Let's try again, ${userName}.`);
}
