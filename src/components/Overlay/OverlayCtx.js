import { createContext } from 'react';

const DEFAULT_OVERLAY_CTX_VALUES = {
  containerRef: null,
};

export const OverlayCtx = createContext(DEFAULT_OVERLAY_CTX_VALUES);
