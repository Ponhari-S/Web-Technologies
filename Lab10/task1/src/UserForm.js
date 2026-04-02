import React, { useState } from 'react';

const UserForm = () => {
  // Requirement: Manage form input fields using the useState Hook
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // State for managing validation errors and UI feedback
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Requirement: Capture user input changes using the onChange event handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Dynamically update the specific field in the state object
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    // Clear the specific error for a field as soon as the user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  // Requirement: Validate input fields using conditional logic
  const validate = () => {
    let newErrors = {};
    
    // Check for empty fields
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Check for empty field AND valid email format using Regex
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format';
    }

    // Check for empty field and minimum length
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    return newErrors;
  };

  // Requirement: Handle form submission using the onSubmit event
  const handleSubmit = (e) => {
    // Requirement: Prevent form submission (browser refresh) using preventDefault
    e.preventDefault();
    
    // Run validation checks
    const validationErrors = validate();
    
    // If errors exist, update the error state and stop submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
    } else {
      // Requirement: Reset form fields after successful submission
      setFormData({
        name: '',
        email: '',
        password: ''
      });
      setErrors({});
      setIsSubmitted(true);
      
      // Hide the success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  // Requirement: Maintain proper form structure and user feedback
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User Registration</h2>
      
      {isSubmitted && <div style={styles.successBox}>Form submitted successfully!</div>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          {/* Requirement: Bind input field values using controlled components */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ ...styles.input, borderColor: errors.name ? '#dc3545' : '#ccc' }}
            placeholder="Enter your name"
          />
          {/* Requirement: Display validation error messages dynamically using conditional rendering */}
          {errors.name && <span style={styles.errorText}>{errors.name}</span>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ ...styles.input, borderColor: errors.email ? '#dc3545' : '#ccc' }}
            placeholder="Enter your email"
          />
          {errors.email && <span style={styles.errorText}>{errors.email}</span>}
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ ...styles.input, borderColor: errors.password ? '#dc3545' : '#ccc' }}
            placeholder="Enter a password"
          />
          {errors.password && <span style={styles.errorText}>{errors.password}</span>}
        </div>

        <button type="submit" style={styles.submitButton}>
          Register
        </button>
      </form>
    </div>
  );
};

// Inline styling for a clean, readable layout
const styles = {
  container: {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '25px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff'
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  formGroup: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    outline: 'none'
  },
  errorText: {
    color: '#dc3545',
    fontSize: '14px',
    marginTop: '5px'
  },
  submitButton: {
    padding: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px'
  },
  successBox: {
    backgroundColor: '#d4edda',
    color: '#155724',
    padding: '10px',
    borderRadius: '4px',
    marginBottom: '20px',
    textAlign: 'center',
    border: '1px solid #c3e6cb'
  }
};

export default UserForm;