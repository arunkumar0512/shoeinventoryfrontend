import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch('https://shoeinventorybackend.onrender.com/api/register/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

    

      if (response.ok) {
        const data = await response.json();
        alert(data.message); // Show alert on successful registration
      } else {
        const errorData = await response.json();
        console.error(errorData.error); // Handle registration error
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const navigateLogin = () => {
    navigate('/');
}

  return (
    <div>
      
      <form>
        <label>Username:</label>
        <input
          type="text"
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br/><br/>

        <label>Email:</label>
        <input
          type="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/><br/>

        <label>Password:</label>
        <input
          type="password"
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleRegister}>
          Register
        </button><br /><br />

        <button onClick={navigateLogin} className='btn btn-success' style={{ backgroundColor:'blue'}}>Back to Login</button>
        
      </form>
    </div>
  );
};

export default Register;



