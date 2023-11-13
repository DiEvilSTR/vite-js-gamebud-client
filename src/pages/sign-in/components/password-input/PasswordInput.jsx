import { useState } from 'react';
import eyeOpen from '/src/assets/images/eye-open.png';
import eyeClose from '/src/assets/images/eye-close.png';
import './style.css';

function PasswordInput({ ...props }) {
  const [type, setType] = useState('password');
  const [img, setImg] = useState(eyeOpen);

  const togglePassword = () => {
    if (type === 'password') {
      setImg(eyeClose);
      return setType('text');
    }
    setImg(eyeOpen);
    setType('password');
  };

  return (
    <div className="relative">
      <input
        type={type}
        className="bg-slate-50 border-2 p-1 rounded-sm w-full focus:border-gray-500 focus:outline-none text-lg text-gray-900"
        {...props}
      />
      <span
        onClick={togglePassword}
        className="inline-block absolute top-0 right-1 p-1 cursor-pointer"
      >
        <img alt="toggle" src={img} />
      </span>
    </div>
  );
}

export default PasswordInput;