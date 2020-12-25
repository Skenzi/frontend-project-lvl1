import getRandomInt from '../utils.js';
import engine from '../index.js';

const isEven = (num) => num % 2 === 0;

const gameRound = () => {
  const number = getRandomInt();
  const question = number;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { correctAnswer, question };
};

export default () => engine(gameRound, 'Answer "yes" if the number is even, otherwise answer "no".');
