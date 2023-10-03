import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import CreatePost from './components/Post/CreatePost';
import { useDispatch } from 'react-redux';
import { saveProfileData } from './Redux/ProfileData';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const getProfiles = async () => {
      try {
        const url = 'http://localhost:8000/api/profiles';
        const res = await axios.get(url);
        console.log(res.data);
        dispatch(saveProfileData(res.data))
      } catch (error) {
        console.error(error);
      }
    };
    getProfiles();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/profile/:id' element={<Profile />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/contact/:id' element={<Contact />}></Route>
        <Route path='/post' element={<CreatePost />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
