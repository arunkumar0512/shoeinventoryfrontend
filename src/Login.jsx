

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('https://shoeinventorybackend.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        alert(data.message);
        navigate('/Manageitem');
      } else {
        const errorData = await response.json();
        console.error(errorData.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleregister = () => {
    navigate('/Register');
  };

  return (
    <div className='bgimg'>
      <form>
        <label>Email:</label>
        <input
          type="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        
        <button className="register-btn" onClick={handleregister}>
          Register
        </button><br /><br /><br />


        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStP3opBoKNHAiFmOB8e52WcKV2nu_nlupujKF3YYGnQCM8PRA0i3L3hzr591HJ0K1VKIc&usqp=CAU" alt="" />
        </div>
        
      </form>
    </div>
  );
};

export default Login;
