import React, { Component } from 'react';
import {
  Modal,
  FormCard,
  ButtonGroup,
  Tabs,
} from '../../shared';

const valueNotProvidedErrorMessages = {
  signin: {
    username: 'Please provide a username. ',
    password: 'Please prvovide a password. ',
  },
  signup: {
    username: 'A username is required. ',
    password: 'A password is required. ',
    confirmPassword: 'A password is required. ',
  },
};
const matchPasswordError = 'Your passwords must match';

const defaultErrors = {
  signin: { username: '', password: '' },
  signup: {
    username: '',
    password: '',
    confirmPassword: '',
  },
};

class SignInUpModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0,
      values: {
        signin: { username: '', password: '' },
        signup: {
          username: '',
          password: '',
          confirmPassword: '',
        },
      },
      errors: {
        signin: { username: [''], password: [''] },
        signup: {
          username: [''],
          password: [''],
          confirmPassword: [''],
        },
      },
      isTouched: {
        signin: { username: false, password: false },
        signup: {
          username: false,
          password: false,
          confirmPassword: false,
        },
      },
    };
  }

  handeTabChange = selected => {
    this.setState({ selected });
  };

  handleTextChange = (type, field) => e => {
    const values = this.state.values; //.[type];
    const value = e.target.value;
    values[type][field] = value;
    this.handleTextValidations(type, field, value);
    this.setState({ values });
  };

  handleTextFocus = (type, field) => e => {
    const isTouched = this.state.isTouched;
    isTouched[type][field] = true;
    this.setState({ isTouched });
  };

  handleTextBlur = (type, field) => e => {
    const value = this.state.values[type][field];
    const errors = this.runValidation(type);
    this.setState({ errors });
  };

  handleTextValidations = (type, field, value) => {
    this.runValidation(type);
  };

  runValidation(type) {
    const values = this.state.values[type];
    const isTouched = this.state.isTouched[type];
    const errors = defaultErrors;

    for (const field in values) {
      if (isTouched[field]) {
        errors[type][field] = this.validate(
          type,
          field,
          values[field],
        );
      }
    }

    return errors;
  }

  validate(type, field, value) {
    const errors = [];

    if (type === 'signin') {
      if (field === 'username') {
        if (!valueProvided(value)) {
          errors.push(
            valueNotProvidedErrorMessages.signin.username,
          );
        }
      }
      if (field === 'password') {
        if (!valueProvided(value)) {
          errors.push(
            valueNotProvidedErrorMessages.signin.password,
          );
        }
      }
    }

    if (type === 'signup') {
      if (field === 'username') {
        if (!valueProvided(value)) {
          errors.push(
            valueNotProvidedErrorMessages.signup.username,
          );
        }
      }

      if (field === 'password') {
        if (!valueProvided(value)) {
          errors.push(
            valueNotProvidedErrorMessages.signup.password,
          );
        }
      }

      if (field === 'confirmPassword') {
        if (!valueProvided(value)) {
          errors.push(
            valueNotProvidedErrorMessages.signup
              .confirmPassword,
          );
        }

        const password = this.state.values.signup.password;
        if (value !== password) {
          errors.push(matchPasswordError);
        }
      }
    }

    return errors;
  }

  render() {
    const {
      selected,
      values: {
        signin: {
          username: signinUsernameValue,
          password: signinPasswordValue,
        },
        signup: {
          username: signupUsernameValue,
          password: signupPasswordValue,
          confirmPassword: signupConfirmPasswordValue,
        },
      },
      errors: {
        signin: {
          username: signinUsernameError,
          password: signinPasswordError,
        },
        signup: {
          username: signupUsernameError,
          password: signupPasswordError,
          confirmPassword: signupConfirmPasswordError,
        },
      },
    } = this.state;
    const { open, onBackDrop, toggleModal } = this.props;

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
          onFocus={this.handleTextFocus(
            'signin',
            'username',
          )}
        />
        <FormCard.Field
          label="Password *"
          id="sigin-password"
          type="password"
          value={signinPasswordValue}
          error={signinPasswordError}
          onChange={this.handleTextChange(
            'signin',
            'password',
          )}
          onBlur={this.handleTextBlur('signin', 'password')}
          onFocus={this.handleTextFocus(
            'signin',
            'password',
          )}
        />
        <ButtonGroup
          primary={{ content: 'Sign in', fullWidth: true }}
          secondary={{
            content: 'Close',
            fullWidth: true,
            danger: true,
            onClick: toggleModal,
          }}
        />
        <FormCard.Link href="/">
          Need an account? Sign up.
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
          onFocus={this.handleTextFocus(
            'signup',
            'username',
          )}
        />
        <FormCard.Field
          label="Password *"
          id="signup-password"
          type="password"
          value={signupPasswordValue}
          error={signupPasswordError}
          onChange={this.handleTextChange(
            'signup',
            'password',
          )}
          onBlur={this.handleTextBlur('signup', 'password')}
          onFocus={this.handleTextFocus(
            'signup',
            'password',
          )}
        />
        <FormCard.Field
          label="Confirm Password *"
          id="signup-confirm-password"
          type="password"
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
          onFocus={this.handleTextFocus(
            'signup',
            'confirmPassword',
          )}
        />
        <ButtonGroup
          primary={{ content: 'Sign up', fullWidth: true }}
          secondary={{
            content: 'Close',
            fullWidth: true,
            danger: true,
            onClick: toggleModal,
          }}
        />
        <FormCard.Link href="/">
          Forgot your signin information? Click here.
        </FormCard.Link>
      </FormCard>
    );

    const tabs = [
      { content: signinMarkup, tab: 'Sign in' },
      { content: signupMarkup, tab: 'Sign up' },
    ];

    return (
      <Modal open={open} backDrop onBackDrop={onBackDrop}>
        <Tabs
          tabs={tabs}
          selected={selected}
          onChange={this.handeTabChange}
        />
      </Modal>
    );
  }
}

function valueProvided(v) {
  return Boolean(v);
}

export default SignInUpModal;
