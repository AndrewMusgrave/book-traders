import * as React from 'react';
import {classNames} from '../../utils'; 
import * as styles from './Container.scss';

export default function({ children, loose }) {
    const className = classNames(styles.Container, loose && styles.loose)

  return <div className={className}>{children}</div>;
}
