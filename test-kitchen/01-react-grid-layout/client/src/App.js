import { useState } from 'react'
import './App.css';
import Component from './components/Component';

function App() {
  const [transparentSelection, setTransparentSelection] = useState(false)
  
  return (
    <div className={`App ${transparentSelection && 'react-draggable-transparent-selection'}`}>
      <Component setTransparentSelection={setTransparentSelection} />
    </div>
  );
}

export default App;