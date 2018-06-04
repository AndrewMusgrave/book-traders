import React, { Component, Fragment } from 'react';
import * as actions from '../actions';
import { Container, TextContainer } from '../components';
import { connect } from 'react-redux';

function Faq() {
  return (
    <Container.Sub loose>
      <TextContainer>
        <h2>Frequenty Asked Questions</h2>
        <h3>What is Book Traders?</h3>
        <p>
          Book Traders is an app build for fun. Is it not a
          real platform but is fully functional. The extra
          pages have been added for effect and webpage
          content.
        </p>
        <h3>How does Book Traders work?</h3>
        <p>
          Feel free browse books. Create an account if you
          like and add books to your personal account. Once
          you’re on an account you’ll be able to request
          trades.
        </p>
        <h3>Is book traders real?</h3>
        <p>
          No Book Traders is not real. This content has been
          added instead of Lorem Upsum, please have fun
          progressing through all the content.
        </p>
        <h3>Does book traders have a physical location?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim
          veniam...Book Traders does not and will not have a
          physical location.
        </p>
        <h3>How do we contact Book Traders?</h3>
        <p>
          You may contact the owner is any questions or
          concerns.
        </p>
      </TextContainer>
    </Container.Sub>
  );
}

export default Faq;
