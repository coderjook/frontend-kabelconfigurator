import { useState } from "react";

export function useOpenDialog() {
  const [openDialog, setOpenDialog] = useState();
  return { openDialog, setOpenDialog };
}

export function useOpenCableDialog() {
  const [openCableDialog, setOpenCableDialog] = useState();
  return { openCableDialog, setOpenCableDialog };
}

export function useOpenCableUpdateDialog() {
  const [openCableUpdateDialog, setOpenCableUpdateDialog] = useState();
  return { openCableUpdateDialog, setOpenCableUpdateDialog };
}

export function useOpenConnectorDialog() {
  const [openConnectorDialog, setOpenConnectorDialog] = useState();
  return { openConnectorDialog, setOpenConnectorDialog };
}

export function useOpenHaspelDialog() {
  const [openHaspelDialog, setOpenHaspelDialog] = useState();
  return { openHaspelDialog, setOpenHaspelDialog };
}

export function useOpenProductDialog() {
  const [openProductDialog, setOpenProductDialog] = useState();
  return { openProductDialog, setOpenProductDialog };
}
