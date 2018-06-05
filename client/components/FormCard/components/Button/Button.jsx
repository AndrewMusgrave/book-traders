import React from 'react';
import { classNames } from '../../../../utils';
import { Spinner } from '../../../../components';
import * as styles from './Button.scss';

/**
 * destructive
 * loading
 * submit
 * onClick
 */

function Button({ children, loading }) {
  const buttonClassName = classNames(styles.Button);

  const loadingMarkup = loading && <Spinner />;

  return (
    <button className={buttonClassName} type="submit">
      {loadingMarkup}
      {children}
    </button>
  );
}

export default Button;
