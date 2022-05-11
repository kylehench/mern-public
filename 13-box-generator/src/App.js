import './App.css';
import BoxDisplay from './components/BoxDisplay';
import BoxForm from './components/BoxForm';
import React, { useState } from 'react';

function App() {
  const [colors, setColors] = useState([])
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }

  return (
    <div className="App container">
      <BoxForm addColor={ addColor } />
      <BoxDisplay colors={ colors } />
    </div>
  );
}

export default App;
