import { Container, Title, LoginButton, LoginButtonContainer } from "../styles";

function Landing() {
  return (
    <Container>
      <Title>Welcome to spanish-app</Title>
      <LoginButtonContainer>
        <a href="/.auth/login/google" style={{ textDecoration: "none" }}>
          <LoginButton>
            <span>Login</span>
          </LoginButton>
        </a>
      </LoginButtonContainer>
    </Container>
  );
}

export default Landing;
