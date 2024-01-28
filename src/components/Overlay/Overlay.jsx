import { useContext } from 'react';
import { createPortal } from 'react-dom';

import { OverlayCtx } from './OverlayCtx';

export function Overlay({ children }) {
  const { containerRef, initialized } = useContext(OverlayCtx);

  if (!initialized) return null;

  return createPortal(children, containerRef.current);
}
