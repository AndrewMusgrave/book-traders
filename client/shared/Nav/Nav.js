import React, { Component } from 'react';
import { classNames } from '../../utils';
import { Container } from '../../shared';
import { NavProvider } from './components/Context';
import Brand from './components/Brand';
import Routes from './components/Routes';
import Search from './components/Search';
import Section from './components/Section';
import Toggle from './components/Toggle';

import * as styles from './Nav.scss';

class Nav extends Component {
  static Brand = Brand;
  static Routes = Routes;
  static Search = Search;
  static Section = Section;
  static Toggle = Toggle;

  render() {
    const { children, fixed } = this.props;
    const navClassName = classNames(
      styles.Nav,
      fixed && styles.fixedNav,
    );

    return (
      <NavProvider>
        <nav className={styles.Nav}>
          <Container>
            <div className={styles.wrapper}>{children}</div>
          </Container>
        </nav>
      </NavProvider>
    );
  }
}

export default Nav;
