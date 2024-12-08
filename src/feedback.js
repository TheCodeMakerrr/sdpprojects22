import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Styles
const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  sidebar: {
    width: '200px',
    backgroundColor: '#000',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '30px',
    display: 'flex',
    alignItems: 'center',
  },
  menuItem: {
    margin: '20px 0',
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: '#5B5B98',
    borderRadius: '5px',
    textAlign: 'center',
  },
  menuItemSelected: {
    backgroundColor: '#FFC107',
    color: 'black',
  },
  logoutButton: {
    marginTop: 'auto',
    padding: '10px',
    backgroundColor: '#FF4136',
    textAlign: 'center',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#F4F4F4',
    padding: '20px',
    position: 'relative',
  },
  header: {
    position: 'fixed',
    top: 0,
    left: 240, // Adjusted to keep the header in line with the sidebar
    width: 'calc(100% - 240px)', // Ensures header doesn't cover sidebar
    height: '60px', // Fixed height for the header
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    boxSizing: 'border-box',
    zIndex: 1000, // Ensures it stays on top of other content
  },
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  profileImage: {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    marginRight: '10px',
  },
  formContainer: {
    position: 'fixed', // Make the form fixed
    top: '80px', // Position below the header
    left: '500px', // Align with the sidebar
    width: '600px', // Set a specific width for the form container
    padding: '30px 40px', // More padding for cleaner look
    backgroundColor: '#fff',
    borderRadius: '15px', // Softer corners for a modern look
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    margin: '0', // No auto margin since it's fixed
  },
  form: {
    display: 'grid',
    gridTemplateColumns: '1fr', // Full-width for single column form
    gap: '20px',
  },
  inputField: {
    width: '98%',
    padding: '15px', // Increased padding for comfort
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: '#f9f9f9',
    fontSize: '1rem',
    transition: 'border 0.3s ease',
  },
  inputFieldFocused: {
    border: '1px solid #5B5B98', // Change border color when focused
  },
  saveButton: {
    backgroundColor: '#5B5B98',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 24px',
    cursor: 'pointer',
    justifySelf: 'center', // Center the button in the grid
    fontSize: '1rem',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
  saveButtonHover: {
    backgroundColor: '#4646a5', // Slightly darker shade on hover
    transform: 'scale(1.02)', // Subtle scaling for an interactive feel
  },
  textarea: {
    width: '98%',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: '#f9f9f9',
    fontSize: '1rem',
    transition: 'border 0.3s ease',
    height: '120px', // Adjust the height of the textarea
    resize: 'none', // Prevent resizing for consistency
  },
  contactUsHeader: {
    marginTop: '-5px',
    textAlign: 'center',
    marginBottom: '20px', // Space between header and form
    fontSize: '1.5rem', // Header font size
    color: '#333', // Color for header
  },
};

function Feedback() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  // Profile Data
  const profileImage = 'https://i.ibb.co/g75DM6G/profile-photoaidcom-cropped.png';
  const userName = 'Harsha Vardhan';
  const userRole = 'Student';

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const feedbackData = { name, email, message };

    try {
      // Send feedback data to the backend
      const response = await fetch('http://localhost:5000/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message || 'Feedback submitted successfully!');
        // Clear form fields after submission
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const error = await response.json();
        alert(error.message || 'Error submitting feedback');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.menuItem} onClick={() => navigate('/dashboard')}>Dashboard</div>
        <div style={styles.menuItem} onClick={() => navigate('/internship')}>Internships</div>
        <div style={{ ...styles.menuItem, ...styles.menuItemSelected }}>Feedback</div>
        <div style={styles.menuItem} onClick={() => navigate('/profile')}>Profile</div>
        <div style={styles.menuItem} onClick={() => navigate('/aboutus')}>About Us</div>
        <div style={{ ...styles.logoutButton, marginTop: '150px' }} onClick={() => navigate('/')}>Logout</div>
      </div>

      {/* Main content */}
      <div style={styles.content}>
        {/* Header */}
        <div style={styles.header}>
          <h2>Feedback</h2>
          <div style={styles.profileContainer}>
            <img src={profileImage} alt="Profile" style={styles.profileImage} />
            <div>
              <div>{userName}</div>
              <div>{userRole}</div>
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div style={styles.formContainer}>
          <h3 style={styles.contactUsHeader}>Contact Us</h3>
          <form style={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => setName(e.target.value)}
              style={{
                ...styles.inputField,
                ...(focusedField === 'name' ? styles.inputFieldFocused : {}),
              }}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                ...styles.inputField,
                ...(focusedField === 'email' ? styles.inputFieldFocused : {}),
              }}
              required
            />
            <textarea
              placeholder="Your Feedback"
              value={message}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                ...styles.textarea,
                ...(focusedField === 'message' ? styles.inputFieldFocused : {}),
              }}
              required
            />
            <button
              type="submit"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                ...styles.saveButton,
                ...(isHovered ? styles.saveButtonHover : {}),
              }}
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
