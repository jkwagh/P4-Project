// Import React and useState from React
import React, { useState, useEffect } from 'react';
import "./Signup.css"
import { useNavigate } from 'react-router-dom';

// Component for the Sign Up form
const SignUp = ({ addCustomer, fetchResult }) => {
  
  const navigate = useNavigate();
  useEffect(() => {
      if (fetchResult === true) {
                  navigate('/login')
          }
  }, [fetchResult])

  const [animatedClass, setAnimatedClass] = useState('animated-signup');
  const [formData, setFormData]= useState({
  address: "",
  email: "",
  password:"",
  phone:"",
  });


  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
    setAnimatedClass('animated-signup');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCustomer(formData)
    navigate('/login')
};

const handleOnClick = (e) => {
  e.preventDefault();
  navigate('/login')
  
}


  return (
    <div className="wrapper">

<div className={`form-container sign-up ${animatedClass}`}>
      <form onSubmit={handleSubmit}>
        <h2>Sign up</h2>

        <div className="form-group">
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} required />
          <i className="fas fa-user"></i>
          <label htmlFor="username">Create a username</label>
        </div>

        <div className="form-group">
          <input type="address" name="address" value={formData.address} onChange={handleInputChange} required />
          <i className="fas fa-lock"></i>
          <label htmlFor="address">Enter your Address</label>
        </div>

        <div className="form-group">
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          <i className="fas fa-at"></i>
          <label htmlFor="email">Enter you email</label>
        </div>

        <div className="form-group">
          <input type="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
          <i className="fas fa-at"></i>
          <label htmlFor="phone">Enter you Phone Number</label>
        </div>

        <div className="form-group">
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
          <i className="fas fa-lock"></i>
          <label htmlFor="password">Create a password</label>
        </div>

        <div className="form-group">
          <input type="password" required />
          <i className="fas fa-lock"></i>
          <label htmlFor="">confirm password</label>
        </div>

        <button type="submit" className="btn">
          sign up
        </button>
        <div className="link">
          <p>
            You already have an account?
            <a href='./Login.js' className="signin-link" onClick={handleOnClick}>
              {' '}
              sign in
            </a>
          </p>
        </div>
      </form>
    </div>
<div>
  
</div>
    </div>
    
  );
};

export default SignUp;

