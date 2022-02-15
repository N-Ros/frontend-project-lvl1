import engine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const progression = (firstMember, ctepsCounter, step) => {
  const result = [firstMember];
  for (let i = 1; i < ctepsCounter; i += 1) {
    result.push(result[i - 1] + step);
  }
  return result;
};

const gameCheck = () => {
  const firstMember = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 10);
  const stepsCounter = getRandomNumber(5, 10);
  const array = progression(firstMember, stepsCounter, step);
  const randomMember = getRandomNumber(0, array.length - 1);
  const correctAnswer = String(array[randomMember]);
  array[randomMember] = '..';
  return [array.join(' '), correctAnswer];
};

const playBrainMember = () => engine(gameRules, gameCheck);

export default playBrainMember;
