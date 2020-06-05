import { useState } from "react";

export function useOpenHaspelDialog() {
  const [openHaspelDialog, setOpenHaspelDialog] = useState();

  return { openHaspelDialog, setOpenHaspelDialog };
}
