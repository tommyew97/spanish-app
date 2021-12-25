import {
    Container,
    Title,
    StartButton,
    StartButtonContainer,
    StyledLink,
} from "../styles";
import { useState, useEffect } from "react";
import { getAuthToken } from "../api/getAuthToken";

function MainMenu() {
    const [name, setName] = useState(null);
    const [userToken, setUserToken] = useState(null);
    async function getUserData() {
        let data = await getAuthToken();
        if (data) {
            setName(data[0].user_claims[9].val);
            setUserToken(data[0].user_claims[3].val);
        }
    }
    useEffect(() => {
        getUserData();
    }, []);
    return (
        <Container>
            <Title>Welcome {name}</Title>
            <StartButtonContainer>
                <StyledLink to="/quiz/10">
                    <StartButton>
                        <span>10 questions</span>
                    </StartButton>
                </StyledLink>
            </StartButtonContainer>
        </Container>
    );
}

export default MainMenu;
