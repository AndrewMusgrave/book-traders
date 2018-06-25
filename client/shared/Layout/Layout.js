import * as React from 'react';
import * as styles from './Layout.scss';

export default function({ children }) {
  return <div className={styles.Layout}>{children}</div>;
}
