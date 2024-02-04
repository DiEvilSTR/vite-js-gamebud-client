import './SignInModal.css';

import { useCallback, useContext, useEffect, useState } from 'react';

import { ButtonColored, ButtonOutlined } from '/src/components/Button';
import { Input, INPUT_TYPE } from '/src/components/Input';
import { Modal, ModalOverlay } from '/src/components/Modal';

import { AuthCtx } from './AuthCtx';

export function SignInModal({ onClose, opened, goToSignUp }) {
  const { user, userIsPending, signIn } = useContext(AuthCtx);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showModal, setShowModal] = useState(opened);
  const [closing, setClosing] = useState(false);

  const sendSignInRequest = useCallback(() => {
    signIn({ email, password });
  }, [email, password, signIn]);

  useEffect(() => {
    if (!opened) {
      setClosing(true);
      const timer = setTimeout(() => setShowModal(false), 500);
      return () => clearTimeout(timer);
    } else {
      setShowModal(true);
      setClosing(false);
    }
  }, [opened]);

  useEffect(() => {
    if (user && opened && onClose) {
      setClosing(true);
      const timer = setTimeout(() => {
        onClose();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [user, opened, onClose]);

  useEffect(() => {
    if (!opened) {
      setEmail('');
      setPassword('');
    }
  }, [opened]);

  return (
    <ModalOverlay opened={showModal} onClose={onClose}>
      <div className={`modal ${closing ? 'modal-closing' : ''}`}>
        <Modal
          header={
            <div className="sign_in_modal-header">
              <h2 className="gradient__text">Sign In</h2>
            </div>
          }
          footer={
            <div className="sign_in_modal-footer">
              <ButtonOutlined onClick={sendSignInRequest} pending={userIsPending}>
                Sign In
              </ButtonOutlined>

              {onClose && <ButtonColored onClick={onClose}>Close</ButtonColored>}
            </div>
          }
        >
          <div className="sign_in_modal-field">
            <Input
              className="input-height"
              label="Email"
              name="email"
              onChange={setEmail}
              readOnly={userIsPending}
              type={INPUT_TYPE.email}
              value={email}
            />
          </div>

          <div className="sign_in_modal-field">
            <Input
              className="input-height"
              label="Password"
              name="password"
              onChange={setPassword}
              readOnly={userIsPending}
              type={INPUT_TYPE.password}
              value={password}
            />
          </div>

          <div className="sign_in_modal-switch">
            {/* <p>
            Forgot your password? <a href="#">Reset it</a>
          </p> */}

            {goToSignUp && (
              <p>
                Don’t have an account? <a onClick={goToSignUp}>Sign up</a>
              </p>
            )}
          </div>
        </Modal>
      </div>
    </ModalOverlay>
  );
}
