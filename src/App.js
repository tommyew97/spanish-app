import "./App.css";
import { Container, Button, ButtonContainer, QuestionText } from "./styles";

function App() {
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
