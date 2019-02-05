import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import ProposalListing from './ProposalListing';
import RequestListing from './RequestListing';
import trads from '../../core/trads';

const styles = (theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    margin: '30px',
    alignSelf: 'flex-start',
    display: 'flex',
    alignItems: 'center',
  },
  margin: {
    margin: theme.spacing.unit,
  },
});

class Covoiturage extends Component {
  constructor(props) {
    super(props);
    const initialValue = props.location.state && props.location.state.value;
    this.state = {
      value: initialValue || 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Typography variant="h2">{trads('Covoiturage').title}</Typography>
        <Typography variant="h6">
          {trads('Covoiturage').description}
        </Typography>
        <Tabs
          textColor="primary"
          indicatorColor="primary"
          className={classes.tabs}
          value={value}
          onChange={this.handleChange}
        >
          <Tab label={trads('Covoiturage').proposalsLabel} />
          <Tab label={trads('Covoiturage').requestsLabel} />
        </Tabs>
        {value === 0 && <ProposalListing trads={trads('Covoiturage')} />}
        {value === 1 && <RequestListing trads={trads('Covoiturage')} />}
      </div>
    );
  }
}

Covoiturage.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withStyles(styles)(Covoiturage);
