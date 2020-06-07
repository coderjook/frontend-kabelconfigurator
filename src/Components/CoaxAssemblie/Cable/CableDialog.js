import React, { useState, useContext } from "react";
//hooks
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";
import { useLength } from "../../../Hooks/useLength";
//components
import { CableLengthInput } from "./CableLengthInput";
//styles
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogShadow,
  DialogBanner,
  DialogBannerName,
} from "../../../Styles/DialogStyle";
import { ProductDetails } from "../../../Styles/ProductGrid";
import { ConfirmButton } from "../../../Styles/ButtonStyle";

let subPriceCable = null;
const getPriceCable = (openCableDialog, cableLength) => {
  subPriceCable =
    cableLength.value *
    (openCableDialog.inkoopprijs / openCableDialog.prijsper);
  return subPriceCable;
};

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
      subPriceCable,
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
          <DialogBannerName>{openCableDialog.typenummer}</DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <ProductDetails>
            <div>artikelnummer: {openCableDialog.artikelnummer}</div>
            <div>merk: {openCableDialog.merk}</div>
            <div>
              inkoopprijs: {openCableDialog.inkoopprijs} per{" "}
              {openCableDialog.prijsper} meter
            </div>

            <div>kabelgroep: {openCableDialog.kabelgroep}</div>
            <div>maximale lengte: {openCableDialog.opmaak_aantal}</div>
            <div>
              geschikt voor haspel ( bij minimale lengte kabel 20 meter):
              {openCableDialog.haspelgeschikt ? "ja" : "nee"}
            </div>
          </ProductDetails>
          <CableLengthInput cableLength={cableLength} />
          <ProductDetails>
            <div>
              berekenprijs kabel: {getPriceCable(openCableDialog, cableLength)}
            </div>
          </ProductDetails>
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
