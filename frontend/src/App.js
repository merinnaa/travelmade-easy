// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/')
    .then((response) => {
      setMessage(response.data)
    });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8080/test-db')
    .then((response) => setMessage(JSON.stringify(response.data)))
    .catch((error) => console.error("Error fetching users:", error));
  }, []);
  
    return (
        <div>
            <h1>{message}</h1>
            <p>Backend Connection: {message}</p>
        </div>
    );
}

export default App;