import engine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 0 || number === 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let i = number - 1; i >= number / 2; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const gameCheck = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

const brainPrime = () => engine(gameRules, gameCheck);

export default brainPrime;
