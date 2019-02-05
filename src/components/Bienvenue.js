import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import trads from '../core/trads';

const styles = () => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    marginBottom: '10px',
    alignSelf: 'stretch',
  },
});

const Bienvenue = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.header}>
      <Typography variant="h2" className={classes.title}>
        {trads('Bienvenue').title}
      </Typography>
    </div>
    <Typography variant="h6" className={classes.text}>{trads('Bienvenue').text1}</Typography>
    <Typography variant="h6" className={classes.text}>{trads('Bienvenue').text2}</Typography>
    <Typography variant="h6" className={classes.text}>{trads('Bienvenue').text3}</Typography>
  </div>
);

Bienvenue.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bienvenue);
