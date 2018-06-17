import React, { Component } from 'react';
import { Portal, Container } from '../../components';
import { classNames } from '../../utils';
import EventListener from '../EventListener';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import * as styles from './Modal.scss';

class Modal extends Component {
  static Header = Header;
  static Section = Section;
  static Footer = Footer;

  handleBackDrop = e => {
    const { onBackDrop } = this.props;

    if (e.target === this.node) {
      onBackDrop();
    }
  };

  setNode = n => {
    this.node = n;
  };

  render() {
    const {
      children,
      backDrop,
      open,
      onBackDrop,
    } = this.props;
    const modalClassName = classNames(
      styles.Modal,
      backDrop && styles.backDrop,
    );

    const bodyMarkup = open && (
      <div className={modalClassName} ref={this.setNode}>
        <EventListener
          event="click"
          handler={this.handleBackDrop}
        />
        <Container size="small">
          <div className={styles.body}>{children}</div>
        </Container>
      </div>
    );

    return <Portal prefix="modal">{bodyMarkup}</Portal>;
  }
}

export default Modal;
