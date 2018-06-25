import React from 'react';
import { Danger } from '../../../../shared';
import { classNames } from '../../../../utils';
import * as styles from './Field.scss';

function Field({
  label,
  hideLabel = false,
  value,
  error,
  onChange,
  multi,
  disabled,
  id,
  name,
  placeholder,
  type,
  onBlur,
  onFocus,
}) {
  const Element = multi ? 'textarea' : 'input';

  const labelMarkup = label &&
    !hideLabel && (
      <label htmlFor={id} className={styles.header}>
        {label}
      </label>
    );

  const errorMarkup = error && <Danger>{error}</Danger>;

  const fieldClassName = classNames(
    styles.field,
    multi && styles.multi,
  );

  return (
    <fieldset className={styles.FieldWrapper}>
      {labelMarkup}
      <Element
        value={value}
        onChange={onChange}
        className={fieldClassName}
        rows={multi}
        disabled={disabled}
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {errorMarkup}
    </fieldset>
  );
}

export default Field;
