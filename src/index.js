import readlineSync from 'readline-sync';

const roundsCount = 3;

const engine = (gameRules, gameCheck) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?  ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  for (let i = 1; i <= roundsCount; i += 1) {
    const [getQuestion, correctAnswer] = gameCheck();
    console.log(`Question: ${getQuestion}`);
    const userAswer = readlineSync.question('Your answer:  ');
    if (userAswer !== correctAnswer) {
      console.log(`${userAswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default engine;
