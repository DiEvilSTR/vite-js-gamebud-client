import './ModalOverlay.css';

import { useCallback } from 'react';

import { Overlay } from '/src/components/Overlay';

export function ModalOverlay({ children, opened, onClose }) {
  const handleModalClose = useCallback(
    e => {
      if (!onClose) return;

      if (e.target.classList.contains('modal_overlay')) {
        e.stopPropagation();
        e.preventDefault();
        console.log('event:', e);
        onClose(e);
      }
    },
    [onClose]
  );

  if (!opened) return null;

  return (
    <Overlay>
      <div onPointerDown={handleModalClose} className="modal_overlay">
        {children}
      </div>
    </Overlay>
  );
}
