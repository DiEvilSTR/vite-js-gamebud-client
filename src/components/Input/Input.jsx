import classnames from 'classnames';

import './Input.css';

export function Input({ className: _className, ...restProps }) {
  const className = classnames('input', _className);

  return <input {...restProps} className={className} />;
}
