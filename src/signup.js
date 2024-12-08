import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    // Validation: Ensure passwords match
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    // Validation: Ensure strong password
    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long!');
      return;
    }

    try {
      // Send data to backend
      const response = await axios.post('http://localhost:5000/signup', {
        name,
        email,
        password,
      });

      // Handle success response
      if (response.status === 200) {
        setSuccessMessage('Signup successful! Redirecting to login...');
        setErrorMessage('');
        setTimeout(() => {
          navigate('/'); // Redirect to login page
        }, 2000);
      }
    } catch (error) {
      console.error('Error during signup:', error);

      // Handle different types of errors
      if (error.response) {
        // Server responded with a status other than 2xx
        const { status, data } = error.response;
        if (status === 400) {
          setErrorMessage(data.error || 'Invalid input. Please check your details.');
        } else if (status === 409) {
          setErrorMessage('Email already exists. Please use a different email.');
        } else if (status === 500) {
          setErrorMessage('Internal server error. Please try again later.');
        } else {
          setErrorMessage('Something went wrong. Please try again.');
        }
      } else if (error.request) {
        // Request was made but no response received
        setErrorMessage('Unable to connect to the server. Please check your internet connection.');
      } else {
        // Something else happened
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    }
  };

  // Inline styles
  const appContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
    backgroundColor: '#f0f0f0',
  };

  const headerStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    boxSizing: 'border-box',
    zIndex: 1000,
  };

  const logoStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
  };

  const navigationStyle = {
    display: 'flex',
    gap: '20px',
  };

  const navItemStyle = {
    cursor: 'pointer',
    fontSize: '1.2rem',
  };

  const signupSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0E4FF',
    padding: '50px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  };

  const illustrationStyle = {
    marginRight: '40px',
  };

  const illustrationImgStyle = {
    width: '400px',
    height: 'auto',
    borderRadius: '10px',
  };

  const signupFormStyle = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    width: '500px',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const signupButtonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#3B3B98',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
  };

  const messageStyle = {
    color: 'green',
    marginBottom: '15px',
    textAlign: 'center',
  };

  const errorStyle = {
    color: 'red',
    marginBottom: '15px',
    textAlign: 'center',
  };

  return (
    <div style={appContainerStyle}>
      {/* Header */}
      <header style={headerStyle}>
        <div style={logoStyle}>InternSync</div>
        <nav style={navigationStyle}>
          <span style={navItemStyle} onClick={() => navigate('/')}>
            Login
          </span>
          <a style={navItemStyle} href="/team">
            Team
          </a>
        </nav>
      </header>

      {/* Signup Section */}
      <div style={signupSectionStyle}>
        <div style={illustrationStyle}>
          <img
            src="https://i.ibb.co/WK5YFLF/Screenshot-2024-10-02-220316.png"
            alt="Signup Illustration"
            style={illustrationImgStyle}
          />
        </div>

        <div style={signupFormStyle}>
          <h2>Create an Account</h2>

          {/* Success Message */}
          {successMessage && <div style={messageStyle}>{successMessage}</div>}

          {/* Error Message */}
          {errorMessage && <div style={errorStyle}>{errorMessage}</div>}

          <form onSubmit={handleSubmit}>
            <div style={formGroupStyle}>
              <label htmlFor="name" style={labelStyle}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="email" style={labelStyle}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="password" style={labelStyle}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                value={formData.password}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="confirmPassword" style={labelStyle}>
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            <button type="submit" style={signupButtonStyle}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
