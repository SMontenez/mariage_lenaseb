import React, { Component } from 'react';

import { send as sendEmail } from '../../core/services/email';

import './Contact.css';

class Bienvenue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(fieldName) {
    return (event) => {
      this.setState({ [fieldName]: event.target.value });
    };
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ sendingStatus: 'pending' });
    try {
      await sendEmail(this.state);
    } catch (err) {
      console.log('ERR', err);
      this.setState({ sendingStatus: 'error' });
      return;
    }
    this.setState({ sendingStatus: 'success' });
  }

  render() {
    return (
      <div className="content">
        <h1>Contact</h1>
        <div className="block">
          <div className="text">
            <p>
              Si vous avez une question, voici un formulaire qui vous permettra de nous en faire
              part
            </p>
            <p>
              Inscrivez-y:
              <ul>
                <li>
                  <strong>vos nom et prénom</strong> (pour qu&apos;on puisse vous identifier)
                </li>
                <li>
                  <strong>votre email</strong> (pour qu&apos;on puisse vous recontacter)
                </li>
                <li>
                  le message que vous voulez nous faire parvenir (question, remarque ou tout
                  simplement message d&apos;amour)
                </li>
              </ul>
            </p>
          </div>
          <form onSubmit={this.handleSubmit}>
            <p>Nom</p>
            <textarea
              rows="1"
              cols="20"
              type="text"
              value={this.state.lastname}
              onChange={this.handleChange('lastname')}
            />
            <p>Prénom</p>
            <textarea
              rows="1"
              cols="20"
              type="text"
              value={this.state.firstname}
              onChange={this.handleChange('firstname')}
            />
            <p>Email</p>
            <textarea
              rows="1"
              cols="40"
              type="text"
              value={this.state.email}
              onChange={this.handleChange('email')}
            />
            <p>Votre message</p>
            <textarea
              rows="10"
              cols="100"
              value={this.state.message}
              onChange={this.handleChange('message')}
            />
            <p>
              <button>Envoyer</button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Bienvenue;
