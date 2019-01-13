import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const ONE_DAY = 24 * 60 * 60 * 1000;
const WEDDING_DATE = new Date('2019-08-17');

const styles = (theme) => ({
  root: {
    width: '80px',
    marginRight: '5%',
    padding: '5px 20px',
    alignSelf: 'flex-end',
    border: '1px solid black',
    borderRadius: '50%',
    backgroundColor: theme.palette.secondary.main,
    transform: 'rotate(10deg)',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  countNumber: {
    fontWeight: 'bold',
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
