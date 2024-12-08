import React from 'react';
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
    left: 240,
    width: 'calc(100% - 240px)',
    height: '9%',
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
    position: 'fixed', // Keep it fixed
    top: '60px', // Change this value to increase space from the top
    left: '270px', // Align with the sidebar
    padding: '20px',
    width: '1200px', // Ensure this is your desired width
    height: '580px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
},

  visionBox: {
    padding: '20px',
    backgroundColor: '#D6E6F2',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px',
  },
  visionTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#4646a5',
    marginBottom: '10px',
  },
  visionText: {
    fontSize: '1rem',
    color: '#333',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
  },
  card: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '10px',
  },
  cardLink: {
    fontSize: '0.9rem',
    color: '#1e40af',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  trainingImage: {
    width: '150px',
    height: '150px',
    marginRight: '20px',
  },
  trainingCard: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',    // Adds space above the card
    marginBottom: '20px', // Keeps the space below the card
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '530px',    // Adjust the width as needed
    margin: '0 auto',     // Center the card horizontally
  },
  
  
};

function AboutUs() {
  const navigate = useNavigate();

  // User profile data
  const profileImage = 'https://i.ibb.co/g75DM6G/profile-photoaidcom-cropped.png';
  const userName = 'Harsha Vardhan';
  const userRole = 'Student';

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        {/* <div style={styles.logo}>InternSync</div> */}
        <div style={styles.menuItem} onClick={() => navigate('/dashboard')}>Dashboard</div>
        <div style={styles.menuItem} onClick={() => navigate('/internship')}>Internships</div>
        <div style={styles.menuItem} onClick={() => navigate('/feedback')}>Feedback</div>
        <div style={styles.menuItem} onClick={() => navigate('/profile')}>Profile</div>
        <div style={{ ...styles.menuItem, ...styles.menuItemSelected }}>About Us</div>
        <div style={{ ...styles.logoutButton, marginTop: '150px' }} onClick={() => navigate('/')}>Logout</div>

      </div>

      {/* Main content */}
      <div style={styles.content}>
        {/* Header */}
        <div style={styles.header}>
          <h2>About Us</h2>
          <div style={styles.profileContainer}>
            <img
              src={profileImage}
              alt="Profile"
              style={styles.profileImage}
            />
            <div>
              <div>{userName}</div>
              <div>{userRole}</div>
            </div>
          </div>
        </div>

        {/* About Us Content */}
        <div style={styles.formContainer}>
          {/* Vision Section */}
          <div style={styles.visionBox}>
            <div style={styles.visionTitle}>Our vision</div>
            <div style={styles.visionText}>
              Internsync is a dot com business with the heart of dot org.
              We are a technology company on a mission to equip students with relevant skills 
              & practical exposure to help them get the best possible start to their careers. 
              Imagine a world full of freedom and possibilities. A world where you can discover 
              your passion and turn it into your career. A world where you graduate fully assured, 
              confident, and prepared to stake a claim on your place in the world.
            </div>
          </div>

          {/* Cards Section */}
          <div style={styles.cardContainer}>
            <div style={styles.trainingCard}>
              <img
                src="https://i.ibb.co/R6Pyqxt/train.jpg"
                alt="Training"
                style={styles.trainingImage}
              />
              <div>
                <div style={styles.cardTitle}>Trainings</div>
                <div style={styles.cardText}>
                  Learn new-age skills on the go with our short-term online trainings
                </div>
                <a href="#" style={styles.cardLink}>Explore more →</a>
              </div>
            </div>

            <div style={styles.trainingCard}>
              <img
                src="https://i.ibb.co/vLWLsty/place.jpg"
                alt="Placement"
                style={styles.trainingImage}
              />
              <div>
                <div style={styles.cardTitle}>Placement Guarantee courses</div>
                <div style={styles.cardText}>
                  Specialize in industry-oriented programs that get you ready for a career in your dream profile
                </div>
                <a href="#" style={styles.cardLink}>Explore more →</a>
              </div>
            </div>

            <div style={styles.trainingCard}>
              <img
                src="https://i.ibb.co/LhMCmYk/fresh.jpg"
                alt="Fresher jobs"
                style={styles.trainingImage}
              />
              <div>
                <div style={styles.cardTitle}>Fresher jobs</div>
                <div style={styles.cardText}>
                  Get premium fresher jobs with a minimum CTC of 2LPA on your fingertips
                </div>
                <a href="#" style={styles.cardLink}>Explore more →</a>
              </div>
            </div>

            <div style={styles.trainingCard}>
              <img
                src="https://i.ibb.co/9VpGWcH/intern.jpg"
                alt="Internships"
                style={styles.trainingImage}
              />
              <div>
                <div style={styles.cardTitle}>Internships</div>
                <div style={styles.cardText}>
                  Find 10,000+ internships from great companies to give a kickstart to your career
                </div>
                <a href="#" style={styles.cardLink}>Explore more →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
