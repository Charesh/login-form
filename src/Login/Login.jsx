import { useState } from 'react';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'chareshgc@gmail.com' && password === 'password123') {
      alert('Login Successful');
    
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className='page'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='input'>
          <input
            type='text'
            placeholder='Username or Email'
            required
            
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className='icon' />
        </div>
        <div className='input'>
          <input
            type='password'
            placeholder='Password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className='icon' />
        </div>
        <div className='remember'>
          <label>
            <input type='checkbox' /> Remember me
          </label>
          <a href='#'>Forget password?</a>
        </div>
        <button type='submit'>Login</button>
        <div className='register'>
          <p>
            Don't have an account? <a href='#'>Sign-up</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
