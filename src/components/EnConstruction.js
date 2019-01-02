import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import enConstructionPic from '../resources/enConstruction.png';

const styles = {
  root: {
    'min-height': '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const EnConstruction = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant="h2" align="center">
      Coming soon...
    </Typography>
    <div align="center">
      <img alt="enConstruction" src={enConstructionPic} />
    </div>
  </div>
);

EnConstruction.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnConstruction);
