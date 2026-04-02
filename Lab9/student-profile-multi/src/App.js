import React from 'react';
import StudentCard from './StudentCard';

const App = () => {

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Student Performance Dashboard</h1>
      
      <div style={styles.grid}>

        <StudentCard 
          name="Arjun Kumar" 
          department="Computer Science" 
          marks="92%" 
        />
        <StudentCard 
          name="Priya Sharma" 
          department="Electrical Engineering" 
          marks="88%" 
        />
        <StudentCard 
          name="Rahul Verma" 
          department="Mechanical Engineering" 
          marks="75%" 
        />
        <StudentCard 
          name="Anita Desai" 
          department="Information Technology" 
          marks="95%" 
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f7f6',
    minHeight: '100vh'
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px'
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
};

export default App;