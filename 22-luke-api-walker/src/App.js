import './App.css';
import Form from './components/Form'
import Person from './components/Person'
import Planet from './components/Planet'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Form />
        <Routes>
          <Route path='/people/:id' element={ <Person /> } />
          <Route path='/planets/:id' element={ <Planet /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
