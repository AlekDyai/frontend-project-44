import runBasisOfGameAndGameGeneration from '../index.js';
import { getRandomNumber } from '../utils.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 25;

const getGCD = (firstNumber, secondNumber) => {
  let firstDivisor = firstNumber;
  let secondDivisor = secondNumber;
  while (firstDivisor !== secondDivisor) {
    if (firstDivisor > secondDivisor) {
      firstDivisor -= secondDivisor;
    } else {
      secondDivisor -= firstDivisor;
    }
  }
  return firstDivisor;
};

const findGreatestCommonDivisor = () => {
  const taskDescription = 'Find the greatest common divisor of given numbers.';

  const gcdTask = () => {
    const firstNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
    const secondNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);

    const question = (`Question: ${firstNumber} ${secondNumber}`);

    const result = String(getGCD(firstNumber, secondNumber));
    return [question, result];
  };

  runBasisOfGameAndGameGeneration(taskDescription, gcdTask);
};

export default findGreatestCommonDivisor;