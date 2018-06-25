import React from 'react';
import * as styles from './Section.scss';

function Section({ children }) {
  return <div className={styles.Section}>{children}</div>;
}

export default Section;
