import React from 'react';

import StudentProfile from './StudentProfile';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '40px' }}>
        Student Management System
      </h1>
      <StudentProfile />
    </div>
  );
};

export default App;