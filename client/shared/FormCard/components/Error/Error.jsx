import React from 'react';
import { classNames } from '../../../../utils';
import { Danger } from '../../../../shared';
import * as styles from './Error.scss';

function Error({ children }) {
  return (
    <div className={styles.Error}>
      <Danger>{children}</Danger>
    </div>
  );
}

export default Error;
