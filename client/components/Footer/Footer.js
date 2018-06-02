import React from 'react';
import * as styles from './Footer.scss';

function Footer({ children }) {
  return (
    <footer className={styles.Footer}>{children}</footer>
  );
}

export default Footer;
