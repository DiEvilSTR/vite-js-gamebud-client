import classnames from 'classnames';

import { BUTTON_TYPE } from './constants';
import './RawButton.css';

export function RawButton({ className: _className, type: _type, ...restProps }) {
  const className = classnames('raw-btn', _className);
  const type = _type || BUTTON_TYPE.button;

  return <button {...restProps} className={className} type={type} />;
}
