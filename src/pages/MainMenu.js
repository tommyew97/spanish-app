import {
    Container,
    Title,
    StartButton,
    StartButtonContainer,
    StyledLink,
} from "../styles";
import { useEffect } from "react";
import { getAuthToken } from "../api/getAuthToken";
import { useSelector, useDispatch } from "react-redux";
import { setId, setName } from "../redux/user/userSlice";

function MainMenu() {
    const name = useSelector((state) => state.user.name);
    const dispatch = useDispatch();
    async function getUserData() {
        let data = await getAuthToken();
        if (data) {
            dispatch(setName(data[0].user_claims[9].val));
            dispatch(setId(data[0].user_claims[3].val));
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
