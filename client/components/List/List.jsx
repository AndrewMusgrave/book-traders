import React from 'react';
import { classNames } from '../../utils';
import * as styles from './List.scss';

function List({ children, type = 'ul', variation }) {
  const listClassName = classNames(
    styles.List,
    variation && styles[`${variation}List`],
  );
  const Element = type === 'ul' ? 'ul' : 'ol';

  return (
    <Element className={listClassName}>{children}</Element>
  );
}

export default List;
