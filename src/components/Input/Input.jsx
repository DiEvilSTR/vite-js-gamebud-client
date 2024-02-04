import './Input.css';

import classnames from 'classnames';
import { useId } from 'react';

import { RawInput } from './RawInput';

export function Input({ className: _className, id: _id, label, ...restProps }) {
  const className = classnames('input', _className);

  const genericId = useId();
  const id = _id || genericId;

  return (
    <div className="input-wrapper">
      {label && (
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
      )}

      <RawInput {...restProps} className={className} id={id} />
    </div>
  );
}
