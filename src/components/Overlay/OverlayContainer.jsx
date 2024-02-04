import './OverlayContainer.css';

import { useContext } from 'react';

import { OverlayCtx } from './OverlayCtx';

export function OverlayContainer({ children }) {
  const { containerRef } = useContext(OverlayCtx);

  return (
    <div className="overlay_container" ref={containerRef}>
      {children}
    </div>
  );
}
