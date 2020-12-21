import readlineSync from 'readline-sync';

const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;

const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const gameIsEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
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

export default gameIsEven;
