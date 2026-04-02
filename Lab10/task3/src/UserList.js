import React, { useState, useEffect } from 'react';

const UserList = () => {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setError(null);
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        
        setUsers(data);
      } catch (err) {
        setError(err.message || 'Something went wrong while fetching data.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (isLoading) {
    return (
      <div style={styles.centerContainer}>
        <h3 style={styles.loadingText}>Loading user data...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.centerContainer}>
        <div style={styles.errorBox}>
          <h3>Error Fetching Data</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User Directory</h2>
      <div style={styles.grid}>
        {users.map((user) => (
          <div key={user.id} style={styles.card}>
            <h3 style={styles.name}>{user.name}</h3>
            <p style={styles.detail}><strong>Email:</strong> {user.email}</p>
            <p style={styles.detail}><strong>Company:</strong> {user.company.name}</p>
            <p style={styles.detail}><strong>Website:</strong> {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto'
  },
  centerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif'
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
    borderBottom: '2px solid #007bff',
    paddingBottom: '10px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px'
  },
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '15px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },
  name: {
    marginTop: '0',
    color: '#2c3e50',
    fontSize: '18px'
  },
  detail: {
    margin: '5px 0',
    color: '#555',
    fontSize: '14px'
  },
  loadingText: {
    color: '#007bff'
  },
  errorBox: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    padding: '20px',
    border: '1px solid #f5c6cb',
    borderRadius: '8px',
    textAlign: 'center'
  }
};

export default UserList;