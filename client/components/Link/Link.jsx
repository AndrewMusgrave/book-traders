import React from 'react';
import NextLink from 'next/link';
import { classNames } from '../../utils';
import * as styles from './Link.scss';

function Link({
  children,
  href,
  className,
  type,
  ...rest
}) {
  const linkClassName = classNames(
    styles.Link,
    type && styles[`${type}Link`],
    className,
  );
  return (
    <NextLink href={href}>
      <a {...rest} className={linkClassName}>
        {children}
      </a>
    </NextLink>
  );
}

export default Link;
