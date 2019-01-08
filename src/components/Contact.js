import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, CircularProgress, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import * as validators from '../core/helpers/validators';
import { sendContactEmail } from '../core/services/email';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '800px',
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

function checkInvalidity(fieldName, value) {
  if (fieldName === 'email') {
    return !validators.email(value);
  }

  return value === '';
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: {
        value: '',
        isInvalid: false,
      },
      lastname: {
        value: '',
        isInvalid: false,
      },
      email: {
        value: '',
        isInvalid: false,
      },
      message: {
        value: '',
        isInvalid: false,
      },
    };

    this.getValues = this.getValues.bind(this);
    this.isInvalid = this.isInvalid.bind(this);
    this.isFormValid = this.isFormValid.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getValues() {
    return {
      firstname: this.state.firstname.value,
      lastname: this.state.lastname.value,
      email: this.state.email.value,
      message: this.state.message.value,
    };
  }

  handleChange(fieldName) {
    return (event) => {
      if (fieldName) {
        const { value } = event.target;
        const isInvalid = checkInvalidity(fieldName, value);
        this.setState({ [fieldName]: { value, isInvalid } });
      }
    };
  }

  async handleClick() {
    try {
      this.setState({ error: false, success: false, sending: true });
      await sendContactEmail(this.getValues());
    } catch (err) {
      this.setState({ error: true, success: false, sending: false });
      return;
    }
    document.getElementById('contactForm').reset();
    this.setState({ error: false, success: true, sending: false });
  }

  isInvalid(fieldName) {
    return this.state[fieldName].isInvalid;
  }

  isFormValid() {
    return !Object.keys(this.state).some(this.isInvalid);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h2">Contact</Typography>
        <Typography variant="h6">
          Si malgré tous nos efforts, vous ne trouvez pas votre bonheur ici, envoyez nous un message
          et nous y répondrons dans les plus bref délais.
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
              error={this.isInvalid('firstname')}
              onChange={this.handleChange('firstname')}
            />
            <TextField
              className={classes.input}
              label="Nom"
              variant="outlined"
              required
              error={this.isInvalid('lastname')}
              onChange={this.handleChange('lastname')}
            />
          </div>
          <TextField
            className={classes.input}
            label="Email"
            variant="outlined"
            required
            error={this.isInvalid('email')}
            onChange={this.handleChange('email')}
          />
          <TextField
            className={classes.message}
            label="Votre message"
            variant="outlined"
            multiline
            rows="10"
            required
            error={this.isInvalid('message')}
            onChange={this.handleChange('message')}
          />
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
              Désolé, une erreur est survenue et le mail n&#39;a pas pu être envoyé. Veuillez
              réessayer plus tard.
            </Typography>
          )}
          {this.state.success && (
            <Typography variant="body1" color="primary" className={classes.result}>
              Votre message a été envoyé avec succès !
            </Typography>
          )}
        </form>
      </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
