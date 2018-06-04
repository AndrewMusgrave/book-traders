import React from 'react';
import { Link as RegularLink } from '../../../../components';
import * as styles from './Link.scss';

function Link({ children, href }) {
  return (
    <RegularLink href={href} className={styles.Link}>
      {children}
    </RegularLink>
  );
}

export default Link;
