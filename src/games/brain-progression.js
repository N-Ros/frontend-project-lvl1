import engine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gameCheck = () => {
  const firstMember = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 10);
  const numberOfSteps = getRandomNumber(5, 10);
  const array = [firstMember];
  for (let i = 1; i < numberOfSteps; i += 1) {
    array.push(array[i - 1] + step);
  }
  const randomMember = getRandomNumber(0, array.length - 1);
  const correctAnswer = `${array[randomMember]}`;
  array[randomMember] = '..';
  const question = `${array.join(' ')}`;
  return [question, correctAnswer];
};

const isLostMember = () => engine(gameRules, gameCheck);

export default isLostMember;
