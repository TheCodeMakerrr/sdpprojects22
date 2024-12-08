import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './dashboard'; // Ensure you have this component
import Profile from './profile'; // Ensure Profile component is properly defined
import Internship from './internship'; // Corrected import to use capitalized name
import Feedback from './feedback'; 
import AboutUs from './AboutUs';
import Signup from './signup.js';
import Team from './team.js';

// Header component
function Header() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup'); // Navigate to Signup page
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
    zIndex: 1000, // Ensures it stays on top of other content
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
    color: '#fff',
  };

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>InternSync</div>
      <nav style={navigationStyle}>
        <span style={navItemStyle} onClick={handleSignupClick}>Sign Up</span> {/* Navigate to Signup */}
      </nav>
    </header>
  );
}

// Login component
function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the dashboard
    navigate('/dashboard');
  };

  // Inline styles
  const appContainerStyle = {
    marginTop: '-6%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '105vh',
    backgroundColor: '#f0f0f0',
  };

  const loginSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0E4FF',
    padding: '50px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    marginTop: '80px', // Push down to avoid overlap with fixed header
  };

  const illustrationStyle = {
    marginRight: '40px',
  };

  const illustrationImgStyle = {
    width: '400px',
    height: 'auto',
    borderRadius: '10px',
  };

  const loginFormStyle = {
    width: '500px',
    height: '350px',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
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

  const forgotPasswordStyle = {
    display: 'block',
    marginBottom: '10px',
    color: '#3B3B98',
    textDecoration: 'none',
  };

  const loginButtonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#3B3B98',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
  };

  return (
    <div style={appContainerStyle}>
      <div style={loginSectionStyle}>
        <div style={illustrationStyle}>
          <img
            src="https://i.ibb.co/WK5YFLF/Screenshot-2024-10-02-220316.png"
            alt="Login Illustration"
            style={illustrationImgStyle}
          />
        </div>

        <div style={loginFormStyle}>
          <h2>Login to your account</h2>
          <form onSubmit={handleSubmit}>
            <div style={formGroupStyle}>
              <label htmlFor="email" style={labelStyle}>
                Email id
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
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
                placeholder="Enter your password"
                required
                style={inputStyle}
              />
            </div>
            <div style={formGroupStyle}>
              <a href="#" style={forgotPasswordStyle}>
                
              </a>
            </div>
            <button type="submit" style={loginButtonStyle}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// App component with routing
function App() {
  return (
    <Router>
      <Header /> {/* Added header to render on all pages */}
      <div style={{ paddingTop: '60px' }}> {/* Add padding to prevent overlap with fixed header */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} /> {/* Capitalized Profile */}
          <Route path="/internship" element={<Internship />} /> {/* Corrected to use capitalized name */}
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
