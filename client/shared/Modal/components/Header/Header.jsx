import React from 'react';
import { classNames } from '../../../../utils';
import Icon from '../../../Icon';
import * as styles from './Header.scss';

function Header({
  title,
  children,
  align = 'left',
  close,
  onClose,
}) {
  const headerClassName = classNames(
    styles.header,
    styles[`${align}Text`],
  );

  const closeMarkup = close && (
    <div className={styles.close} onClick={onClose}>
      <Icon src="close" secondary size="large" />
    </div>
  );

  return (
    <header className={styles.headerWrapper}>
      <h3 className={headerClassName}>{title}</h3>
      {closeMarkup}
    </header>
  );
}

export default Header;
