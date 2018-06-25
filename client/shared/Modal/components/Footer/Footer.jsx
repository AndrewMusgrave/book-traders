import React from 'react';
import Button from '../../../Button';
import * as styles from './Footer.scss';

function Footer({ primary, secondary, children }) {
  const primaryMarkup = primary && (
    <div className={styles.buttonWrapper}>
      <Button {...primary}>{primary.content}</Button>
    </div>
  );

  const secondaryMarkup = secondary && (
    <div className={styles.buttonWrapper}>
      <Button {...secondary}>{secondary.content}</Button>
    </div>
  );

  return (
    <div className={styles.Footer}>
      {children}
      <div className={styles.buttonGroup}>
        {secondaryMarkup}
        {primaryMarkup}
      </div>
    </div>
  );
}

export default Footer;
