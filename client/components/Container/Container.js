import React, { Component } from 'react';
import Sub from './components/Sub';
import { classNames } from '../../utils';
import * as styles from './Container.scss';

class Container extends Component {
  static Sub = Sub;

  render() {
    const { children, loose } = this.props;
    const className = classNames(
      styles.Container,
      loose && styles.loose,
    );

    return <div className={className}>{children}</div>;
  }
}

export default Container;
