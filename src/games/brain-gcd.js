import engine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

function gcd(firstNumber, secondNumber) {
  let first = 0;
  let second = 0;
  let result = 0;
  if (firstNumber >= secondNumber) {
    first = firstNumber;
    second = secondNumber;
  } else {
    second = firstNumber;
    first = secondNumber;
  }
  for (let i = second; i >= 1; i -= 1) {
    if (first % i === 0) {
      result = i;
      if (second % i === 0) {
        return result;
      }
    }
  }
  return result;
}

const gameCheck = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = `${gcd(firstNumber, secondNumber)}`;
  return [question, correctAnswer];
};

const isGcd = () => engine(gameRules, gameCheck);

export default isGcd;
