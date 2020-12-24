#!/usr/bin/env node
import engine from '../src/index.js';
import gameIsEven from '../src/games/even.js';

engine(gameIsEven, 'Answer "yes" if the number is even, otherwise answer "no".');
