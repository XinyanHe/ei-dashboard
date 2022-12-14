import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {

    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  console.log(backendData);
  return (
    <div className="App">
      backendData
    </div>
  );
}

export default App;
