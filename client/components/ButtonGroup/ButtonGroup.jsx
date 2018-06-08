import React from 'react';
import { Button } from '../../components';
import { classNames } from '../../utils';
import * as styles from './ButtonGroup.scss';

function ButtonGroup({ primary, secondary, fullWidth }) {
  const buttonGroupClassName = classNames(
    styles.ButtonGroup,
    fullWidth && styles.fullWidth,
  );

  return (
    <div className={buttonGroupClassName}>
      <Button {...secondary}>{secondary.content}</Button>
      <Button {...primary}>{primary.content}</Button>
    </div>
  );
}

export default ButtonGroup;
