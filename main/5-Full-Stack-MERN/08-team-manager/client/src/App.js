import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from "./views/Main"
import PlayerCreate from './views/PlayerCreate'
import PlayerStatus from './views/PlayerStatus'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/players/new" element={<PlayerCreate />} />
        <Route path="/status/game/:id" element={<PlayerStatus />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;