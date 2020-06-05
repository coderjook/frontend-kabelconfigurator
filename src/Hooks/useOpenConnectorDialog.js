import { useState } from "react";

export function useOpenConnectorDialog() {
  const [openConnectorDialog, setOpenConnectorDialog] = useState();

  return { openConnectorDialog, setOpenConnectorDialog };
}
