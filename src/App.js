import React, { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    document.title = "404 Page Not Found";
  }, []);

  return (
    <div className="container">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <button onClick={() => window.location.href = '/'}>Go Home</button>
    </div>
  );
};

export default App;
