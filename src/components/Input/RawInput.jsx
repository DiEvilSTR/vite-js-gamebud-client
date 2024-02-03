import './RawInput.css';

import classnames from 'classnames';
import { useCallback, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing eye icons from react-icons

export function RawInput({ className: _className, name, onChange, value, type, ...restProps }) {
  const [showPassword, setShowPassword] = useState(false);
  const className = classnames('raw-input', _className, { 'password-input': type === 'password' });
  const handleInputChange = useCallback(event => onChange(event.target.value, event), [onChange]);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="raw-input-wrapper">
      <input
        {...restProps}
        className={className}
        name={name}
        onChange={handleInputChange}
        value={value}
        type={type === 'password' && showPassword ? 'text' : type}
      />
      {type === 'password' && (
        <button onClick={togglePasswordVisibility} className="password-toggle">
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      )}
    </div>
  );
}
