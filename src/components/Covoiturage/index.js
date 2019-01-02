import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import ProposalListing from './ProposalListing';
import { getProposals, getRequests } from '../../core/services/covoit';

const styles = (theme) => ({
  root: {
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
      proposals: [],
    };

    this.handleChange = this.handleChange.bind(this);

    getProposals()
      .then(({ result }) => this.setState({ proposals: result }))
      .catch((response) => {
        if (response.statusCode === 404) this.setState({ proposals: [] });
      });
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  render() {
    const { classes } = this.props;
    const { value, proposals } = this.state;

    return (
      <div className={classes.root}>
        <Typography variant="h2">Covoiturage</Typography>
        <Typography variant="h6">
          Vous avez une place en plus ? Ou vous cherchez un pilote ? Chauffeur Privé n’étant pas
          présent dans les Deux-Sèvres, on vous propose l’alternative covoiturage.
        </Typography>
        <Tabs
          textColor="primary"
          indicatorColor="primary"
          className={classes.tabs}
          value={value}
          onChange={this.handleChange}
        >
          <Tab label="Trajets proposés" />
          <Tab label="Trajets recherchés" />
        </Tabs>
        {value === 0 && <ProposalListing items={proposals} />}
      </div>
    );
  }
}

Covoiturage.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withStyles(styles)(Covoiturage);
