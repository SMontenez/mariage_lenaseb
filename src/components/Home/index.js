import React from 'react';

import LenaSebPic from '../../resources/LenaSeb_600px.png';
import './Down.css';
import './Home.css';

const Home = () => (
  <div id="home">
    <section id="header">
      <content>
        <h1>Lénaic et Sébastien</h1>
        <img alt="lenaseb" src={LenaSebPic} />
        <p>17 août 2019</p>
      </content>
      <a href="#video" className="down">
        <i className="down-icon" aria-hidden="true" />
      </a>
    </section>
  </div>
);

export default Home;
