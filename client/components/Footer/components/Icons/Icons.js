import React, { Component, Fragment } from 'react';
import { classNames } from '../../../../utils';
import { Icon } from '../../../../components';
import * as styles from './Icons.scss';

function Icons({ icons }) {
  const iconsMarkup =
    icons &&
    icons.map(icon => (
      <Icon href={icon.href} src={icon.src} />
    ));

  return <div className={styles.Icons}>{iconsMarkup}</div>;
}

export default Icons;
