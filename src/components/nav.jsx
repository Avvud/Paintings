import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => {
      const newState = !prev;
      // Prevent body scroll when menu is open
      if (newState) {
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }
      return newState;
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  // Add scrolled class to navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <h1 className="logo">Tanjore Treasure</h1>
        
        <div 
          className={`hamburger ${menuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          role="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul 
          className={`nav-links ${menuOpen ? 'show' : ''}`}
          onClick={(e) => {
            // Close menu when clicking on overlay (not on links)
            if (e.target.classList.contains('nav-links')) {
              closeMenu();
            }
          }}
        >
          <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
        </ul>
      </nav>
      <div style={{ height: '80px' }}></div>
    </>
  );
}

export default NavBar;