import { arraymeaning } from "../assets/spanishWords";
import { englishWordList } from "../assets/englishWords";

export const printWord = () => {
  let index = Math.floor(Math.random() * 9000);
  let englishWord = englishWordList[index];
  let spanishWord = arraymeaning[englishWord];
  return [englishWord, spanishWord];
};
