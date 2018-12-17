import React from 'react';

import './Addresses.css';

const Addresses = () => (
  <div className="content">
    <h1>Adresses</h1>
    <div className="block">
      <div className="address ">
        <h2>Église de La Crèche</h2>
        <p>57 av Paris</p>
        <p>79260 La Crèche</p>
        <div>
          <iframe
            title="egliseLaCrecheLoc"
            width="425"
            height="350"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.3053587675094605%2C46.35942752368587%2C-0.29638946056365967%2C46.36334796779477&amp;layer=mapnik&amp;marker=46.361388000155856%2C-0.30087539999999535"
            style={{ border: '1px solid black' }}
          />
          <br />
          <small>
            <a href="https://www.openstreetmap.org/?mlat=46.36139&amp;mlon=-0.30088#map=18/46.36139/-0.30088">
              Agrandir la carte
            </a>
          </small>
        </div>
      </div>
    </div>
    <div className="block">
      <div className="address ">
        <h2>Château de la Taillée</h2>
        <p>372 Rue de la Taillée</p>
        <p>79410 Échiré</p>
        <div>
          <iframe
            title="chateauDeLaTailleeLoc"
            width="425"
            height="350"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.4229199886322022%2C46.391396769820524%2C-0.40122628211975103%2C46.39923278770778&amp;layer=mapnik&amp;marker=46.39531491941399%2C-0.41207313537597656"
            style={{ border: '1px solid black' }}
          />
          <br />
          <small>
            <a href="https://www.openstreetmap.org/?mlat=46.39531&amp;mlon=-0.41207#map=17/46.39531/-0.41207">
              Agrandir la carte
            </a>
          </small>
        </div>
      </div>
    </div>
  </div>
);

export default Addresses;
