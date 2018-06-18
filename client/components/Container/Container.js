import React, { Component } from 'react';
import Sub from './components/Sub';
import { classNames } from '../../utils';
import * as styles from './Container.scss';

class Container extends Component {
  static Sub = Sub;

  render() {
    const {
      children,
      loose,
      size = 'extraLarge',
    } = this.props;
    const className = classNames(
      styles.Container,
      loose && styles.loose,
      styles[`${size}Container`],
    );

    return <div className={className}>{children}</div>;
  }
}

export default Container;
