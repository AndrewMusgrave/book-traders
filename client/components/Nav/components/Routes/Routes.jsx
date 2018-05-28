import React from 'react';
import { Link } from '../../../../components';
import * as styles from './Routes.scss';

function Routes({ routes }) {
  const routeMarkup =
    routes &&
    routes.map((route, idx) => {
      const { name, to } = route;
      return (
        <li className={styles.Item} key={idx}>
          <Link className={styles.Link} href={to}>
            {name}
          </Link>
        </li>
      );
    });

  return <ul className={styles.List}>{routeMarkup}</ul>;
}

export default Routes;
