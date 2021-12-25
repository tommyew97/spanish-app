import {
    Container,
    Button,
    ButtonContainer,
    Title,
    Counter,
    SubText,
    StyledLink,
    StartButton,
    StartButtonContainer,
} from "../styles";
import { getWords } from "../utils/wordLogic";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Quiz() {
    const [correctWord, setCorrectWord] = useState(null);
    const [answerOptions, setAnswerOptions] = useState([]);
    const [question, setQuestion] = useState(null);
    const [rightCount, setRightCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [gameFinished, setGameFinished] = useState(false);

    const { questionNum } = useParams();

    const checkAnswer = (answer) => {
        if (answer === correctWord) setRightCount(rightCount + 1);
        setTotalCount(totalCount + 1);
        if (!checkFinished()) newWords();
    };

    const newWords = () => {
        let words = getWords();
        setCorrectWord(words.answer);
        setAnswerOptions(words.options);
        setQuestion(words.question);
    };

    const checkFinished = () => {
        if (totalCount == questionNum - 1) {
            setGameFinished(true);
        }
    };

    const gameFinishedView = () => {
        return (
            <Container>
                <Title>Game finished</Title>
                <SubText>
                    Your score is {rightCount}/{totalCount}
                </SubText>
                <StartButtonContainer>
                    <StyledLink to="/main">
                        <StartButton>
                            <span>Main menu</span>
                        </StartButton>
                    </StyledLink>
                </StartButtonContainer>
            </Container>
        );
    };

    const quizView = () => {
        return (
            <Container>
                <Counter>
                    {rightCount}/{totalCount}
                </Counter>
                <Title>What is "{question}" in spanish?</Title>
                <ButtonContainer>
                    <div className="ButtonRow">
                        <Button
                            color="#7F636E"
                            onClick={() => checkAnswer(answerOptions[0])}
                        >
                            <span>{answerOptions[0]}</span>
                        </Button>
                        <Button
                            color="#55868C"
                            onClick={() => checkAnswer(answerOptions[1])}
                        >
                            <span>{answerOptions[1]}</span>
                        </Button>
                    </div>
                    <div className="ButtonRow">
                        <Button
                            color="#594F3B"
                            onClick={() => checkAnswer(answerOptions[2])}
                        >
                            <span>{answerOptions[2]}</span>
                        </Button>
                        <Button
                            color="#2C5784"
                            onClick={() => checkAnswer(answerOptions[3])}
                        >
                            <span>{answerOptions[3]}</span>
                        </Button>
                    </div>
                </ButtonContainer>
            </Container>
        );
    };

    useEffect(() => {
        newWords();
    }, []);
    return <>{gameFinished ? gameFinishedView() : quizView()}</>;
}

export default Quiz;
