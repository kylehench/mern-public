// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';

function App() {
  return (
    <div className="container mt-3">
    <BrowserRouter>
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Main />} path="/home" default />
        <Route element={<Detail />} path="/people/:id" default />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;