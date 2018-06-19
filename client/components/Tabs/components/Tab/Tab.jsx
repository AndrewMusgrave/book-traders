import React from 'react';
import { classNames } from '../../../../utils';
import * as styles from './Tab.scss';

function Tab({ children, selected, onClick, location }) {
  function handleClick() {
    onClick(location);
  }

  const tabContentClassName = classNames(
    styles.content,
    selected && styles.selected,
  );

  return (
    <div className={styles.Tab} onClick={handleClick}>
      <span className={tabContentClassName}>
        {children}
      </span>
    </div>
  );
}

export default Tab;
