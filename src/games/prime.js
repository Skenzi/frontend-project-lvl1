import getRandomInt from '../general.js';

const prime = (num) => {
  for (let i = 2; i <= (num / 2); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gamePrime = () => {
  const num = getRandomInt(2);
  console.log(`Question: ${num}`);
  const correctAnswer = prime(num);
  return correctAnswer;
};

export default gamePrime;
