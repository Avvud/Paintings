import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <>
      <nav className="navbar">
        <h1 className="logo">Tanjore Treasure</h1>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</NavLink></li>
          <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/cart" onClick={() => setMenuOpen(false)}>Cart</NavLink></li>
        </ul>
      </nav>
      <div style={{ height: '80px' }}></div>
    </>
  );
}

export default NavBar;
