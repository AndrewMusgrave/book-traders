import * as React from 'react';
import * as styles from './Header.scss';

function Header({ children }) {
  return (
    <header className={styles.Header}>{children}</header>
  );
}

export default Header;
