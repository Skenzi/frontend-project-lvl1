import readlineSync from 'readline-sync';

const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;

const prime = (num) => {
  for (let i = 2; i <= (num / 2); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gamePrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomInt();
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your Answer: ');
    const correctAnswer = prime(num);
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer! ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
};

export default gamePrime;
