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

const defaultErrorMessages = {
  signin: {
    username: 'Please provide a username',
    password: 'Please prvovide a password',
  },
  signup: {
    username: 'A username is required',
    password: 'A password is required',
    confirmPassword: 'A password is required',
  },
};

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      selected: 0,
      node: null,
      signin: {
        username: { value: '', error: '' },
        password: { value: '', error: '' },
      },
      signup: {
        username: { value: '', error: '' },
        password: { value: '', error: '' },
        confirmPassword: { value: '', error: '' },
      },
    };
  }

  toggleModal = () => {
    this.setState(({ modalOpen }) => ({
      modalOpen: !modalOpen,
    }));
  };

  handeTabChange = selected => {
    this.setState({ selected });
  };

  handleTextChange = (type, field) => e => {
    const tempState = this.state[type];
    const value = e.target.value;
    tempState[field].value = value;
    this.handleTextValidations(type, field, value);
    this.setState({ [type]: tempState });
  };

  handleTextBlur = (type, field) => e => {
    const tempState = this.state[type];

    if (tempState[field].value.length > 0) {
      return;
    }

    tempState[field].error =
      defaultErrorMessages[type][field];

    this.setState({ [type]: tempState });
  };

  handleTextValidations = (type, field, value) => {
    console.log(type, field, value);
  };

  setNode = node => {
    this.setState({ node });
  };

  render() {
    const {
      modalOpen,
      selected,
      node,
      signin: {
        username: {
          value: signinUsernameValue,
          error: signinUsernameError,
        },
        password: {
          value: signinPasswordValue,
          error: signinPasswordError,
        },
      },
      signup: {
        username: {
          value: signupUsernameValue,
          error: signupUsernameError,
        },
        password: {
          value: signupPasswordValue,
          error: signupPasswordError,
        },
        confirmPassword: {
          value: signupConfirmPasswordValue,
          error: signupConfirmPasswordError,
        },
      },
    } = this.state;

    const signinMarkup = (
      <FormCard header="Sign in" blend>
        <FormCard.Field
          label="Username *"
          id="signin-username"
          value={signinUsernameValue}
          error={signinUsernameError}
          onChange={this.handleTextChange(
            'signin',
            'username',
          )}
          onBlur={this.handleTextBlur('signin', 'username')}
        />
        <FormCard.Field
          label="Password *"
          id="sigin-password"
          value={signinPasswordValue}
          error={signinPasswordError}
          onChange={this.handleTextChange(
            'signin',
            'password',
          )}
          onBlur={this.handleTextBlur('signin', 'password')}
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
      <FormCard header="Sign up" blend>
        <FormCard.Field
          label="Username *"
          id="signup-username"
          value={signupUsernameValue}
          error={signupUsernameError}
          onChange={this.handleTextChange(
            'signup',
            'username',
          )}
          onBlur={this.handleTextBlur('signup', 'username')}
        />
        <FormCard.Field
          label="Password *"
          id="signup-password"
          value={signupPasswordValue}
          error={signupPasswordError}
          onChange={this.handleTextChange(
            'signup',
            'password',
          )}
          onBlur={this.handleTextBlur('signup', 'password')}
        />
        <FormCard.Field
          label="Confirm Password *"
          id="signup-confirm-password"
          value={signupConfirmPasswordValue}
          error={signupConfirmPasswordError}
          onChange={this.handleTextChange(
            'signup',
            'confirmPassword',
          )}
          onBlur={this.handleTextBlur(
            'signup',
            'confirmPassword',
          )}
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

    const tabs = [
      { content: signinMarkup, tab: 'Sign in' },
      { content: signupMarkup, tab: 'Sign up' },
    ];

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

function validate() {}

{
  /* <div
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
<Spinner size="large" /> */
}
