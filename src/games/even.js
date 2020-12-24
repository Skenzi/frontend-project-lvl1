import getRandomInt from '../general.js';

const isEven = (num) => num % 2 === 0;

const gameIsEven = () => {
  const number = getRandomInt();
  const question = number;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [correctAnswer, question];
};

export default gameIsEven;
