import engine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'What is the result of the expression?';

const charList = ['+', '-', '*'];

const calc = (firstNumber, secondNumber, char) => {
  let result = 0;
  switch (char) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    default:
      result = firstNumber * secondNumber;
      break;
  }
  return result;
};

function gameCheck() {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const charNumber = getRandomNumber(0, charList.length - 1);
  const char = charList[charNumber];
  const question = `${firstNumber} ${char} ${secondNumber}`;
  const correctAnswer = String(calc(firstNumber, secondNumber, char));
  return [question, correctAnswer];
}

const brainCalc = () => engine(gameRules, gameCheck);

export default brainCalc;
