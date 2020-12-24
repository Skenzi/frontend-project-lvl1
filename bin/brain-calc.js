#!/usr/bin/env node
import engine from '../src/index.js';
import gameCalc from '../src/games/calc.js';

engine(gameCalc, 'What is the result of the expression?');
