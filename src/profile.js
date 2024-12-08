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
    marginTop: '4px',
  },
  header: {
    position: 'fixed',
    top: 0,
    left: 185,
    width: 'calc(100% - 180px)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    boxSizing: 'border-box',
    zIndex: 1000,
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
    width: '95%',
    marginTop: '4px',
    height: '90%',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: 'auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px',
  },
  form: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    width: '100%',
  },
  inputFullWidth: {
    gridColumn: 'span 3',
  },
  inputField: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  imageContainer: {
    gridColumn: 'span 1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
  },
  profilePreviewImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
  },
  imageUploadButton: {
    marginTop: '10px',
    backgroundColor: '#5B5B98',
    color: '#fff',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  saveButton: {
    gridColumn: 'span 3',
    justifySelf: 'center',
    backgroundColor: '#5B5B98',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
  },
};

function Profile() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState('https://i.ibb.co/g75DM6G/profile-photoaidcom-cropped.png');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: ''
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!', formData);
    // Handle form submission logic (e.g., API call)
  };

  const handleLogout = () => {
    // Logic for clearing session or authentication token can go here
    navigate('/');
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.menuItem} onClick={() => navigate('/dashboard')}>Dashboard</div>
        <div style={styles.menuItem} onClick={() => navigate('/internship')}>Internships</div>
        <div style={styles.menuItem} onClick={() => navigate('/feedback')}>Feedback</div>
        <div style={{ ...styles.menuItem, ...styles.menuItemSelected }} onClick={() => navigate('/profile')}>Profile</div>
        <div style={styles.menuItem} onClick={() => navigate('/aboutus')}>About Us</div>
        <div style={{ ...styles.logoutButton, marginTop: '150px' }} onClick={handleLogout}>Logout</div>
      </div>

      {/* Main content */}
      <div style={styles.content}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={{ margin: '0', fontSize: '1.8rem' }}>Profile</h2>
          <div style={styles.profileContainer}>
            <img
              src={profileImage}
              alt="Profile"
              style={styles.profileImage}
            />
            <div>
              <div>Harsha Vardhan</div>
              <div>Student</div>
            </div>
          </div>
        </div>

        {/* Profile Form */}
        <div style={styles.formContainer}>
          {/* Image Upload */}
          <div style={styles.imageContainer}>
            <img
              src={profileImage}
              alt="Profile Preview"
              style={styles.profilePreviewImage}
            />
            <label htmlFor="imageUpload" style={{ marginTop: '10px' }}>
              <button type="button" style={styles.imageUploadButton}>Choose Image</button>
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </div>

          {/* Form Fields */}
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.inputFullWidth}>
              <label style={styles.label} htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                style={styles.inputField}
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div style={styles.inputFullWidth}>
              <label style={styles.label} htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                style={styles.inputField}
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div style={styles.inputFullWidth}>
              <label style={styles.label} htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="Email address"
                style={styles.inputField}
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label style={styles.label} htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                placeholder="Address"
                style={styles.inputField}
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label style={styles.label} htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                placeholder="City"
                style={styles.inputField}
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label style={styles.label} htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                placeholder="State"
                style={styles.inputField}
                value={formData.state}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label style={styles.label} htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                placeholder="Country"
                style={styles.inputField}
                value={formData.country}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label style={styles.label} htmlFor="postalCode">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                placeholder="Postal Code"
                style={styles.inputField}
                value={formData.postalCode}
                onChange={handleInputChange}
              />
            </div>
            <div style={{ gridColumn: 'span 3', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <button type="submit" style={styles.saveButton}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
