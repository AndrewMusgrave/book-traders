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
  close,
} from './Icons';

const ICONS = {
  email,
  facebook,
  instagram,
  phone,
  tumblr,
  twitter,
  close,
};

function Icon({ href, src }) {
  const icon = ICONS[src];
  console.log(icon);
  return href ? (
    <Link href={href}>
      <div className={styles.svgWrapper}>{icon}</div>
    </Link>
  ) : (
    <div className={styles.svgWrapper}>{icon}</div>
  );
}

export default Icon;
