import readlineSync from 'readline-sync';

const getRandomInt = (min = 1, max = 9) => Math.floor(Math.random() * (max - min)) + min;

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

const gameProgression = () => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const progression = creatProgression();

    const indexNum = getRandomInt(0, (progression.length - 1));
    const encryptNumber = progression[indexNum];
    progression[indexNum] = '..';

    let newProgression = '';
    for (let j = 0; j < progression.length; j += 1) {
      newProgression = `${newProgression} ${progression[j]}`;
    }

    console.log(`Question: ${newProgression}`);
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
