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
const getPriceCable = (openCableUpdateDialog, cableLength) => {
  const cableLengthOld = openCableUpdateDialog.lengte_kabel;
  subPriceCable =
    cableLength.value * (openCableUpdateDialog.prijs_kabel / cableLengthOld);
  return subPriceCable;
};

function CableUpdateDialogContainer({
  openCableUpdateDialog,
  setOpenCableUpdateDialog,
  closeShowCableGrid,
}) {
  const cableLength = useLength(
    openCableUpdateDialog && openCableUpdateDialog.cablelength
  );
  const { UpdateAssemblieCableLength } = useContext(AssemblieContext);

  function close() {
    setOpenCableUpdateDialog();
  }

  function addToOrder() {
    closeShowCableGrid();
    UpdateAssemblieCableLength(
      openCableUpdateDialog.artnr_kabel,
      openCableUpdateDialog.details_kabel,
      cableLength.value,
      openCableUpdateDialog.kabelgroep,
      subPriceCable,
      openCableUpdateDialog.diameter_buitenmantel,
      openCableUpdateDialog.opmaak_aantal,
      openCableUpdateDialog.haspelgeschikt
    );
    close();
  }

  return (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openCableUpdateDialog.img}>
          <DialogBannerName>
            {openCableUpdateDialog.details_kabel}
          </DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <ProductDetails>
            <div>artikelnummer: {openCableUpdateDialog.artnr_kabel}</div>
            <div>merk: {openCableUpdateDialog.merk}</div>
            {/* <div>
              inkoopprijs: {openCableUpdateDialog.inkoopprijs} per{" "}
              {openCableUpdateDialog.prijsper} meter
            </div> */}

            <div>kabelgroep: {openCableUpdateDialog.kabelgroep_kabel}</div>
            <div>maximale lengte: {openCableUpdateDialog.opmaak_aantal}</div>
            <div>
              geschikt voor haspel ( bij minimale lengte kabel 20 meter):
              {openCableUpdateDialog.haspelgeschikt ? "ja" : "nee"}
            </div>
            <h3>Vul opnieuw de lengte van de kabel in: </h3>
          </ProductDetails>
          <CableLengthInput cableLength={cableLength} />
          <ProductDetails>
            <div>
              berekenprijs kabel:{" "}
              {getPriceCable(openCableUpdateDialog, cableLength)}
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

export function CableUpdateDialog(props) {
  if (!props.openCableUpdateDialog) return null;
  return <CableUpdateDialogContainer {...props} />;
}
