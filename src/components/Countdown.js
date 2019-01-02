import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const ONE_DAY = 24 * 60 * 60 * 1000;
const WEDDING_DATE = new Date('2019-08-17');

const styles = (theme) => ({
  root: {
    position: 'absolute',
    right: '20px',
    top: '10px',
    width: '80px',
    padding: '10px 18px',
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    'border-radius': '50%',
  },
  text: {
    color: theme.palette.primary.main,
  },
  countNumber: {
    'font-weight': 'bold',
  },
});

function getNbDaysLeft() {
  const today = new Date();

  const daysLeft = Math.round(Math.abs((today.getTime() - WEDDING_DATE.getTime()) / ONE_DAY));
  return daysLeft;
}

const Countdown = ({ classes }) => (
  <div className={classes.root}>
    <Typography className={classes.text} variant="body1" align="center">
      Il reste <span className={classes.countNumber}>{getNbDaysLeft()}</span> jours
    </Typography>
  </div>
);

Countdown.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Countdown);
