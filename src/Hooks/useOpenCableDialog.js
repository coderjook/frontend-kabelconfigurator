import { useState } from "react";

export function useOpenCableDialog() {
  const [openCableDialog, setOpenCableDialog] = useState();

  return { openCableDialog, setOpenCableDialog };
}

export function useOpenCableUpdateDialog() {
  const [openCableUpdateDialog, setOpenCableUpdateDialog] = useState();

  return { openCableUpdateDialog, setOpenCableUpdateDialog };
}
