import classnames from 'classnames';

import { RawButton } from './RawButton';

import './LinkButton.css';

export function LinkButton({ className: _className, ...restProps }) {
  const className = classnames('link-btn', _className);

  return <RawButton {...restProps} className={className} />;
}
