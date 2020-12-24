#!/usr/bin/env node
import engine from '../src/index.js';
import gamePrime from '../src/games/prime.js';

engine(gamePrime, 'Answer "yes" if given number is prime. Otherwise answer "no".');
