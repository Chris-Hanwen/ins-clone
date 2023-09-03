import {
  Container,
  Logo,
  Form,
  Input,
  Button,
  SignUpLink,
  ErrorMessage,
} from "./Register.styles";
import instagram from "../../assets/images/instagram-logo.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  //   const [fullName, setFullName] = useState("");
  //   const [emailOrMobile, setEmailOrMobile] = useState("");
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e, key) => {
    let obj = { ...formData, [key]: e.target.value };
    setFormData(obj);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log("formData", formData);
    const unFilledFields = Object.keys(formData).filter(
      (key) => !formData[key]
    );
    if (unFilledFields.length > 0) {
      setError(`${unFilledFields.join(" ")} are required`);
      return;
    }
    navigate("/home");
  };
  return (
    <Container>
      <Logo src={instagram} alt="instagram" />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Full Name"
          value={formData.fullname}
          onChange={(e) => handleChange(e, "fullname")}
        />
        <Input
          type="text"
          placeholder="Mobile Number or Email"
          value={formData.email}
          onChange={(e) => handleChange(e, "email")}
        />
        <Input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => handleChange(e, "username")}
        />
        <Input
          type="text"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => handleChange(e, "password")}
        />
        <Button type="submit" >Sign Up</Button>
      </Form>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <SignUpLink>
        Already have an account?<Link to="/login">Login in</Link>
      </SignUpLink>
    </Container>
  );
};

export default Register;
