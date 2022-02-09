import engine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'What is the result of the expression?';

const calc = (firstNumber, secondNumber, char) => {
  let result = 0;
  if (char === '+') {
    result = firstNumber + secondNumber;
  } else if (char === '-') {
    result = firstNumber - secondNumber;
  } else {
    result = firstNumber * secondNumber;
  }
  return result;
};

function gameCheck() {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const charNumber = getRandomNumber(0, 2);
  const charList = ['+', '-', '*'];
  const char = charList[charNumber];
  const question = `${firstNumber} ${char} ${secondNumber}`;
  const correctAnswer = calc(firstNumber, secondNumber, char);
  return [question, correctAnswer];
}

const brainCalc = () => engine(gameRules, gameCheck);

export default brainCalc;
