import React, { Component, Fragment } from 'react';
import * as actions from '../actions';
import {
  Container,
  Modal,
  Button,
  FormCard,
  ButtonGroup,
} from '../components';
import { connect } from 'react-redux';

const noop = () => {};

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };
  }

  toggleModal = () => {
    this.setState(({ modalOpen }) => ({
      modalOpen: !modalOpen,
    }));
  };

  render() {
    const { modalOpen } = this.state;

    return (
      <Container.Sub>
        <Button onClick={this.toggleModal}>
          Open modal
        </Button>
        <Modal
          open={modalOpen}
          backDrop
          onBackDrop={this.toggleModal}
        >
          <Modal.Header
            title="Modal"
            close
            onClose={this.toggleModal}
          />
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
        </Modal>
      </Container.Sub>
    );
  }
}

export default Test;
