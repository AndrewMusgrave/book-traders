import React from 'react';
import { classNames } from '../../../../utils';
import * as styles from './Sub.scss';

function Sub({ children, loose = false }) {
  const subClassName = classNames(
    styles.Sub,
    loose && styles.loose,
  );

  return <div className={subClassName}>{children}</div>;
}

export default Sub;
