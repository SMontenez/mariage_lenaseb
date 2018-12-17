import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => (
  <div id="navbarContainer">
    <div id="navbar">
      <Link to="/bienvenue">Bienvenue</Link>
      <Link to="/addresses">Adresses</Link>
      <Link to="/Logements">Logements</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/test">Test</Link>
      <Link to="/presence">Confirmation présence</Link>
      <Link to="/questions">Questions</Link>
    </div>
  </div>
);

export default Navbar;
