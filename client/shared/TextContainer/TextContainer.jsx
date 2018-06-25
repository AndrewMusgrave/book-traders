import React from 'react';
import { classNames } from '../../utils';
import * as styles from './TextContainer.scss';

function TextContainer({ children, align = 'center' }) {
  const textContainerClassName = classNames(
    styles.TextContainer,
    styles[`${align}TextContainer`],
  );

  return (
    <div className={textContainerClassName}>{children}</div>
  );
}

export default TextContainer;
