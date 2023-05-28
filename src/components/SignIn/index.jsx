import { useNavigate } from "react-router-dom";
import { Button } from "../Generic";
import {
  Container,
  Forgot,
  Inputt,
  Title,
  Wrapper,
  WrapperForgot,
} from "./style";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Title size={"20px"}> Sign In</Title>
        <Title mt={"44px"}> Login</Title>
        <Inputt mt={"6px"} placeholder="Login" />
        <Title mt={"34px"}> Password</Title>
        <Inputt placeholder="Password" />
        <WrapperForgot>
          <Forgot>Forgot</Forgot>
          <Forgot color="#46a358" onClick={() => navigate("/signup")}>
            Sign up
          </Forgot>
        </WrapperForgot>
        <Button
          mt="28"
          type="primary"
          width="100%"
          onClick={() => {
            navigate("/home");
            localStorage.token = "tets";
          }}
        >
          Login
        </Button>
      </Container>
    </Wrapper>
  );
};

export default SignIn;
