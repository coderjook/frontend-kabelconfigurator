import { useState } from "react";

export function useToggleContent() {
  const [toggleContent, setToggleContent] = useState(false);

  const toggleShowContent = () => {
    setToggleContent(!toggleContent);
  };

  return {
    toggleContent,
    setToggleContent,
    toggleShowContent,
  };
}
