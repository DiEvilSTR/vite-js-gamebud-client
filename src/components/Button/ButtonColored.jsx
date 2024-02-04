import './ButtonColored.css';

import classnames from 'classnames';

import { RawButton } from './RawButton';

export function ButtonColored({ className: _className, ...restProps }) {
  const className = classnames('btn-colored', _className);

  return <RawButton {...restProps} className={className} />;
}
