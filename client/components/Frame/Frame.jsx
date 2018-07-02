import React from 'react';
import {
  Layout,
  Nav,
  Footer,
  Container,
} from '../../shared';
import { signupUser, signinUser } from '../../actions';
import { bindActionCreators } from 'redux';
import { SignInUpModal } from '../../components';
import '../../styles/globals.scss';
import '../../styles/variables.scss';
import { connect } from 'react-redux';

class Frame extends React.Component {
  state = {
    modalOpen: false,
  };

  handleSearch() {
    console.log('searched');
  }

  toggleModal = () => {
    this.setState(({ modalOpen }) => ({
      modalOpen: !modalOpen,
    }));
  };

  render() {
    console.log(this.props);
    const { modalOpen } = this.state;
    const { Component, pageProps, children } = this.props;
    return (
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
                  name: 'Signin',
                  onClick: this.toggleModal,
                },
                {
                  name: 'Browse',
                  to: '/',
                },
              ]}
            />
            <Nav.Search placeHolder="Search ..." />
          </Nav.Section>
        </Nav>
        <Container>
          {children}
          <SignInUpModal
            open={modalOpen}
            onBackDrop={this.toggleModal}
            toggleModal={this.toggleModal}
          />
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
                {
                  src: 'facebook',
                  href: 'facebook.com',
                },
                {
                  src: 'email',
                  href: 'mailto:test@gmail.com',
                },
                {
                  src: 'instagram',
                  href: 'instagram.com',
                },
                {
                  src: 'phone',
                  href: 'mailto:6137777777',
                },
                { src: 'twitter', href: 'twitter.com' },
                { src: 'tumblr', href: 'tumblr.com' },
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
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      signinUser,
      signupUser,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(
  Frame,
);
