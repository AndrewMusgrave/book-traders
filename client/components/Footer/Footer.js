import React, { Component } from 'react';
import List from './components/List';
import Section from './components/Section';
import Icons from './components/Icons';
import * as styles from './Footer.scss';

class Footer extends Component {
  static Section = Section;
  static List = List;
  static Icons = Icons;

  render() {
    const { children } = this.props;
    return (
      <footer className={styles.Footer}>{children}</footer>
    );
  }
}

export default Footer;
