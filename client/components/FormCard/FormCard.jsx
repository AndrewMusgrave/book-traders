import React, { Component } from 'react';
import Field from './components/Field';
import ButtonGroup from './components/ButtonGroup';
import Button from './components/Button';
import Link from './components/Link';
import * as styles from './FormCard.scss';

class FormCard extends Component {
  static Field = Field;
  static ButtonGroup = ButtonGroup;
  static Button = Button;
  static Link = Link;

  render() {
    const { children, header } = this.props;
    const headerMarkup = header && (
      <h2 className={styles.header}>{header}</h2>
    );

    return (
      <div className={styles.FormCard}>
        {headerMarkup}
        <form className={styles.form}>{children}</form>
      </div>
    );
  }
}

export default FormCard;
