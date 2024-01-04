import classnames from 'classnames';

import {RawInput} from './RawInput';

import './Input.css';

export function Input({ className: _className, ...restProps }) {
  const className = classnames('input', _className);

  return <RawInput {...restProps} className={className} />;
}
