import './App.css';
import Home from './components/Home';
import Echo from './components/Echo';
import EchoColor from './components/EchoColor';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:string" element={<Echo />} />
          <Route path="/:text/:textColor/:backgroundColor" element={<EchoColor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
