import { useNavigate } from "react-router-dom";
import { Button } from "../Generic";
import { Container, Inputt, Title, Wrapper } from "./style";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();

  const localData = localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : [];

  const [formData, setFormData] = useState({
    id:'',
    login: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      id: new Date(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem(
      "auth",
      JSON.stringify([...localData, formData])
    );
    setFormData({
      login: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      id:''
    });
    navigate('/home')
  };

  return (
    <Wrapper>
      <Container>
        <Title size={"20px"}> Sign Up</Title>
        <form onSubmit={handleSubmit}>
          <Inputt
            required
            value={formData?.login}
            onChange={handleInputChange}
            name="login"
            mt={"25px"}
            placeholder="Login"
          />
          <Inputt
            value={formData?.firstName}
            onChange={handleInputChange}
            name="firstName"
            mt={"25px"}
            placeholder="First name"
          />
          <Inputt
            value={formData?.lastName}
            onChange={handleInputChange}
            name="lastName"
            mt={"25px"}
            placeholder="Last name"
          />
          <Inputt
            value={formData?.email}
            onChange={handleInputChange}
            name="email"
            mt={"25px"}
            placeholder="Email"
          />
          <Inputt
            value={formData?.password}
            onChange={handleInputChange}
            name="password"
            type="password"
            mt={"25px"}
            placeholder="Password"
            required
          />
          <Inputt
            value={formData?.rePassword}
            onChange={handleInputChange}
            name="rePassword"
            type="password"
            mt={"25px"}
            placeholder="Re-enter password"
            required
          />
          <Button mt="28" type="primary" width="100%" htmlType="submit">
            Sign Up
          </Button>
        </form>
      </Container>
    </Wrapper>
  );
};

export default SignUp;
