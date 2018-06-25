import React, { Component, Fragment } from 'react';
import { classNames } from '../../../../utils';
import Icon from '../../../Icon';
import * as styles from './Section.scss';

function Section({
  children,
  tight,
  justify = 'center',
  direction = 'row',
}) {
  const sectionClassName = classNames(
    styles.Section,
    tight && styles.tight,
    justify && styles[`${justify}Section`],
    direction && styles[`${direction}Direction`],
  );

  return <div className={sectionClassName}>{children}</div>;
}

export default Section;
