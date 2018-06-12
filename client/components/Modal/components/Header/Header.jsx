import React from 'react';
import * as styles from './Header.scss';

function Header({ children }) {
  return <div className={styles.Header}>{children}</div>;
}

export default Header;
