import "./style.css";

function EmailInput({ ...props }) {
    return (
        <input
            type="email"
            className="gamebud__sign-in-email-input"
            {...props}
        />
    );
}

export default EmailInput;