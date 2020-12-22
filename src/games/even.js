import getRandomInt from '../general.js';

const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const gameIsEven = () => {
  const number = getRandomInt();
  console.log(`Question: ${number}`);
  const correctAnswer = isEven(number);
  return correctAnswer;
};

export default gameIsEven;
