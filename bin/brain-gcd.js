#!/usr/bin/env node
import { name, gameGcd } from '../src/index.js';

const userName = name();

console.log('Find the greatest common divisor of given numbers.');
const isWin = gameGcd();
if (isWin) {
  console.log(`Congratulations ${userName}!`);
} else {
  console.log(`Let's try again, ${userName}.`);
}
