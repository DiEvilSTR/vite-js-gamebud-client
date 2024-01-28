import { useEffect, useMemo, useRef } from 'react';

import { useBool } from '/src/hooks';

import { OverlayCtx } from './OverlayCtx';

export function OverlayProvider({ children }) {
  const [initialized, init] = useBool(false);

  const containerRef = useRef(null);

  const ctx = useMemo(() => {
    return {
      containerRef,
      initialized,
    };
  }, [initialized]);

  useEffect(() => init(), [init]);

  return <OverlayCtx.Provider value={ctx}>{children}</OverlayCtx.Provider>;
}
