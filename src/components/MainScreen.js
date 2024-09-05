import React from 'react';

const MainScreen = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Main Screen</h1>
      <p style={styles.description}>
        This is a placeholder for the Main Screen. You can customize this screen with your content and features.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: '16px',
    color: '#666',
    textAlign: 'center',
    marginTop: '10px',
  },
};

export default MainScreen;
