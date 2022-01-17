import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import SideMenu from './SideMenu';

function App() {
  return (
    <div className="App">
      <SideMenu />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
