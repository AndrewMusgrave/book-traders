import React from 'react';
import * as styles from './Footer.scss';

function Footer({ children }) {
  return <div className={styles.Footer}>{children}</div>;
}

export default Footer;
