import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import DressCode1 from '../resources/dresscode_1.png';
import DressCode2 from '../resources/dresscode_2.png';
import DressCode3 from '../resources/dresscode_3.png';
import DressCode4 from '../resources/dresscode_4.png';
import DressCode5 from '../resources/dresscode_5.png';
import DressCode6 from '../resources/dresscode_6.png';
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
  picture: {
    maxWidth: '80%',
    alignSelf: 'center',
    margin: '20px',
    borderRadius: '10px',
  },
});

const DressCode = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.header}>
      <Typography variant="h2" className={classes.title}>
        {trads('DressCode').title}
      </Typography>
    </div>
    <Typography variant="h6" className={classes.text}>
      {trads('DressCode').text1}
    </Typography>
    <Typography variant="h6" className={classes.text}>
      {trads('DressCode').text2}
    </Typography>
    <Typography variant="h6" className={classes.text}>
      {trads('DressCode').text3}
    </Typography>
    <img className={classes.picture} alt="lenaseb" src={DressCode1} />
    <img className={classes.picture} alt="lenaseb" src={DressCode2} />
    <img className={classes.picture} alt="lenaseb" src={DressCode3} />
    <img className={classes.picture} alt="lenaseb" src={DressCode4} />
    <img className={classes.picture} alt="lenaseb" src={DressCode5} />
    <img className={classes.picture} alt="lenaseb" src={DressCode6} />
  </div>
);

DressCode.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DressCode);
