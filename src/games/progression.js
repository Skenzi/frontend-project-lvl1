import readlineSync from 'readline-sync';
import {getRandomInt} from '../index.js'

const creatProgression = () => {
  const progression = [];
  const firstNum = getRandomInt();
  const difference = getRandomInt(1, 10);
  progression.push(firstNum);
  for (let i = 1; i < getRandomInt(5, 10); i += 1) {
    progression.push(progression[i - 1] + difference);
  }
  return progression;
};

const gameProgression = () => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const progression = creatProgression();

    const indexNum = getRandomInt(0, (progression.length - 1));
    const encryptNumber = progression[indexNum];
    progression[indexNum] = '..';

    console.log(`Question: ${progression}`);
    const userAnswer = readlineSync.question('Your Answer: ');
    const correctAnswer = String(encryptNumber);
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer! ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
};

export default gameProgression;
