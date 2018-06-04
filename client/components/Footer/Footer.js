import React, { Component } from 'react';
import List from './components/List';
import Section from './components/Section';
import { EventListener } from '../../components';
import Icons from './components/Icons';
import * as styles from './Footer.scss';

const topMargin = 30;

class Footer extends Component {
  static Section = Section;
  static List = List;
  static Icons = Icons;

  componentDidMount() {
    this.handleResize();
  }

  setNode = node => {
    this.node = node;
  };

  handleResize = () => {
    if (this.node == null) {
      return;
    }
    const next = document.getElementById('__next');
    const height = this.node.scrollHeight;
    if (next) {
      next.lastChild.style.paddingBottom = `${height +
        topMargin}px`;
    }
  };

  render() {
    const { children } = this.props;
    return (
      <footer ref={this.setNode} className={styles.Footer}>
        <EventListener
          event="resize"
          handler={this.handleResize}
        />
        {children}
      </footer>
    );
  }
}

export default Footer;
