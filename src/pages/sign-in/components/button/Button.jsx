import './style.css';

const SignInButton = ({ onClick }) => {
  return (
    <button className="gamebud__sign-in-button" type="submit" onClick={onClick}>
      Sign In
    </button>
  );
}

export default SignInButton;