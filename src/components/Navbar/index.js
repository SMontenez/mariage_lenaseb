import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Header = () => (
  <div className="navbar">
    <Link to="/">Home</Link>
    <Link to="/se_loger">Se loger</Link>
    <Link to="/les_environs">Les environs</Link>
  </div>
);

export default Header;
