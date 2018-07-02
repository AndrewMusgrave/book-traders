import React from 'react';
import App, { Container as AppContainer } from 'next/app';
import { Frame } from '../components';
import store from '../store';
import { Provider } from 'react-redux';

export default class MyApp extends App {
  handleSearch() {
    console.log('searched');
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <AppContainer>
        <Provider store={store}>
          <Frame>
            <Component {...pageProps} />
          </Frame>
        </Provider>
      </AppContainer>
    );
  }
}
