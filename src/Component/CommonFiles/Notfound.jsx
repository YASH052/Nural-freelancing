import React from 'react';
import { Link } from 'react-router-dom';

export const Notfound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Our ISP Service!</h1>
      <p style={styles.message}>We're thrilled to have you here. Explore our services and enjoy a seamless internet experience!</p>
      <Link to="/services" style={styles.button}>Explore Services</Link>
    </div>
  );
};

// Basic styling for the Welcome page
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '0px',
    padding: '20px',
    backgroundColor: '#f0f8ff',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2.5rem',
    color: '#2c3e50',
  },
  message: {
    fontSize: '1.2rem',
    color: '#34495e',
    margin: '20px 0',
  },
  button: {
    marginTop: '20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007BFF',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
};

// Adding hover effect for the button
styles.buttonHover = {
  ...styles.button,
  backgroundColor: '#0056b3',
};

export default Notfound;
