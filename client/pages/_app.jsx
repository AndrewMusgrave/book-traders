import React from 'react';
import App, { Container as AppContainer } from 'next/app';
import { Frame } from '../components';

export default class MyApp extends App {
  handleSearch() {
    console.log('searched');
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <AppContainer>
        <Frame>
          <Component {...pageProps} />
        </Frame>
      </AppContainer>
    );
  }
}
