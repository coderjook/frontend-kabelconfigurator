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
  updateCurrentCable,
  setOrders,
  orders,
}) {
  const cableLength = useLength(openCableDialog && openCableDialog.cablelength);
  const { addNewAssemblie } = useContext(AssemblieContext);

  function close() {
    setOpenCableDialog();
  }

  // const order = {
  //   assemblieItem: "cable",
  //   ...openCableDialog,
  //   cableLength: cableLength.value,
  // };

  // function editOrder() {
  //   console.log("edit de kabel");
  //   // const newOrders = [...orders];
  //   // newOrders[openCableDialog.index] = order;
  //   // setOrders(newOrders);
  //   const newOrders = [...orders];
  //   orders.map((order) =>
  //     order.assemblieItem === "cable"
  //       ? // removing the element using splice
  //         newOrders.splice(order, 1)
  //       : null
  //   );
  //   setOrders([...newOrders, order]);
  // }

  // function removeCable() {
  //   const newOrders = [...orders];
  //   orders.map((order) =>
  //     order.assemblieItem === "cable" || order.assemblieItem === "connector"
  //       ? // removing the element using splice
  //         newOrders.splice(order, 1)
  //       : null
  //   );
  //   setOrders([...newOrders]);
  //   addNewAssemblie();
  //   console.log("verwijderkabels");
  // }

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
          hier kom lengte
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
