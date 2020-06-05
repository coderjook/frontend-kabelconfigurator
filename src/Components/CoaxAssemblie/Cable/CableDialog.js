import React, { useState, useContext } from "react";
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogShadow,
  DialogBanner,
  DialogBannerName,
  ConfirmButton,
} from "../../../Styles/DialogStyle";
import { formatPrice } from "../../../Utils/FormatPrice";
import { CableLengthInput } from "./CableLengthInput";
import { useLength } from "../../../Hooks/useLength";

function CableDialogContainer({
  openCableDialog,
  setOpenCableDialog,
  closeShowCableGrid,
}) {
  const cableLength = useLength(openCableDialog && openCableDialog.cablelength);
  const { addNewAssemblie } = useContext(AssemblieContext);

  function close() {
    setOpenCableDialog();
  }

  function addToOrder() {
    closeShowCableGrid();
    addNewAssemblie(
      openCableDialog.artikelnummer,
      openCableDialog.typenummer,
      cableLength.value,
      openCableDialog.kabelgroep,
      openCableDialog.inkoopprijs,
      openCableDialog.diameter_buitenmantel,
      openCableDialog.opmaak_aantal,
      openCableDialog.haspelgeschikt
    );
    close();
  }

  return (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openCableDialog.img}>
          <DialogBannerName>
            {" "}
            {openCableDialog.typenummer}
            {}
          </DialogBannerName>
          <DialogBannerName> {openCableDialog.kabelgroep} </DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <CableLengthInput cableLength={cableLength} />
        </DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={addToOrder}>
            selecteer deze kabel
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function CableDialog(props) {
  if (!props.openCableDialog) return null;
  return <CableDialogContainer {...props} />;
}
