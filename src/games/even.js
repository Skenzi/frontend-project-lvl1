import readlineSync from 'readline-sync';

const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const getRandomInt = (min = 0, max = 30) => Math.floor(Math.random() * (max - min)) + min;

const gameIsEven = () => {
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your Answer: ');
    const correctAnswer = isEven(number);
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer! ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
};

export { gameIsEven, getRandomInt };
