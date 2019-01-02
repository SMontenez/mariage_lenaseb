import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

import { displayAppContent } from '../core/utils/dom';
import LenaSebPic from '../resources/LenaSeb.png';

const styles = (theme) => ({
  root: {
    'min-height': '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    margin: '10px',
  },
  link: {
    ...theme.links,
    position: 'absolute',
    width: '100%',
    bottom: '10px',
    'text-align': 'center',
  },
});

class Home extends Component {
  componentDidMount() {
    displayAppContent(false);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h2">Lénaic et Sébastien</Typography>
        <div>
          <img className={classes.image} alt="lenaseb" src={LenaSebPic} />
        </div>
        <Typography variant="subtitle1">17 août 2019</Typography>
        <Link className={classes.link} to="/bienvenue">
          <Button onClick={() => displayAppContent(true)}>Entrer</Button>
        </Link>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
