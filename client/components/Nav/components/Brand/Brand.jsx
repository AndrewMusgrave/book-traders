import React from 'react';
import Link from '../../../Link';
import * as styles from './Brand.scss';

function Brand({ children, href }) {
  return (
    <header className={styles.Brand}>
      <Link className={styles.Link} href={href}>
        {children}
      </Link>
    </header>
  );
}

export default Brand;
