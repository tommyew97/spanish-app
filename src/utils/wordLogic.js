import { arraymeaning } from "../assets/spanishWords";
import { englishWordList } from "../assets/englishWords";

const getRandomWordPair = () => {
  let validWordsFlag = false;
  let wordPair = ["hei", "hei"];
  while (!validWordsFlag) {
    let index = Math.floor(Math.random() * 9000);
    let englishWord = englishWordList[index];
    let spanishWord = arraymeaning[englishWord];
    wordPair = [englishWord, spanishWord];
    if (checkValidWords(wordPair)) validWordsFlag = true;
  }
  return wordPair;
};

const checkValidWords = (wordPair) => {
  if (wordPair[0].trim() === wordPair[1].trim()) return false;
  if (wordPair[0].length > 10) return false;
  for (var i = 0; i < wordPair[0].length - 1; i++) {
    if (wordPair[0][i] < "a" || wordPair[0][i] > "z") return false;
  }
  for (var i = 0; i < wordPair[1].length - 1; i++) {
    if (wordPair[1][i] < "a" || wordPair[1][i] > "z") return false;
  }
  return true;
};

const testValidWords = () => {
  let wordPair = ["tic", arraymeaning["tic"]];
  console.log(checkValidWords(wordPair));
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

export const getWords = () => {
  const correctPair = getRandomWordPair();
  const options = [correctPair[1]];
  for (var i = 0; i < 3; i++) {
    let wordPair = getRandomWordPair();
    options.push(wordPair[1]);
  }
  shuffleArray(options);
  const result = {
    question: correctPair[0],
    answer: correctPair[1],
    options: options,
  };
  return result;
};
