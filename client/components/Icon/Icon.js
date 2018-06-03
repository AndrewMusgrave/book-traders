import React from 'react';
import { Link } from '../../components';
import { classNames } from '../../utils';
import * as styles from './Icon.scss';

import {
  email,
  facebook,
  instagram,
  phone,
  tumblr,
  twitter,
} from './Icons';

const ICONS = {
  email,
  facebook,
  instagram,
  phone,
  tumblr,
  twitter,
};

function Icon({ href, src }) {
  const icon = ICONS[src];
  return (
    <Link href={href}>
      <div className={styles.svgWrapper}>{icon}</div>
    </Link>
  );
}

export default Icon;
