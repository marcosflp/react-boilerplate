import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Currencies from './Currencies';
import SideMenu from './SideMenu';

function App() {
  return (
    <div className="App">
      <SideMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/currencies" element={<Currencies />} />
      </Routes>
    </div>
  );
}

export default App;
