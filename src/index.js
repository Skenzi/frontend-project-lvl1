import readlineSync from 'readline-sync';
import gameIsEven from './games/even.js';

import greeting from './cli.js';

import gameCalc from './games/calc.js';

import gameGcd from './games/gcd.js';

import gameProgression from './games/progression.js';

import gamePrime from './games/prime.js';

const engine = (game, description) => {
  const userName = greeting();
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const correctAnswer = game();
    const userAnswer = readlineSync.question('Your Answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer! ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return 0;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
  return 0;
};

export {
  greeting, engine, gameIsEven, gameProgression, gamePrime, gameCalc, gameGcd,
};
