import React from 'react';
import { Link } from '../../shared';
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

function Icon({
  href,
  src,
  secondary,
  size = 'medium',
  media,
}) {
  const iconClassName = classNames(
    styles.svgWrapper,
    secondary && styles.secondary,
    styles[`${size}Icon`],
    media && styles.media,
  );
  const icon = ICONS[src];
  return href ? (
    <Link href={href}>
      <div className={iconClassName}>{icon}</div>
    </Link>
  ) : (
    <div className={iconClassName}>{icon}</div>
  );
}

export default Icon;
