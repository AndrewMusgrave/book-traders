import React, { Component } from 'react';
import { Portal, Container } from '../../components';
import { classNames } from '../../utils';
import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';
import EventListener from '../EventListener';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import * as styles from './Modal.scss';

const slideInUp = {
  enter: classNames(styles.slideInUp, styles.entering),
  enterActive: classNames(styles.slideInUp, styles.entered),
  exit: classNames(styles.slideInUp, styles.exiting),
  exitActive: classNames(styles.slideInUp, styles.exited),
};

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
    const modalClassName = classNames(styles.Modal);

    const bodyClassName = classNames(
      styles.body,
      styles.slideInUp,
    );

    const backDropListener = onBackDrop &&
      open && (
        <EventListener
          event="click"
          handler={this.handleBackDrop}
        />
      );

    const bodyMarkup = open && (
      <CSSTransition timeout={750} classNames={slideInUp}>
        <div className={modalClassName} ref={this.setNode}>
          {backDropListener}
          <div className={styles.containerWrapper}>
            <Container size="small">
              <div className={bodyClassName}>
                {children}
              </div>
            </Container>
          </div>
        </div>
      </CSSTransition>
    );

    const backDropMarkup = open && (
      <div className={styles.test} />
    );

    return (
      <Portal prefix="modal">
        {backDropMarkup}
        <TransitionGroup component={null}>
          {bodyMarkup}
        </TransitionGroup>
      </Portal>
    );
  }
}

export default Modal;
