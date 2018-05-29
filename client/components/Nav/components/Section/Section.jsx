import React, { Component } from 'react';
import Link from '../../../Link';
import { classNames } from '../../../../utils';
import * as styles from './Section.scss';

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  render() {
    const { children, fill } = this.props;

    const sectionClassName = classNames(
      styles.Section,
      fill && styles.fill,
      !fill && styles.notFill,
    );

    return (
      <div className={sectionClassName}>{children}</div>
    );
  }
}

export default Section;
