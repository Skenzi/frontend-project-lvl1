import getRandomInt from '../utils.js';
import engine from '../index.js';

const creatProgression = () => {
  const progression = [];
  const firstNum = getRandomInt();
  const difference = getRandomInt(1, 5);
  progression.push(firstNum);
  for (let i = 1; i < getRandomInt(6, 10); i += 1) {
    progression.push(progression[i - 1] + difference);
  }
  return progression;
};

const gameRound = () => {
  const progression = creatProgression();

  const indexNum = getRandomInt(0, (progression.length - 1));
  const encryptNumber = progression[indexNum];
  progression[indexNum] = '..';

  const newProgression = progression.join(' ');

  const question = newProgression;

  const correctAnswer = String(encryptNumber);

  return { correctAnswer, question };
};

export default () => engine(gameRound, 'What number is missing in the progression?');
