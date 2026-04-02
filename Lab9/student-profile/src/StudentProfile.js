import React from 'react';

const StudentProfile = () => {
    
  const name = "Arjun Kumar";
  const department = "Computer Science and Engineering";
  const year = "3rd Year";
  const section = "B";

  return (
    <div style={styles.card}>
      <h2>Student Profile</h2>
      <hr />
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Section:</strong> {section}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '350px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif'
  }
};

export default StudentProfile;