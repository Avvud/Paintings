import { Routes, Route } from 'react-router-dom';
import NavBar from './components/nav';

import Home from './pages/home';
import Gallery from './pages/Gallery';
import About from './pages/about';
import Murugar from './pages/murugar';

function App() {
  return (
    <>
      <NavBar />   {/*  <—– always visible  */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/Murugar" element={<Murugar />} />
      </Routes>
    </>
  );
}

export default App;
