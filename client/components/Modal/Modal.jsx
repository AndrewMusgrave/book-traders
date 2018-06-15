import React, { Component } from 'react';
import { Portal, Container } from '../../components';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import * as styles from './Modal.scss';

class Modal extends Component {
  static Header = Header;
  static Section = Section;
  static Footer = Footer;

  render() {
    const { children } = this.props;
    return (
      <Portal prefix="modal">
        <div className={styles.Modal}>
          <Container size="small"><div className={styles.body}>{children}</div></Container>
        </div>
      </Portal>
    );
  }
}

export default Modal;
