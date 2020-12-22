import getRandomInt from '../general.js';

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

const toString = (arr) => {
  let string = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    string = `${string} ${arr[i]}`;
  }
  return string;
};

const gameProgression = () => {
  const progression = creatProgression();

  const indexNum = getRandomInt(0, (progression.length - 1));
  const encryptNumber = progression[indexNum];
  progression[indexNum] = '..';

  const newProgression = toString(progression);

  console.log(`Question: ${newProgression}`);

  const correctAnswer = String(encryptNumber);

  return correctAnswer;
};

export default gameProgression;
