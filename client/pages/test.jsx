import React, { Component, Fragment } from 'react';
import * as actions from '../actions';
import {
  Container,
  Modal,
  Button,
  FormCard,
  ButtonGroup,
  Tabs,
  InfiniteScroll,
  Spinner,
} from '../components';
import { connect } from 'react-redux';

const noop = () => {};

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      selected: 0,
      node: null,
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

  setNode = node => {
    this.setState({ node });
  };

  render() {
    const { modalOpen, selected, node } = this.state;
    console.log(node);
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
        <ButtonGroup
          primary={{ content: 'Signn in', fullWidth: true }}
          secondary={{
            content: 'Close',
            fullWidth: true,
            danger: true,
            onClick: this.toggleModal,
          }}
        />
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
        {/* <Button fullWidth> Sign in </Button> */}
        <ButtonGroup
          primary={{ content: 'Signn in', fullWidth: true }}
          secondary={{
            content: 'Close',
            fullWidth: true,
            danger: true,
            onClick: this.toggleModal,
          }}
        />
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
        <div
          ref={this.setNode}
          style={{ height: '10000px' }}
        >
          <InfiniteScroll
            container={node}
            Container={<Button>hello</Button>}
          >
            Hello
          </InfiniteScroll>
        </div>
        <Spinner size="large" />
      </Container.Sub>
    );
  }
}

export default Test;
