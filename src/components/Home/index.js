import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LenaSebPic from '../../resources/LenaSeb_600px.png';

import './Home.css';

function displayNavbar() {
  const navbarElement = document.getElementById('navbarContainer');
  navbarElement.style.display = 'flex';
}

class Home extends Component {
  componentDidMount() {
    const navbarElement = document.getElementById('navbarContainer');
    navbarElement.style.display = 'none';
  }

  render() {
    return (
      <div className="content">
        <h1>Lénaic et Sébastien</h1>
        <div>
          <img alt="lenaseb" src={LenaSebPic} />
        </div>
        <p className="growContent">17 août 2019</p>
        <Link id="enterButton" to="/bienvenue" onClick={displayNavbar}>
          Entrer
        </Link>
      </div>
    );
  }
}

export default Home;
