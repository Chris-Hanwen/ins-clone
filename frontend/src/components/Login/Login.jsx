import {
  Container,
  Logo,
  Form,
  Input,
  Button,
  ErrorMessage,
  SignUpLink,
} from './Login.styles';
import instagram from '../../assets/images/instagram-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { axiosInstance, setAuthToken } from '../../apiConfig';
import { useDispatch } from 'react-redux';
import { saveUserID } from '../../Redux/UserData';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e, key) => {
    let obj = { ...formData, [key]: e.target.value };
    setFormData(obj);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const unFilledFields = Object.keys(formData).filter(
      (key) => !formData[key]
    );
    if (unFilledFields.length) {
      setError(`${unFilledFields.join(' or ')} is required`);
      return;
    }
    try {
      const url = 'http://localhost:8000/api/auth/login';
      const response = await axios.post(url, formData);
      console.log(response.data);
      setAuthToken(response.data.token);
      dispatch(saveUserID(response.data.userID));
      setFormData({ username: '', password: '' });
      navigate('/home');
    } catch (error) {
      console.error('error logging in:', error.response.data);
      setError(error.response.data.message);
    }
  };

  return (
    <Container>
      <Logo src={instagram} alt='Instagram'></Logo>
      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='Username'
          value={formData.username}
          onChange={(e) => handleChange(e, 'username')}
        ></Input>
        <Input
          type='password'
          placeholder='Password'
          value={formData.password}
          onChange={(e) => handleChange(e, 'password')}
        ></Input>
        <Button type='submit'>Sign In</Button>
      </Form>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <SignUpLink>
        Do not have an account?<Link to='/register'>Sign up</Link>
      </SignUpLink>
    </Container>
  );
};

export default Login;
