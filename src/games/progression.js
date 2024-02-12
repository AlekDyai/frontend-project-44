import runBasisOfGameAndGameGeneration from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const minAmountElements = 5;
const maxAmountElements = 10;
const minElement = 1;
const maxElement = 20;
const minDifference = 1;
const maxDifference = 10;

const makeProgression = (length, element, step) => {
  let firstElement = element;
  const progression = [];
  progression.push(firstElement);
  while (progression.length < length) {
    firstElement += step;
    progression.push(firstElement);
  }
  return progression;
};

const findMissingNumber = () => {
  const taskDescription = 'What number is missing in the progression?';

  const progressionTask = () => {
    const progressionLength = getRandomNumber(minAmountElements, maxAmountElements);
    const element = getRandomNumber(minElement, maxElement);
    const progressionStep = getRandomNumber(minDifference, maxDifference);

    const numberProgression = makeProgression(progressionLength, element, progressionStep);

    const positionOfHiddenElement = getRandomIndex(numberProgression);
    const result = String(numberProgression[positionOfHiddenElement]);
    numberProgression[positionOfHiddenElement] = '..';
    const question = `Question: ${numberProgression.join(' ')}`;

    return [question, result];
  };

  runBasisOfGameAndGameGeneration(taskDescription, progressionTask);
};

export default findMissingNumber;
