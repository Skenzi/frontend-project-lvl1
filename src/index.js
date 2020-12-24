import readlineSync from 'readline-sync';

const engine = (game, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const round = game();
    console.log(`Question: ${round.question}`);
    const userAnswer = readlineSync.question('Your Answer: ');
    if (userAnswer !== round.correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer! ;(. Correct answer was '${round.correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return 0;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
  return 0;
};

export default engine;
