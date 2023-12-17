import './style.css';

export function SignInButton ({ onClick }) {
  return (
    <button className="gamebud__sign-in-button" type="submit" onClick={onClick}>
      Sign In
    </button>
  );
}