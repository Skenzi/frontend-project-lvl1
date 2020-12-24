#!/usr/bin/env node
import engine from '../src/index.js';
import gameProgression from '../src/games/progression.js';

engine(gameProgression, 'What number is missing in the progression?');
