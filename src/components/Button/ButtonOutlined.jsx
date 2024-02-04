import './ButtonOutlined.css';

import classnames from 'classnames';

import { RawButton } from './RawButton';

export function ButtonOutlined({ className: _className, ...restProps }) {
  const className = classnames('btn-outlined', _className);

  return <RawButton {...restProps} className={className} />;
}
