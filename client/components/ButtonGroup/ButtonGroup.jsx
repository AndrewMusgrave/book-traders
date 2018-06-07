import React from 'react';
import * as styles from './ButtonGroup.scss';

function ButtonGroup({ children }) {
  return (
    <div className={styles.ButtonGroup}>{children}</div>
  );
}

export default ButtonGroup;
