import { useState } from "react";

export function useOpenProductDialog() {
  const [openProductDialog, setOpenProductDialog] = useState();

  return { openProductDialog, setOpenProductDialog };
}
