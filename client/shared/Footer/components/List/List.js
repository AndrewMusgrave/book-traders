import React, { Fragment } from 'react';
import Link from '../../../Link';
import { classNames } from '../../../../utils';
import * as styles from './List.scss';

function List({ title, items, direction = 'column' }) {
  const listClassName = classNames(
    styles.list,
    direction === 'row' && styles.rowList,
  );

  const titleMarkup = title && (
    <Fragment>
      <h4 className={styles.header}>{title}</h4>
      <hr className={styles.divider} />
    </Fragment>
  );

  return (
    <div className={styles.List}>
      {titleMarkup}
      <ul className={listClassName}>
        {items &&
          items.length > 0 &&
          items.map((item, ind) => (
            <li key={ind} className={styles.listItem}>
              <Link
                className={styles.listLink}
                href={item.href}
              >
                {item.content}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default List;
