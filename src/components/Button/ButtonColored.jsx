import classnames from 'classnames';

import { RawButton } from './RawButton';

import './ButtonColored.css';

export function ButtonColored({ className: _className, ...restProps }) {
  const className = classnames('btn-colored', _className);

  return <RawButton {...restProps} className={className} />;
}
