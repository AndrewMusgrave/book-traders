import React from 'react';
import * as styles from './Danger.scss';

function Danger({ children }) {
  return <span className={styles.Danger}>{children}</span>;
}

export default Danger;
