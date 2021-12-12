import "./App.css";
import {
  Container,
  Button,
  ButtonContainer,
  QuestionText,
  Counter,
} from "./styles";
import { getWords } from "./utils/wordLogic";
import { useState, useEffect } from "react";

function App() {
  const [correctWord, setCorrectWord] = useState(null);
  const [answerOptions, setAnswerOptions] = useState([]);
  const [question, setQuestion] = useState(null);
  const [rightCount, setRightCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const checkAnswer = (answer) => {
    if (answer === correctWord) setRightCount(rightCount + 1);
    setTotalCount(totalCount + 1);
    newWords();
  };

  const newWords = () => {
    let words = getWords();
    setCorrectWord(words.answer);
    setAnswerOptions(words.options);
    setQuestion(words.question);
  };

  useEffect(() => {
    newWords();
  }, []);
  return (
    <Container>
      <Counter>
        {rightCount}/{totalCount}
      </Counter>
      <QuestionText>What is "{question}" in spanish?</QuestionText>
      <ButtonContainer>
        <div className="ButtonRow">
          <Button color="#7F636E" onClick={() => checkAnswer(answerOptions[0])}>
            <span>{answerOptions[0]}</span>
          </Button>
          <Button color="#55868C" onClick={() => checkAnswer(answerOptions[1])}>
            <span>{answerOptions[1]}</span>
          </Button>
        </div>
        <div className="ButtonRow">
          <Button color="#594F3B" onClick={() => checkAnswer(answerOptions[2])}>
            <span>{answerOptions[2]}</span>
          </Button>
          <Button color="#2C5784" onClick={() => checkAnswer(answerOptions[3])}>
            <span>{answerOptions[3]}</span>
          </Button>
        </div>
      </ButtonContainer>
    </Container>
  );
}

export default App;
