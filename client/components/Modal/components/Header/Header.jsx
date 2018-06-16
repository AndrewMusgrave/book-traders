import React from 'react';
import { classNames } from '../../../../utils';
import Icon from '../../../Icon';
import * as styles from './Header.scss';

function Header({
  title,
  children,
  align = 'center',
  close,
}) {
  const headerClassName = classNames(
    styles.header,
    styles[`${align}Text`],
  );

  const closeMarkup = close && (
    <div className={styles.close}>
      <Icon src="close" />
    </div>
  );

  return (
    <>
      <h3 className={headerClassName}>{title}</h3>
      {closeMarkup}
    </>
  );
}

export default Header;
