import React from 'react';
import App, { Container } from 'next/app';
import { Layout, Nav } from '../components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import store from '../store';

import '../styles/globals.scss';

export default class MyApp extends App {
  handleSearch() {
    console.log('searched');
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Layout>
            <Nav
              onSearch={this.handleSearch}
              brand={{
                title: 'Book Traders',
                route: '/book-trading',
              }}
            >
              <Nav.Brand href="/">Book Traders</Nav.Brand>
              <Nav.Collapse>
                <Nav.Routes
                  routes={[
                    {
                      name: 'My Books',
                      to: '/my-books',
                    },
                    {
                      name: 'Profile',
                      to: '/profile',
                    },
                    {
                      name: 'Sign Out',
                      to: '/signout',
                    },
                  ]}
                />
                <Nav.Search placeHolder="Search ..." />
              </Nav.Collapse>
            </Nav>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}
