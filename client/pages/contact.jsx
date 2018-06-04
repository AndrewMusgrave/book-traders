import React, { Component, Fragment } from 'react';
import * as actions from '../actions';
import { Container, FormCard } from '../components';
import { connect } from 'react-redux';

const contactErrors = {
  name: 'Please enter a name',
  email: 'Please enter an email',
  phoneNumber: 'Please enter a phone number',
  message: 'Please enter a message',
};

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: { value: '', error: '' },
      email: { value: '', error: '' },
      phoneNumber: { value: '', error: '' },
      message: { value: '', error: '' },
    };
  }

  handleTextChange(key) {
    return e => {
      const stateValue = this.state[key];
      stateValue.value = e.target.value;
      this.setState({ [key]: stateValue });
    };
  }

  handleInputBlur(key) {
    return e => {
      const stateValue = this.state[key];

      if (!stateValue.value) {
        stateValue.error = contactErrors[key];
      } else {
        stateValue.error = '';
      }

      this.setState({ [key]: stateValue });
    };
  }

  render() {
    const {
      name,
      email,
      phoneNumber,
      message,
    } = this.state;

    return (
      <Container.Sub loose>
        <FormCard header="Contact Us">
          <FormCard.Field
            label="Name *"
            id="contact-name"
            value={name.value}
            error={name.error}
            onChange={this.handleTextChange('name')}
            onBlur={this.handleInputBlur('name')}
          />
          <FormCard.Field
            label="Email *"
            id="contact-email"
            value={email.value}
            error={email.error}
            onChange={this.handleTextChange('email')}
            onBlur={this.handleInputBlur('email')}
          />
          <FormCard.Field
            label="PhoneNumber *"
            id="contact-phoneNumber"
            value={phoneNumber.value}
            error={phoneNumber.error}
            onChange={this.handleTextChange('phoneNumber')}
            onBlur={this.handleInputBlur('phoneNumber')}
          />
          <FormCard.Field
            label="Message *"
            id="contact-Message"
            value={message.value}
            error={message.error}
            multi={10}
            onChange={this.handleTextChange('message')}
            onBlur={this.handleInputBlur('message')}
          />
          <FormCard.ButtonGroup>
            <FormCard.Button>Send Message</FormCard.Button>
          </FormCard.ButtonGroup>
          <FormCard.Link href="/">
            Wrong name? Click here
          </FormCard.Link>
          <FormCard.ButtonGroup>
            <FormCard.Button>Send Message</FormCard.Button>
            <FormCard.Button>Send Message</FormCard.Button>
            <FormCard.Button>Send Message</FormCard.Button>
            <FormCard.Button>Send Message</FormCard.Button>
          </FormCard.ButtonGroup>
        </FormCard>
      </Container.Sub>
    );
  }
}

export default Contact;
