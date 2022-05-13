import './App.css';
import Tabs from './components/Tabs';

// import { useState } from 'react'

function App() {
  // const [tabIndex, setTabIndex] = useState(0)

  return (
    <div className="App">
      <Tabs
        tabs={ [
            { label:'1', content: 'First content' },
            { label:'2', content: 'Second content' },
            { label:'3', content: 'Third content' },
          ] }
      />
    </div>
  );
}

export default App;
