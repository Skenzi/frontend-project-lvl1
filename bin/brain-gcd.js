#!/usr/bin/env node
import engine from '../src/index.js';
import gameGcd from '../src/games/gcd.js';

engine(gameGcd, 'Find the greatest common divisor of given numbers.');
