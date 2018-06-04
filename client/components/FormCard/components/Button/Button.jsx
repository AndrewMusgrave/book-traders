import React from 'react';
import { classNames } from '../../../../utils';
import * as styles from './Button.scss';

function Button({ children }) {
  const buttonClassName = classNames(styles.Button);

  return (
    <button className={buttonClassName} type="submit">
      {children}
    </button>
  );
}

export default Button;
