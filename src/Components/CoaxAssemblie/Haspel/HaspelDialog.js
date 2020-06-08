import React, { useContext } from "react";
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";
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

let subPriceHaspel = null;
const getPriceHaspel = (openHaspelDialog) => {
  subPriceHaspel = openHaspelDialog.inkoopprijs / openHaspelDialog.prijsper;
  return subPriceHaspel;
};

function HaspelDialogContainer({
  openHaspelDialog,
  setOpenHaspelDialog,
  closeShowHaspelGrid,
}) {
  const { UpdateAssemblieHaspel } = useContext(AssemblieContext);

  function close() {
    setOpenHaspelDialog();
  }

  function addToOrder() {
    close();
    UpdateAssemblieHaspel(
      openHaspelDialog.artikelnummer,
      openHaspelDialog.typenummer,
      openHaspelDialog.type_haspel,
      subPriceHaspel
    );
    closeShowHaspelGrid();
  }

  return (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openHaspelDialog.img}>
          <DialogBannerName> {openHaspelDialog.typenummer} </DialogBannerName>
          <DialogBannerName> {openHaspelDialog.kabelgroep} </DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <ProductDetails>
            <div>artikelnummer: {openHaspelDialog.artikelnummer}</div>
            <div>merk: {openHaspelDialog.merk}</div>
            <div>
              inkoopprijs: {openHaspelDialog.inkoopprijs} per{" "}
              {openHaspelDialog.prijsper}
            </div>
            <div>breedte haspel: {openHaspelDialog.breedte_haspel}</div>
            <div>
              diameter kern haspel mm: {openHaspelDialog.diameter_kern_haspel}
            </div>
            <div>diameter haspel mm: {openHaspelDialog.diameter_haspel}</div>
          </ProductDetails>
          <ProductDetails>
            <div>berekenprijs haspel: {getPriceHaspel(openHaspelDialog)}</div>
          </ProductDetails>
        </DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={addToOrder}>
            selecteer deze haspel
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function HaspelDialog(props) {
  if (!props.openHaspelDialog) return null;
  return <HaspelDialogContainer {...props} />;
}
