import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import {
  Adresses,
  Bienvenue,
  Contact,
  Covoiturage,
  DressCode,
  EnConstruction,
  Home,
  Liste,
  Logements,
  Menu,
  Presence,
} from './components';
import config from './config';
import headerPicture from './resources/header.png';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  enConstruction: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '70%',
    maxWidth: '820px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: '100%',
  },
};

const App = ({ classes }) => {
  if (config.siteEnConstruction) {
    return (
      <div className={classes.enConstruction}>
        <EnConstruction />
      </div>
    );
  }

  return (
    <Router>
      <div className={classes.root}>
        <Route path="/" exact component={Home} />
        <div className={classes.content} id="app-content">
          <Link className={classes.link} to="/">
            <img className={classes.image} alt="lenaseb" src={headerPicture} />
          </Link>
          <Menu />
          <Route path="/bienvenue" component={Bienvenue} />
          <Route path="/adresses" component={Adresses} />
          <Route path="/logements" component={Logements} />
          <Route path="/contact" component={Contact} />
          <Route path="/covoiturage" component={Covoiturage} />
          <Route path="/presence" component={Presence} />
          <Route path="/jeux" component={EnConstruction} />
          <Route path="/liste" component={Liste} />
          <Route path="/dresscode" component={DressCode} />
        </div>
      </div>
    </Router>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
