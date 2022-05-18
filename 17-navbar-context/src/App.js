import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';
import Wrapper from './components/Wrapper';
import { UserContext } from './contexts/UserContext'

function App() {
  const [name, setName] = useState('Bob Smith')

  return (
    <div className="App">
      <UserContext.Provider value={ {name, setName} }>
        <Wrapper>
          <Navbar/>
          <FormWrapper/>
        </Wrapper>
      </UserContext.Provider>
    </div>
  );
}

export default App;