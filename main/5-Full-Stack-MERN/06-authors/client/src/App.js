import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from "./views/Main";
import AuthorCreate from './views/AuthorCreate';
import AuthorUpdate from './views/AuthorUpdate';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/authors/new" element={<AuthorCreate />} />
        <Route path="/authors/:id" element={<AuthorUpdate />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;