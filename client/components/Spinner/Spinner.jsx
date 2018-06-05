import React from 'react';
import { classNames } from '../../utils';
import * as styles from './Spinner.scss';

function Spinner({ size }) {
  return (
    <span className={size && styles[`${size}Spinner`]}>
      <span className={styles.Spinner} />
    </span>
  );
}

export default Spinner;
