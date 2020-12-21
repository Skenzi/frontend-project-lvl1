import readlineSync from 'readline-sync';
import {getRandomInt} from '../index.js'

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
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your Answer: ');
    const correctAnswer = String(gcd(num1, num2));
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer! ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
};

export default gameGcd;
