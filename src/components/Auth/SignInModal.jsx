import './SignInModal.css';

import { useCallback, useContext, useEffect, useState } from 'react';

import { ButtonColored, ButtonOutlined } from '/src/components/Button';
import { Input, INPUT_TYPE } from '/src/components/Input';
import { Modal, ModalOverlay } from '/src/components/Modal';

import { AuthCtx } from './AuthCtx';

export function SignInModal({ onClose, opened }) {
  const { user, userIsPending, signIn } = useContext(AuthCtx);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendSignInRequest = useCallback(() => {
    signIn({ email, password });
  }, [email, password, signIn]);

  useEffect(() => {
    if (user && opened && onClose) {
      onClose();
    }
  }, [onClose, opened, user]);

  return (
    <ModalOverlay opened={opened}>
      <Modal
        header="Sign In"
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
            label="Password"
            name="password"
            onChange={setPassword}
            readOnly={userIsPending}
            type={INPUT_TYPE.password}
            value={password}
          />
        </div>
      </Modal>
    </ModalOverlay>
  );
}
