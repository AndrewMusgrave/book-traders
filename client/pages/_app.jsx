import React from 'react';
import App, { Container as AppContainer } from 'next/app';
import {
  Layout,
  Nav,
  Footer,
  Container,
} from '../components';
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
      <AppContainer>
        <Provider store={store}>
          <Layout>
            <Nav
              onSearch={this.handleSearch}
              brand={{
                title: 'Book Traders',
                route: '/book-trading',
              }}
            >
              <Nav.Section>
                <Nav.Brand href="/">Book Traders</Nav.Brand>
                <Nav.Toggle />
              </Nav.Section>
              <Nav.Section collapse fill reverse>
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
              </Nav.Section>
            </Nav>
            <Container>
              <Component {...pageProps} />
            </Container>
            <Footer>
              <Footer.Section>
                <Footer.List
                  title="USER CARE"
                  items={[
                    { content: 'FAQ', href: '/faq' },
                    {
                      content: 'CONTACT',
                      href: '/contact',
                    },
                    {
                      content: 'SHIPPING',
                      href: '/shipping',
                    },
                  ]}
                />
              </Footer.Section>
              <Footer.Section>
                <Footer.Icons
                  icons={[
                    { src: 'facebook' },
                    { src: 'email' },
                    { src: 'instagram' },
                    { src: 'phone' },
                    { src: 'twitter' },
                    { src: 'tumblr' },
                  ]}
                />
              </Footer.Section>
              <Footer.Section direction="column">
                <Footer.Section tight>
                  COPY RIGHT ANDREW MUSGRAVE 2017
                </Footer.Section>
                <Footer.Section tight>
                  <Footer.List
                    direction="row"
                    items={[
                      {
                        content: 'TERMS & CONDITIONS',
                        href: '/terms-and-conditions',
                      },
                      {
                        content: 'PRIVACY',
                        href: '/privacy',
                      },
                      {
                        content: 'LEGAL NOTICE',
                        href: '/legal-notice',
                      },
                    ]}
                  />
                </Footer.Section>
              </Footer.Section>
            </Footer>
          </Layout>
        </Provider>
      </AppContainer>
    );
  }
}
