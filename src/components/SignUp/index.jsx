import { useNavigate } from "react-router-dom";
import { Button } from "../Generic";
import { Container, Inputt, Title, Wrapper } from "./style";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Title size={"20px"}> Sign Up</Title>
        <Inputt mt={"25px"} placeholder="Login" />
        <Inputt mt={"25px"} placeholder="First name" />
        <Inputt mt={"25px"} placeholder="Last name" />
        <Inputt mt={"25px"} placeholder="Email" />
        <Inputt mt={"25px"} placeholder="Password" />
        <Inputt mt={"25px"} placeholder="Re-enter password" />
        <Button mt="28" type="primary" width="100%" onClick={()=>navigate('/')} >
          Sign Up
        </Button>
      </Container>
    </Wrapper>
  );
};

export default SignUp;
