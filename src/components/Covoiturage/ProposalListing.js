import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Fab, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Form from './Form';
import Listing from './Listing';
import { getProposals } from '../../core/services/covoit';

const styles = (theme) => ({
  root: {
    width: '100%',
  },
  addButton: {
    margin: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  margin: {
    margin: theme.spacing.unit,
  },
});

class ProposalListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proposals: [],
      showListing: true,
      showForm: false,
    };

    getProposals()
      .then(({ result }) => this.setState({ proposals: result }))
      .catch((response) => {
        if (response.statusCode === 404) this.setState({ proposals: [] });
      });

    this.handleClick = this.handleClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  handleClick() {
    this.setState({ showListing: false, showForm: true });
  }

  handleBackClick() {
    getProposals()
      .then(({ result }) =>
        this.setState({ proposals: result, showListing: true, showForm: false }),
      )
      .catch((response) => {
        if (response.statusCode === 404) this.setState({ proposals: [] });
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.state.showListing && (
          <div>
            <div className={classes.addButton}>
              <div>
                <Fab
                  size="small"
                  color="secondary"
                  aria-label="Add"
                  className={classes.margin}
                  onClick={this.handleClick}
                >
                  <AddIcon />
                </Fab>
              </div>
              <Typography variant="body1">Proposer un trajet</Typography>
            </div>
            <Listing items={this.state.proposals} />
          </div>
        )}
        {this.state.showForm && (
          <div>
            <Button onClick={this.handleBackClick}>
              <ArrowBackIcon />
            </Button>
            <Form type="proposal" />
          </div>
        )}
      </div>
    );
  }
}

ProposalListing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProposalListing);
