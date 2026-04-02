import React, { useState } from 'react';

const Counter = () => {
    
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Interactive Counter</h2>
      
      <div style={styles.displayArea}>
        <span style={styles.countText}>{count}</span>
      </div>
      
      <div style={styles.buttonGroup}>
        <button style={styles.decrementButton} onClick={handleDecrement}>
          Decrement (-)
        </button>
        <button style={styles.incrementButton} onClick={handleIncrement}>
          Increment (+)
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '350px',
    margin: '50px auto',
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
    backgroundColor: '#ffffff'
  },
  heading: {
    color: '#333',
    marginTop: '0'
  },
  displayArea: {
    margin: '30px 0',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    border: '2px solid #e9ecef'
  },
  countText: {
    fontSize: '64px',
    fontWeight: 'bold',
    color: '#212529'
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px'
  },
  decrementButton: {
    padding: '12px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold'
  },
  incrementButton: {
    padding: '12px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold'
  }
};

export default Counter;