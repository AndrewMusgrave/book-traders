import React from 'react';
import { classNames } from '../../../../utils';
import { Link } from '../../../../shared';
import * as styles from './Routes.scss';

function Routes({ routes }) {
  const routeMarkup =
    routes &&
    routes.map((route, ind) => {
      const { name, to, onClick } = route;
      const routeClassName = classNames(
        styles.Item,
        !to && styles.Link,
      );

      return to ? (
        <li
          className={routeClassName}
          key={ind}
          onClick={onClick}
        >
          <Link className={styles.Link} href={to}>
            {name}
          </Link>
        </li>
      ) : (
        <li
          className={routeClassName}
          key={ind}
          onClick={onClick}
        >
          {name}
        </li>
      );
    });

  return <ul className={styles.List}>{routeMarkup}</ul>;
}

export default Routes;
