import React, { Component, Fragment } from 'react';
import * as actions from '../actions';
import {
  Container,
  Modal,
  Button,
  FormCard,
  ButtonGroup,
  Tabs,
} from '../components';
import { connect } from 'react-redux';

const noop = () => {};

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      selected: 0,
    };
  }

  toggleModal = () => {
    this.setState(({ modalOpen }) => ({
      modalOpen: !modalOpen,
    }));
  };

  handeTabChange = selected => {
    console.log('hmm');
    this.setState({ selected });
  };

  render() {
    const { modalOpen, selected } = this.state;

    const signinMarkup = (
      <FormCard header="Contact Us" blend>
        <FormCard.Field
          label="Name *"
          id="contact-name"
          value={''}
          error={''}
          onChange={noop}
          onBlur={noop}
        />
        <FormCard.Field
          label="Email *"
          id="contact-email"
          value={''}
          error={''}
          onChange={noop}
          onBlur={noop}
        />
        <FormCard.Field
          label="PhoneNumber *"
          id="contact-phoneNumber"
          value={''}
          error={''}
          onChange={noop}
          onBlur={noop}
        />
        <Button fullWidth> Sign in </Button>
        <FormCard.Link href="/">
          Wrong name? Click here
        </FormCard.Link>
      </FormCard>
    );

    const signupMarkup = (
      <FormCard header="Sign in" blend>
        <FormCard.Field
          label="Name *"
          id="contact-name"
          value={''}
          error={''}
          onChange={noop}
          onBlur={noop}
        />
        <FormCard.Field
          label="Email *"
          id="contact-email"
          value={''}
          error={''}
          onChange={noop}
          onBlur={noop}
        />
        <FormCard.Field
          label="PhoneNumber *"
          id="contact-phoneNumber"
          value={''}
          error={''}
          onChange={noop}
          onBlur={noop}
        />
        <Button fullWidth> Sign in </Button>
        <FormCard.Link href="/">
          Wrong name? Click here
        </FormCard.Link>
      </FormCard>
    );

    const tabs = [
      { content: signinMarkup, tab: 'Sign in' },
      { content: signupMarkup, tab: 'Sign up' },
    ];

    return (
      <Container.Sub>
        <Button onClick={this.toggleModal}>
          Open modal
        </Button>
        {/* <Modal
          open={modalOpen}
          backDrop
          onBackDrop={this.toggleModal}
        >
          <Modal.Section>
            <FormCard header="Contact Us" blend>
              <FormCard.Field
                label="Name *"
                id="contact-name"
                value={''}
                error={''}
                onChange={noop}
                onBlur={noop}
              />
              <FormCard.Field
                label="Email *"
                id="contact-email"
                value={''}
                error={''}
                onChange={noop}
                onBlur={noop}
              />
              <FormCard.Field
                label="PhoneNumber *"
                id="contact-phoneNumber"
                value={''}
                error={''}
                onChange={noop}
                onBlur={noop}
              />
              <FormCard.Field
                label="Message *"
                id="contact-Message"
                value={''}
                error={''}
                multi={10}
                onChange={noop}
                onBlur={noop}
              />
              <Button fullWidth> Sign in </Button>
              <FormCard.Link href="/">
                Wrong name? Click here
              </FormCard.Link>
            </FormCard>
          </Modal.Section>
        </Modal> */}
        <Modal
          open={modalOpen}
          backDrop
          onBackDrop={this.toggleModal}
        >
          <Tabs
            tabs={tabs}
            selected={selected}
            onChange={this.handeTabChange}
          />
        </Modal>
      </Container.Sub>
    );
  }
}

export default Test;
