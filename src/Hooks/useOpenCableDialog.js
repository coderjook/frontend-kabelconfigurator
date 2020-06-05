import { useState } from "react";

export function useOpenCableDialog() {
  const [openCableDialog, setOpenCableDialog] = useState();

  return { openCableDialog, setOpenCableDialog };
}
