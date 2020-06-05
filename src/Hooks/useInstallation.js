import { useState } from "react";

export function useInstallation() {
  const [value, setValue] = useState("geen");

  function onChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange,
  };
}
