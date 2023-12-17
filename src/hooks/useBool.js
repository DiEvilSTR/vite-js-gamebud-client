import { useMemo, useState } from 'react';

export function useBool(initialValue) {
  const [value, setValue] = useState(Boolean(initialValue));

  const { setTrue, setFalse } = useMemo(() => {
    function setTrue() {
      setValue(true);
    }

    function setFalse() {
      setValue(false);
    }

    return { setTrue, setFalse };
  }, []);

  return [value, setTrue, setFalse];
}
