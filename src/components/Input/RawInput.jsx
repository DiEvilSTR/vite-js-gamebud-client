import classnames from 'classnames';
import { useCallback } from 'react';

import './RawInput.css';

export function RawInput({ className: _className, name, onChange, value, ...restProps }) {
  const className = classnames('raw-input', _className);

  const handleInputChange = useCallback(event => onChange(event.target.value, event), [onChange]);

  return <input {...restProps} className={className} name={name} onChange={handleInputChange} value={value} />;
}
