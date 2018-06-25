import React, { Component, Fragment } from 'react';
import Link from '../../../Link';
import { withContext } from '../Context';
import { classNames } from '../../../../utils';
import * as styles from './Section.scss';

function Collapsible({
  collapse,
  open,
  children,
  fill,
  reverse,
}) {
  const collapsibleClassName = classNames(
    styles.Collapsible,
    open && styles.open,
    fill && styles.fill,
    !fill && styles.notFill,
    reverse && styles.reverse,
  );

  return collapse ? (
    <div className={collapsibleClassName}>{children}</div>
  ) : (
    <Fragment>{children}</Fragment>
  );
}

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  render() {
    const {
      children,
      fill,
      collapse,
      reverse,
      context: { open },
    } = this.props;

    const sectionClassName = classNames(
      styles.Section,
      collapse && styles.collapse,
      open && collapse && styles.open,
      reverse && styles.reverse,
      fill && styles.fill,
      !fill && styles.notFill,
    );

    return (
      <Collapsible
        collapse={collapse}
        open={open}
        fill={fill}
        reverse={reverse}
      >
        <div className={sectionClassName}>{children}</div>
      </Collapsible>
    );
  }
}

export default withContext(Section);
