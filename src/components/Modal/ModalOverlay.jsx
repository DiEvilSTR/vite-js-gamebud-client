import './ModalOverlay.css';

import { Overlay } from '/src/components/Overlay';

export function ModalOverlay({ children, opened }) {
  if (!opened) return null;

  return (
    <Overlay>
      <div className="modal_overlay">{children}</div>
    </Overlay>
  );
}
