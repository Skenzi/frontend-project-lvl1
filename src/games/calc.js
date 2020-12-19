import readlineSync from 'readline-sync';

const calc = (num1, num2, sign) => {
  switch (sign) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: return 0;
  }
};

const getRandomInt = (min = 0, max = 30) => Math.floor(Math.random() * (max - min)) + min;

const signs = ['+', '-', '*'];

const gameCalc = () => {
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const signIndex = getRandomInt(0, 2);
    console.log(`Question: ${num1} ${signs[signIndex]} ${num2}`);
    const userAnswer = readlineSync.question('Your Answer: ');
    const correctAnswer = String(calc(num1, num2, signs[signIndex]));
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer! ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
};

export default gameCalc;
