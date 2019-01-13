import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, CircularProgress, Radio, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { sendPresenceEmail } from '../core/services/email';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginBottom: '50px',
    padding: '10px 20px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    border: `1px solid #999999`,
    borderRadius: '10px',
    backgroundColor: 'white',
  },
  nameInputs: {
    alignSelf: 'stretch',
    display: 'flex',
  },
  requiredLabel: {
    alignSelf: 'flex-end',
  },
  input: {
    marginRight: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  radio: {
    display: 'flex',
    alignItems: 'center',
  },
  info: {
    width: '100%',
    marginTop: theme.spacing.unit * 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  message: {
    marginBottom: theme.spacing.unit,
    alignSelf: 'stretch',
  },
  button: {
    margin: theme.spacing.unit,
    alignSelf: 'center',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  result: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

class Presence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      presence: true,
      nbAdults: 1,
      nbChildren: 0,
      message: '',
    };

    this.isEmpty = this.isEmpty.bind(this);
    this.isPresenceFormValid = this.isPresenceFormValid.bind(this);
    this.isNoPresenceFormValid = this.isNoPresenceFormValid.bind(this);
    this.isFormValid = this.isFormValid.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(fieldName) {
    return (event) => {
      if (fieldName) {
        const { value } = event.target;
        this.setState({ [fieldName]: value });
      }
    };
  }

  handlePresenceChange(value) {
    this.setState({ presence: value });
  }

  async handleClick() {
    try {
      this.setState({ error: false, success: false, sending: true });
      const payload = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        presence: this.state.presence,
        nbAdults: this.state.nbAdults,
        nbChildren: this.state.nbChildren,
        message: this.state.message,
      };
      await sendPresenceEmail(payload);
    } catch (err) {
      this.setState({ error: true, success: false, sending: false });
      return;
    }
    document.getElementById('contactForm').reset();
    this.setState({ error: false, success: true, sending: false });
  }

  isEmpty(fieldName) {
    return this.state[fieldName] === '';
  }

  isPresenceFormValid() {
    return !this.isEmpty('firstname') && !this.isEmpty('lastname') && this.state.nbAdults > 0;
  }

  isNoPresenceFormValid() {
    return !this.isEmpty('firstname') && !this.isEmpty('lastname');
  }

  isFormValid() {
    return (
      (!this.state.presence && this.isNoPresenceFormValid()) ||
      (this.state.presence && this.isPresenceFormValid())
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h2">Presence</Typography>
        <Typography variant="h6">
          Pas envie d’envoyer la carte ? Confirmez votre présence ici !
        </Typography>
        <form className={classes.form} id="contactForm">
          <Typography variant="caption" className={classes.requiredLabel}>
            * Champs obligatoire
          </Typography>
          <div className={classes.nameInputs}>
            <TextField
              className={classes.input}
              label="Prénom"
              variant="outlined"
              required
              onChange={this.handleChange('firstname')}
            />
            <TextField
              className={classes.input}
              label="Nom"
              variant="outlined"
              required
              onChange={this.handleChange('lastname')}
            />
          </div>
          <div className={classes.radio}>
            <Radio
              color="primary"
              checked={this.state.presence}
              onChange={() => this.handlePresenceChange(true)}
              name="isPresent"
            />
            <Typography variant="body1">Je serai présent</Typography>
          </div>
          <div className={classes.radio}>
            <Radio
              color="primary"
              checked={!this.state.presence}
              onChange={() => this.handlePresenceChange(false)}
              name="wontBePresent"
            />
            <Typography variant="body1">Regrette de ne pouvoir venir</Typography>
          </div>
          {this.state.presence && (
            <div className={classes.info}>
              <div>
                <TextField
                  type="number"
                  value={this.state.nbAdults}
                  className={classes.input}
                  label="Nombre d'adultes"
                  variant="outlined"
                  onChange={this.handleChange('nbAdults')}
                />
                <TextField
                  type="number"
                  value={this.state.nbChildren}
                  className={classes.input}
                  label="Nombre d'enfants"
                  variant="outlined"
                  onChange={this.handleChange('nbChildren')}
                />
              </div>
              <Typography variant="body1">
                Age des enfants, allergies alimentaires, besoins spécifiques ? Dites-nous tout !
              </Typography>
              <TextField
                className={classes.message}
                label="Votre message"
                variant="outlined"
                multiline
                rows="6"
                onChange={this.handleChange('message')}
              />
            </div>
          )}
          <Button
            className={classes.button}
            variant="contained"
            disabled={!this.isFormValid()}
            onClick={() => this.handleClick()}
          >
            Envoyer
          </Button>
          {this.state.sending && <CircularProgress className={classes.result} />}
          {this.state.error && (
            <Typography variant="body1" color="error" className={classes.result}>
              Désolé, une erreur est survenue et votre présence n&#39;a pas pu être enregistrée.
              Veuillez réessayer plus tard.
            </Typography>
          )}
          {this.state.success && (
            <Typography variant="body1" color="primary" className={classes.result}>
              Votre présence est enregistrée, merci !
            </Typography>
          )}
        </form>
      </div>
    );
  }
}

Presence.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Presence);
