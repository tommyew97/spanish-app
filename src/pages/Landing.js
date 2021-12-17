import { Container, Title, LoginButton, LoginButtonContainer } from "../styles";

function Landing() {
  return (
    <Container>
      <Title>Welcome to spanish-app</Title>
      <LoginButtonContainer>
        <a href="/.auth/login/google?post_login_redirect_uri=/quiz" style={{ textDecoration: "none" }}>
          <LoginButton>
            <span>Login</span>
          </LoginButton>
        </a>
      </LoginButtonContainer>
    </Container>
  );
}

export default Landing;
