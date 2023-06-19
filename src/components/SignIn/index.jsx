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
import { useState } from "react";
import { message } from "antd";

const SignIn = () => {
  const navigate = useNavigate();
  const localData = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : [];

  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const foundItem = localData.find(item => item.password === formData.password && item.login === formData.login);

    if (foundItem) {
      message.success("Welcome to Eco City")
      navigate("/home");
    } else {
      setFormData({
        login: "",
        password: "",
      });
      message.error("Login or password error")
    }
  };

  return (
    <Wrapper>
      <Container>
        <form style={{ width: "100%" }} action="" onSubmit={handleSubmit}>
          <Title size={"20px"}> Sign In</Title>
          <Title mt={"44px"}> Login</Title>
          <Inputt
            required
            value={formData?.login}
            onChange={handleInputChange}
            mt={"6px"}
            placeholder="Login"
            name="login"
          />
          <Title mt={"34px"}> Password</Title>
          <Inputt
            required
            value={formData?.password}
            name="password"
            onChange={handleInputChange}
            placeholder="Password"
          />
          <WrapperForgot>
            <Forgot>Forgot</Forgot>
            <Forgot color="#46a358" onClick={() => navigate("/signup")}>
              Sign up
            </Forgot>
          </WrapperForgot>
          <Button mt="28" type="primary" width="100%" htmlType="submit">
            Login
          </Button>
        </form>
      </Container>
    </Wrapper>
  );
};

export default SignIn;
