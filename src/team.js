import React from 'react';
import { useNavigate } from 'react-router-dom';

// Sample images for team members (replace with actual image URLs)
const teamMembers = [
  {
    name: 'Kanuri Harshavardhan',
    role: 'Frontend Developer',
    image: 'https://i.ibb.co/9p2LrBQ/passportsize-photo.jpg', // Team member image
  },
  {
    name: 'Asif',
    role: 'Backend Developer',
    image: 'https://i.ibb.co/sRsx4mn/asif-passport-photo.jpg', // Team member image
  },
];

function Signup() {
  const navigate = useNavigate();

  // Inline styles
  const appContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
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
    color: 'white',
    transition: 'color 0.3s',
  };

  const projectInfoStyle = {
    marginTop: '-60px', // Space for the fixed header
    textAlign: 'center',
    backgroundColor: '#E0E4FF',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    width: '90%',
    maxWidth: '600px',
  };

  const teamSectionStyle = {
    marginTop: '40px',
    textAlign: 'center',
  };

  const teamMemberStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px 0',
    fontSize: '1.2rem',
    color: '#333',
  };

  const memberImageStyle = {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    marginRight: '20px',
  };

  const memberInfoStyle = {
    textAlign: 'left',
  };

  return (
    <div style={appContainerStyle}>
      <header style={headerStyle}>
        <div style={logoStyle}>InternSync</div>
        <span style={navItemStyle}>Team</span>
        <nav style={navigationStyle}>
          
          <span style={navItemStyle} onClick={() => navigate('/')}>Login</span>
        </nav>
      </header>

      {/* Project Info Section */}
      <div style={projectInfoStyle}>
        <h2>Project Name : Internship Management System</h2>
        <h4>Project Code: SDP-S22-03</h4>
      </div>

      {/* Team Section */}
      <div style={teamSectionStyle}>
        <h2>Meet the Team</h2>
        {teamMembers.map((member, index) => (
          <div key={index} style={teamMemberStyle}>
            <img src={member.image} alt={member.name} style={memberImageStyle} />
            <div style={memberInfoStyle}>
              <div><strong>{index + 1}. {member.name}</strong></div>
              <div>{member.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Signup;
