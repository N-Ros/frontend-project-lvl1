import engine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRules = 'What is the result of the expression?';

const charList = ['+', '-', '*'];

const calc = (firstNumber, secondNumber, char) => {
  switch (char) {
    case '+':
      return (firstNumber + secondNumber);
    case '-':
      return (firstNumber - secondNumber);
    case '*':
      return (firstNumber * secondNumber);
    default:
      throw new Error(`Unknown symbol: '${char}'!`);
  }
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

const playBrainCalc = () => engine(gameRules, gameCheck);

export default playBrainCalc;
