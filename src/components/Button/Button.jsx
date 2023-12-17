import classnames from 'classnames';
import { RawButton } from './RawButton';

export function Button({ className: _className, ...restProps }) {
  const className = classnames('btn', _className);

  return <RawButton {...restProps} className={className} />;
}
