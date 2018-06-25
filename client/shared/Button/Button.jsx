import React from 'react';
import { classNames } from '../../utils';
import Danger from '../Danger';
import Spinner from './components/Spinner';
import * as styles from './Button.scss';

/**
 * danger
 * loading
 * submit
 * onClick
 * size
 */

function Button({
  children,
  danger,
  loading,
  submit,
  size = 'medium',
  onClick,
  fullWidth,
  rounded,
}) {
  const buttonClassName = classNames(
    styles.Button,
    styles[`${size}Button`],
    danger && styles.danger,
    fullWidth && styles.fullWidth,
    rounded && styles.rounded,
  );

  const loadingMarkup = loading && <Spinner />;

  const type = submit ? 'submit' : 'button';

  return (
    <button
      className={buttonClassName}
      type={type}
      onClick={onClick}
    >
      {loadingMarkup || children}
    </button>
  );
}

export default Button;
