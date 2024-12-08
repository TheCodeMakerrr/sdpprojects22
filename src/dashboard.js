import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from "recharts";
import { useNavigate } from 'react-router-dom';

// Sample data for daily internships applied
const dailyInternshipsData = [
  { day: 'Monday', internshipsApplied: 3 },
  { day: 'Tuesday', internshipsApplied: 5 },
  { day: 'Wednesday', internshipsApplied: 1 },
  { day: 'Thursday', internshipsApplied: 4 },
  { day: 'Friday', internshipsApplied: 6 },
  { day: 'Saturday', internshipsApplied: 7 },
  { day: 'Sunday', internshipsApplied: 3 }
];

// Sample internship status data
const internshipStatusData = [
  { name: 'Company A', completed: 5, inProgress: 2, pending: 1 },
  { name: 'Company B', completed: 8, inProgress: 3, pending: 1 },
  { name: 'Company C', completed: 2, inProgress: 1, pending: 0 },
];

// Inline styles as JS objects
const styles = {
  dashboardContainer: {
    display: 'flex',
    height: '100vh',
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
  },
  menuItem: {
    margin: '20px 0',
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: '#5B5B98',
    borderRadius: '5px',
    textAlign: 'center',
  },
  logoutButton: {
    marginTop: 'auto',
    padding: '10px',
    backgroundColor: '#FF4136',
    textAlign: 'center',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  mainContent: {
    flexGrow: 1,
    padding: '20px',
    backgroundColor: '#F4F4F4',
    marginTop: '50px', // Added margin to offset header height
  },
  header: {
    position: 'fixed',
    top: 0,
    left: 210, // Adjusted to keep the header in line with the sidebar
    width: 'calc(100% - 210px)', // Ensures header doesn't cover sidebar
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    boxSizing: 'border-box',
    zIndex: 1000, // Ensures it stays on top of other content
  },
  profileInfo: {
    display: 'flex',
    alignItems: 'center',
    margin: '0',
  },
  profileImage: {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    marginRight: '10px',
  },
  profileCompletionBar: {
    backgroundColor: '#E0E0E0',
    height: '10px',
    borderRadius: '5px',
    marginTop: '10px',
    width: '100%',
  },
  completedBar: {
    backgroundColor: '#FF4136',
    height: '100%',
    borderRadius: '5px',
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
  chartsSection: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  chartContainer: {
    backgroundColor: 'white',
    padding: '20px',
    paddingRight: '50px',
    borderRadius: '5px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    marginRight: '30px',
    flex: '1',  // Allow charts to grow
    minWidth: '250px', // Minimum width for charts
  },
  noteSection: {
    backgroundColor: '#5B5B98',
    color: 'white',
    padding: '20px',
    borderRadius: '5px',
    marginTop: '20px',
  }
};

// Custom tooltip for line chart
const CustomLineTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: 'white', border: '1px solid #ccc', padding: '10px' }}>
        <p>{`Internships Applied: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

// Custom tooltip for bar chart
const CustomBarTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: 'white', border: '1px solid #ccc', padding: '10px' }}>
        <p>{`Internship Applied: ${payload[0].payload.completed}`}</p>
        <p>{`In Progress: ${payload[0].payload.inProgress}`}</p>
        <p>{`Pending: ${payload[0].payload.pending}`}</p>
      </div>
    );
  }
  return null;
};

function Dashboard() {
  const navigate = useNavigate();
  
  // User profile data
  const profileImage = 'https://i.ibb.co/g75DM6G/profile-photoaidcom-cropped.png';
  const userName = 'Harsha Vardhan';
  const userRole = 'Student';

  return (
    <div style={styles.dashboardContainer}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        {/* <div style={styles.logo}>InternSync</div> */}
        
        <div style={{ ...styles.menuItem, ...styles.menuItemSelected }}>Dashboard</div>

        {/* <div style={styles.menuItem} onClick={() => navigate('/dashboard')}>Dashboard</div> */}
        <div style={styles.menuItem} onClick={() => navigate('/internship')}>Internship</div>
        <div style={styles.menuItem} onClick={() => navigate('/feedback')}>Feedback</div>
        <div style={styles.menuItem} onClick={() => navigate('/profile')}>Profile</div>
        <div style={styles.menuItem} onClick={() => navigate('/aboutus')}>About us</div>
        <div style={{ ...styles.logoutButton, marginTop: '150px' }} onClick={() => navigate('/')}>Logout</div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.profileInfo}>
            <img
              src={profileImage}
              alt="Profile"
              style={styles.profileImage}
            />
            <div>
              <h1 style={{ margin: '0' }}>Hi, {userName}</h1>
              <p style={{ margin: '0' }}>{userRole}</p>
            </div>
          </div>
          <div>
            <p>Complete your profile</p>
            <div style={styles.profileCompletionBar}>
              {/* Profile Completion Bar Set to 60% */}
              <div style={{ ...styles.completedBar, width: '60%' }}></div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div style={styles.chartsSection}>
          {/* Line chart - Daily internship applications */}
          <div style={styles.chartContainer}>
            <h3>Daily Internship Applications</h3>
            <LineChart width={450} height={350} data={dailyInternshipsData}>
              <XAxis dataKey="day" />
              <YAxis />
              <CartesianGrid stroke="#ccc" />
              <Tooltip content={<CustomLineTooltip />} />
              <Legend />
              <Line type="monotone" dataKey="internshipsApplied" stroke="#8884d8" />
            </LineChart>
          </div>

          {/* Bar chart - Internship status */}
          <div style={styles.chartContainer}>
            <h3>Internship Status</h3>
            <BarChart width={450} height={350} data={internshipStatusData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#ccc" />
              <Tooltip content={<CustomBarTooltip />} />
              <Legend />
              <Bar dataKey="completed" stackId="a" fill="#82ca9d" />
              <Bar dataKey="inProgress" stackId="a" fill="#8884d8" />
              <Bar dataKey="pending" stackId="a" fill="#ff8042" />
            </BarChart>
          </div>
        </div>

        {/* Internship Status Names Section */}
        {/* <div style={styles.noteSection}> */}
          {/* <h3>Internship Status Summary:</h3>
          <ul>
            {internshipStatusData.map((status, index) => (
              <li key={index}>
                <strong>{status.name}:</strong> 
                {` Completed: ${status.completed}, In Progress: ${status.inProgress}, Pending: ${status.pending}`}
              </li>
            ))}
          </ul> */}
        {/* </div> */}

        {/* Note Section */}
        <div style={styles.noteSection}>
          
          <strong>Note:</strong> To succeed as an intern, be proactive, open to learning, and communicate well. Build relationships, manage your time, and stay adaptable. Set goals, stay positive, and network for future opportunities.
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
