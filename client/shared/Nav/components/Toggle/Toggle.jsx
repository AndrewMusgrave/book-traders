import React, { Component } from 'react';
import Link from '../../../Link';
import { classNames } from '../../../../utils';
import { withContext } from '../Context';
import * as styles from './Toggle.scss';

class Toggle extends Component {
  componentDidMount() {
    const {
      defaultToggle = false,
      context: { setToggle },
    } = this.props;
    if (defaultToggle) {
      setToggle(defaultToggle);
    }
  }

  render() {
    const {
      open,
      small = true,
      context: { onToggle },
    } = this.props;
    const wrapperClassName = classNames(
      styles.ToggleWrapper,
      small && styles.smallCollapse,
    );

    const toggleClassName = classNames(
      styles.Toggle,
      open && styles.toggled,
    );
    return (
      <div onClick={onToggle} className={wrapperClassName}>
        <div className={toggleClassName}>
          <div className={styles.top} />
          <div className={styles.middle} />
          <div className={styles.bottom} />
        </div>
      </div>
    );
  }
}

export default withContext(Toggle);
