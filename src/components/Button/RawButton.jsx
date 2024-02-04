import './RawButton.css';

import classnames from 'classnames';

import { BUTTON_TYPE } from './constants';

export function RawButton({
  children,
  className: _className,
  disabled: _disabled,
  pending,
  type: _type,
  ...restProps
}) {
  const className = classnames('raw-btn', _className);
  const disabled = _disabled || pending;
  const type = _type || BUTTON_TYPE.button;

  return (
    <button {...restProps} className={className} disabled={disabled} type={type}>
      {pending ? <>&nbsp;</> : children}
    </button>
  );
}
