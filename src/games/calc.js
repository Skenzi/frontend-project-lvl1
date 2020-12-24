import getRandomInt from '../general.js';

const calc = (num1, num2, sign) => {
  switch (sign) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: return 0;
  }
};

const signs = ['+', '-', '*'];

const gameCalc = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const signIndex = getRandomInt(0, 2);
  const question = `${num1} ${signs[signIndex]} ${num2}`;
  const correctAnswer = String(calc(num1, num2, signs[signIndex]));
  return [correctAnswer, question];
};

export default gameCalc;
