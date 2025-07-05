import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <>
      {/* Header/NavBar */}
      <nav className="navbar">
        <h1 className="logo">Tanjore Treasure</h1>
        <ul>
          <li>
            <NavLink to="/" end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
      {/* Spacer to prevent content from being hidden behind navbar */}
      <div style={{ height: '80px' }}></div>
    </>
  );
}

export default NavBar;

