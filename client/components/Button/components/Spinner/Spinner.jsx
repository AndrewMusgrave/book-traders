import React from 'react';
import * as styles from './Spinner.scss';

function Spinner({}) {
  return (
    <div className={styles.Spinner}>
      <div className={styles.circle} />
      <div className={styles.circle} />
      <div className={styles.circle} />
      <div className={styles.circle} />
    </div>
  );
}

export default Spinner;
