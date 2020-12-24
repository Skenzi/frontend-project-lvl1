import getRandomInt from '../general.js';

const isPrime = (num) => {
  for (let i = 2; i <= (num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gamePrime = () => {
  const num = getRandomInt(2);
  const question = num;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return { correctAnswer, question };
};

export default gamePrime;
