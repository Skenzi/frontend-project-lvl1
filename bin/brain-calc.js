#!/usr/bin/env node
import { name, gameCalc } from '../src/index.js';

const userName = name();

console.log('What is the result of the expression?');
const isWin = gameCalc();
if (isWin) {
  console.log(`Congratulations ${userName}!`);
} else {
  console.log(`Let's try again, ${userName}.`);
}
