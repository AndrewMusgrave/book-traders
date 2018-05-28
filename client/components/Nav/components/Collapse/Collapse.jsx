import React, { Component } from 'react';
import Link from '../../../Link';
import * as styles from './Collapse.scss';

class Collapse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  render() {
    const { children } = this.props;
    return <div className={styles.Section}>{children}</div>;
  }
}

export default Collapse;
