import React, { Component } from 'react';
import { classNames } from '../../utils';
import Field from './components/Field';
import Link from './components/Link';
import * as styles from './FormCard.scss';

class FormCard extends Component {
  static Field = Field;
  static Link = Link;

  render() {
    const {
      children,
      header,
      blend = false,
      align = 'center',
    } = this.props;
    const headerMarkup = header && (
      <h2 className={styles.header}>{header}</h2>
    );

    const formCardClassName = classNames(
      styles.FormCard,
      styles[`${align}Text`],
      !blend && styles.card,
    );

    const formElements = React.Children.toArray(children);
    const linkMarkup = [];

    for (let i = 0; i < formElements.length; i++) {
      if (
        formElements[i].type &&
        formElements[i].type.displayName === 'Link'
      ) {
        linkMarkup.push(formElements.splice(i, 1));
      }
    }

    return (
      <div className={formCardClassName}>
        {headerMarkup}
        <form className={styles.form}>{formElements}</form>
        {linkMarkup}
      </div>
    );
  }
}

export default FormCard;
