import getRandomInt from '../general.js';

const gcd = (num1, num2) => {
  const minNum = Math.min(num1, num2);
  for (let i = minNum; i > 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return 1;
};

const gameGcd = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  console.log(`Question: ${num1} ${num2}`);
  const correctAnswer = String(gcd(num1, num2));
  return correctAnswer;
};

export default gameGcd;
