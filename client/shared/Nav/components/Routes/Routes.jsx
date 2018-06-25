import React from 'react';
import { Link } from '../../../../shared';
import * as styles from './Routes.scss';

function Routes({ routes }) {
  const routeMarkup =
    routes &&
    routes.map((route, ind) => {
      const { name, to } = route;
      return (
        <li className={styles.Item} key={ind}>
          <Link className={styles.Link} href={to}>
            {name}
          </Link>
        </li>
      );
    });

  return <ul className={styles.List}>{routeMarkup}</ul>;
}

export default Routes;
