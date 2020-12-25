import getRandomInt from '../utils.js';
import engine from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i <= (num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameRound = () => {
  const num = getRandomInt(2);
  const question = num;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return { correctAnswer, question };
};

export default () => engine(gameRound, 'Answer "yes" if given number is prime. Otherwise answer "no".');
