import engine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

function gcd(firstNumber, secondNumber) {
  const first = Math.max(firstNumber, secondNumber);
  const second = Math.min(firstNumber, secondNumber);
  let result = 0;
  for (let i = second; i >= 1; i -= 1) {
    if (first % i === 0 && second % i === 0) {
      result = i;
      return result;
    }
  }
  return result;
}

const gameCheck = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(gcd(firstNumber, secondNumber));
  return [question, correctAnswer];
};

const isGcd = () => engine(gameRules, gameCheck);

export default isGcd;
