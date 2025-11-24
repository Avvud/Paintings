import { Routes, Route } from 'react-router-dom';
import NavBar from './components/nav';

import Home from './pages/home';
import Gallery from './pages/Gallery';
import About from './pages/about';
import Murugar from './pages/murugar';

function App() {
  return (
    <>
      <script>window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}</script><script id="zsiqscript" src="https://salesiq.zohopublic.com/widget?wc=siqba5104846f5756656ffd93530dcfcd95a90dc4652ea2d64495c6fda435171406" defer></script>
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
