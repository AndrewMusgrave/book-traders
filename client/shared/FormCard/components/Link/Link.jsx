import React from 'react';
import { classNames } from '../../../../utils';
import { Link as RegularLink } from '../../../../shared';
import * as styles from './Link.scss';

function Link({ children, href }) {
  const linkClassName = classNames(styles.Link);

  return (
    <RegularLink href={href} className={linkClassName}>
      {children}
    </RegularLink>
  );
}

export default Link;
