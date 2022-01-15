import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const Menu = () => (
    <>
        <Link to="/">Home page</Link><br/>
        <Link to="/about">About page</Link>
    </>
)

const Home = () => (
    <>
        <h2>Home page</h2>
        <Menu />
    </>
)

const About = () => (
    <div>
        <h2>About page</h2>
        <Menu />
    </div>
)

const App = () => {
  return (
    <div className="App">
      <h1>Hello</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
