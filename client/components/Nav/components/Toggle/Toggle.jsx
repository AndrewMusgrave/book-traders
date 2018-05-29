import React from 'react';
import Link from '../../../Link';
import { classNames } from '../../../../utils';
import * as styles from './Toggle.scss';

function Toggle({ open, small = true }) {
  const wrapperClassName = classNames(
    styles.ToggleWrapper,
    small && styles.smallCollapse,
  );

  const toggleClassName = classNames(
    styles.Toggle,
    open && styles.toggled,
  );

  return (
    <div className={wrapperClassName}>
      <div className={toggleClassName}>
        <div className={styles.top} />
        <div className={styles.middle} />
        <div className={styles.bottom} />
      </div>
    </div>
  );
}

export default Toggle;
