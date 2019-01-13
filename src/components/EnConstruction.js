import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import enConstructionPic from '../resources/enConstruction.png';

const styles = {
  root: {
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    marginTop: '15px',
    width: '70%',
  },
};

const EnConstruction = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant="h4" align="center">
      Coming soon...
    </Typography>
    <img alt="enConstruction" src={enConstructionPic} className={classes.image} />
  </div>
);

EnConstruction.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnConstruction);
