import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    marginTop: '10px',
    boxSizing: 'border-box',
    display: 'flex',
  },
  header: {
    position: 'fixed',
    top: 0,
    left: '220px',
    width: 'calc(100% - 200px)',
    height: '70px',
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
  internshipsContainer: {
    marginTop: '70px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '1000px',
    margin: 'auto',
    flex: 1,
  },
  internshipItem: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  internshipDetails: {
    flex: 1,
  },
  internshipTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  internshipCompany: {
    fontSize: '1rem',
    marginBottom: '5px',
  },
  internshipLocation: {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '5px',
  },
  internshipPosted: {
    fontSize: '0.9rem',
    color: '#666',
  },
  internshipDescription: {
    marginTop: '10px',
    color: '#333',
  },
  viewButton: {
    backgroundColor: '#1e40af',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
  filterContainer: {
    width: '300px',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    marginRight: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  filterHeading: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  filterField: {
    marginBottom: '15px',
  },
  filterLabel: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  filterInput: {
    width: '100%',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  filterCheckbox: {
    marginRight: '10px',
  },
  filterSlider: {
    width: '100%',
  },
  popupOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  popupContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: '400px',
    maxWidth: '90%',
  },
  popupCloseButton: {
    marginTop: '20px',
    backgroundColor: '#FF4136',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
  applyButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '10px',
  },
  secondaryPopupContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: '400px',
    maxWidth: '90%',
  },
  fileInput: {
    marginTop: '10px',
  },
};

function Profile() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState('https://i.ibb.co/g75DM6G/profile-photoaidcom-cropped.png');
  const [location, setLocation] = useState('');
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [workFromHome, setWorkFromHome] = useState(false);
  const [partTime, setPartTime] = useState(false);
  const [stipendRange, setStipendRange] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSecondaryPopupOpen, setIsSecondaryPopupOpen] = useState(false);
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [resume, setResume] = useState(null);

  const internships = [
    {
      title: 'Textile Design Internship',
      company: 'UNISOURCE TRADING (INDIA) PVT. LTD.',
      location: 'Guntur',
      posted: 'Posted 1 day ago',
      description:
        'UNISOURCE is a global Trading group that manages the supply chain for high-volume, time-sensitive consumer goods.',
      salary: '₹15000/month',
      workFromHome: false,
      partTime: false,
    },
    {
      title: 'Internship (Electronics - Microcontrollers, Coding)',
      company: 'Scienotech Innovatics Pvt. Ltd.',
      location: 'Hyderabad',
      posted: 'Posted 1 day ago',
      description:
        'This internship offers a valuable opportunity to enhance your skills through hands-on experience and collaboration with our team.',
      salary: '₹10000/month',
      workFromHome: true,
      partTime: true,
    },
    {
      title: 'Internship x Beauty Category',
      company: 'Namshi.com',
      location: 'Vijayawada',
      posted: 'Posted 2 days ago',
      description: 'Internship Opportunity - Beauty Category. Are you ready to kickstart your career in beauty and e-commerce?',
      salary: '₹12000/month',
      workFromHome: true,
      partTime: false,
    },
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleViewDetails = (internship) => {
    setSelectedInternship(internship);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedInternship(null);
  };

  const closeSecondaryPopup = () => {
    setIsSecondaryPopupOpen(false);
  };

  const handleApply = () => {
    setIsSecondaryPopupOpen(true);
    setIsPopupOpen(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file);
    }
  };

  const handleSubmitApplication = () => {
    alert(`Application submitted for ${selectedInternship.title}. Resume: ${resume ? resume.name : 'No resume uploaded'}`);
    closeSecondaryPopup();
  };

  const handleApplyFilters = () => {
    const filtered = internships.filter((internship) => {
      const stipend = parseInt(internship.salary.replace(/\D/g, ''));
      return (
        (!location || internship.location.toLowerCase().includes(location.toLowerCase())) &&
        (!workFromHome || internship.workFromHome) &&
        (!partTime || internship.partTime) &&
        stipend >= stipendRange
      );
    });
    setFilteredInternships(filtered);
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.menuItem} onClick={() => navigate('/dashboard')}>Dashboard</div>
        <div style={{ ...styles.menuItem, ...styles.menuItemSelected }} onClick={() => navigate('/internship')}>
          Internships
        </div>
        <div style={styles.menuItem} onClick={() => navigate('/feedback')}>Feedback</div>
        <div style={styles.menuItem} onClick={() => navigate('/profile')}>Profile</div>
        <div style={styles.menuItem} onClick={() => navigate('/aboutus')}>About Us</div>
        <div style={{ ...styles.logoutButton, marginTop: '150px' }} onClick={() => navigate('/')}>Logout</div>
      </div>
  
      {/* Header */}
      <div style={styles.header}>
        <h2>Internships</h2>
        <div style={styles.profileContainer}>
          <img src={profileImage} alt="Profile" style={styles.profileImage} />
          <div>Welcome, User</div>
        </div>
      </div>
  
      {/* Main content */}
      <div style={styles.content}>
        {/* Filter Section */}
        <div style={styles.filterContainer}>
          <div style={styles.filterHeading}>Filters</div>
          <div style={styles.filterField}>
            <label style={styles.filterLabel}>Location</label>
            <input
              type="text"
              placeholder="e.g. Delhi"
              style={styles.filterInput}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
  
          <div style={styles.filterField}>
            <label>
              <input
                type="checkbox"
                style={styles.filterCheckbox}
                checked={workFromHome}
                onChange={(e) => setWorkFromHome(e.target.checked)}
              />
              Work from Home
            </label>
          </div>
  
          <div style={styles.filterField}>
            <label>
              <input
                type="checkbox"
                style={styles.filterCheckbox}
                checked={partTime}
                onChange={(e) => setPartTime(e.target.checked)}
              />
              Part-Time
            </label>
          </div>
  
          <div style={styles.filterField}>
            <label style={styles.filterLabel}>Stipend Range</label>
            <input
              type="range"
              min="0"
              max="50000"
              step="1000"
              value={stipendRange}
              onChange={(e) => setStipendRange(e.target.value)}
              style={styles.filterSlider}
            />
            <div>₹{stipendRange}</div>
          </div>
  
          <button style={styles.viewButton} onClick={handleApplyFilters}>Apply Filters</button>
        </div>
  
        {/* Internships Section */}
        <div style={styles.internshipsContainer}>
          {(filteredInternships.length > 0 ? filteredInternships : internships).map((internship, index) => (
            <div key={index} style={styles.internshipItem}>
              <div style={styles.internshipDetails}>
                <div style={styles.internshipTitle}>{internship.title}</div>
                <div style={styles.internshipCompany}>{internship.company}</div>
                <div style={styles.internshipLocation}>{internship.location}</div>
                <div style={styles.internshipPosted}>{internship.posted}</div>
                <div style={styles.internshipDescription}>{internship.description}</div>
              </div>
              <button style={styles.viewButton} onClick={() => handleViewDetails(internship)}>
                View Details
              </button>
            </div>
          ))}
        </div>
  
        {/* Popup */}
        {isPopupOpen && selectedInternship && (
          <div style={styles.popupOverlay}>
            <div style={styles.popupContent}>
              <h2>{selectedInternship.title}</h2>
              <p><strong>Company:</strong> {selectedInternship.company}</p>
              <p><strong>Location:</strong> {selectedInternship.location}</p>
              <p><strong>Stipend:</strong> {selectedInternship.salary}</p>
              <p><strong>Description:</strong> {selectedInternship.description}</p>
              <button style={styles.applyButton} onClick={handleApply}>Apply</button>
              <button style={styles.popupCloseButton} onClick={closePopup}>Close</button>
            </div>
          </div>
        )}
  
        {/* Secondary Popup */}
        {isSecondaryPopupOpen && selectedInternship && (
          <div style={styles.popupOverlay}>
            <div style={styles.secondaryPopupContent}>

              <h3>Submit Your Application</h3>
              <p>
                Are you sure you want to apply for <strong>{selectedInternship.title}</strong>?
              </p>
              <p>
        Upload your resume <strong></strong>
      </p>
              <input
                type="file"
                style={styles.fileInput}
                onChange={handleFileChange}
              />



              <button
                style={styles.applyButton}
                onClick={handleSubmitApplication}
              >
                Submit Application
              </button>
              <button
                style={styles.popupCloseButton}
                onClick={closeSecondaryPopup}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Profile;
