import React from 'react';
import * as styles from './TextContainer.scss';

function TextContainer({ children }) {
  return (
    <div className={styles.TextContainer}>{children}</div>
  );
}

export default TextContainer;
