import React, { Component, Fragment } from 'react';
import { classNames } from '../../../../utils';
import { Icon } from '../../../../shared';
import * as styles from './Icons.scss';

function Icons({ icons }) {
  const iconsMarkup =
    icons &&
    icons.map((icon, ind) => (
      <Icon
        key={ind}
        href={icon.href}
        src={icon.src}
        media
      />
    ));

  return <div className={styles.Icons}>{iconsMarkup}</div>;
}

export default Icons;
