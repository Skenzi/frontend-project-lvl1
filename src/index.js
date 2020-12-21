import gameIsEven from './games/even.js';

import name from './cli.js';

import gameCalc from './games/calc.js';

import gameGcd from './games/gcd.js';

import gameProgression from './games/progression.js';

import gamePrime from './games/prime.js';

const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;

const engine = (game) => {
  const userName = name();
  let isWin;
  switch (game) {
    case 'even': isWin = gameIsEven();
      break;
    case 'calc': isWin = gameCalc();
      break;
    case 'gcd': isWin = gameGcd();
      break;
    case 'progression': isWin = gameProgression();
      break;
    case 'prime': isWin = gamePrime();
      break;
    default: return 0;
  }
  if (isWin) {
    console.log(`Congratulations ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}.`);
  }
  return 0;
};

export {
  name, engine, getRandomInt,
};
