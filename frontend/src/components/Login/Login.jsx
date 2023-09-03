import {
  Container,
  Logo,
  Form,
  Input,
  SignUpLink,
  Button,
  ErrorMessage,
} from "./Login.styles";
import instagram from "../../assets/images/instagram-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e, key) => {
    let obj = { ...formData, [key]: e.target.value };
    setFormData({ obj });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const unFilledFields = Object.keys(formData).filter(
      (key) => !formData[key]
    );
    if (unFilledFields.length) {
      setError(`${unFilledFields.join(" or ")} is required`);
      return;
    }
    navigate('/home');
  };

  return (
    <Container>
      <Logo src={instagram}></Logo>
      <Form>
        <Input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => handleChange(e, "username")}
        ></Input>
        <Input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => handleChange(e, "password")}
        ></Input>
        <Button type="submit" onClick={handleSubmit}>
          Sign In
        </Button>
      </Form>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <SignUpLink>
        Do not have an account?<Link to="/register">Sign up</Link>
      </SignUpLink>
    </Container>
  );
};

export default Login;
