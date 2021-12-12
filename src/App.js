import "./App.css";
import { Container, Button, ButtonContainer, QuestionText } from "./styles";
import { printWord } from "./utils/wordLogic";
import { useState, useEffect } from "react";

function App() {
  const [correctWord, setCorrectWord] = useState(null);
  const [answerOptions, setAnswerOptions] = useState([]);
  useEffect(() => {
    let correctPair = printWord();
    setCorrectWord(correctPair[1]);
    setAnswerOptions([correctPair[1]]);
    for (var i; i < 3; i++) {
      let wordPair = printWord();
      setAnswerOptions((prev) => [...prev, wordPair[1]]);
    }
  });
  return (
    <Container>
      <QuestionText>What is "red" in spanish?</QuestionText>
      <ButtonContainer>
        <div className="ButtonRow">
          <Button color="#7F636E">
            <span> Rojo </span>
          </Button>
          <Button color="#55868C">
            <span> Rojo </span>
          </Button>
        </div>
        <div className="ButtonRow">
          <Button color="#594F3B">
            <span> Rojo </span>
          </Button>
          <Button color="#2C5784">
            <span> Rojo </span>
          </Button>
        </div>
      </ButtonContainer>
    </Container>
  );
}

export default App;
