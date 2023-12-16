import React, { useState } from "react"
import NavBar from "./NavBar";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint for user authentication
        const response = await fetch('/customers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
  
        if (!response.ok) {
          throw new Error('Login failed');
        }
  
        // Handle the response, e.g., store authentication token in local storage
        const data = await response.json();
        console.log('Login successful:', data);
      } catch (error) {
        console.error('Login failed:', error.message);
      }
    };
  
    return (
      <div>
        <NavBar />
        <h2>Login</h2>
        <form>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    );
  };

export default Login