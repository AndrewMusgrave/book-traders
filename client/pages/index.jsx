import React, { Component } from 'react';
import {
  Page,
  AppProvider,
  TextField,
  Form,
} from '@shopify/polaris';
import Header from '../shared/Header';
import { Button } from '../shared';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appName: '',
    };
  }

  handleTextChange = value => {
    this.setState({ appName: value });
  };

  render() {
    // console.log(this.props);
    const { appName } = this.state;
    // console.log(appName);
    // const {
    //   shopifyApp: { name },
    // } = this.props;

    return (
      <AppProvider>
        <Page title="Install">
          {/* <Header>Header</Header>
          <Form
            onSubmit={() => this.props.addAppName(appName)}
          >
            <TextField
              value={appName}
              onChange={this.handleTextChange}
            />
            <Button plain submit>
              {name}
            </Button>
          </Form> */}
          <Button> test </Button>
        </Page>
      </AppProvider>
    );
  }
}

const mapStateToProps = state => {
  const { auth } = state;
  // console.log(state);
  return {
    auth,
  };
};

export default connect(mapStateToProps, actions)(Main);
