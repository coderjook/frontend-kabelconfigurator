import { useState } from "react";

export function useLength(defaultLength) {
  const [value, setValue] = useState(defaultLength || 1.0);

  function onChange(e) {
    if (!(e.target.value >= 1.0)) {
      setValue(1.0);
      return;
    }
    setValue(e.target.value);
  }

  return {
    value,
    setValue,
    onChange,
  };
}
