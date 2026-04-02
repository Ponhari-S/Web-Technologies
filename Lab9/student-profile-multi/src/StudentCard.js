import React from 'react';

const StudentCard = ({ name, department, marks }) => {
  
  return (
    <div style={styles.card}>
      <h3 style={styles.name}>{name}</h3>
      <div style={styles.details}>
        <p><strong>Department:</strong> {department}</p>
        <p><strong>Marks:</strong> {marks}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    padding: '20px',
    margin: '15px',
    width: '260px',
    height: '150px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    backgroundColor: '#ffffff',
    fontFamily: 'Arial, sans-serif'
  },
  name: {
    marginTop: '0',
    color: '#333',
    borderBottom: '2px solid #007bff',
    paddingBottom: '10px'
  },
  details: {
    color: '#555',
    lineHeight: '1.6'
  }
};

export default StudentCard;