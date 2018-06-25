import React from 'react';
import Link from '../../../Link';
import { classNames } from '../../../../utils';
import * as styles from './Brand.scss';

function Brand({ children, href, wrap }) {
  const brandClassName = classNames(
    styles.Brand,
    wrap && styles.brandWrap,
  );

  return (
    <header className={brandClassName}>
      <Link className={styles.Link} href={href}>
        {children}
      </Link>
    </header>
  );
}

export default Brand;
