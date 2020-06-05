import React, { useContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogShadow,
  DialogBanner,
  DialogBannerName,
  ConfirmButton,
} from "../../../Styles/DialogStyle";
import { formatPrice } from "../../../Data/CableData";
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";

export function getPrice(order) {
  return order.length * order.inkoopprijs;
}

function HaspelDialogContainer({
  openHaspelDialog,
  setOpenHaspelDialog,
  closeShowHaspelGrid,
}) {
  const isEditing = openHaspelDialog.index > -1;
  const { UpdateAssemblieHaspel } = useContext(AssemblieContext);

  function close() {
    setOpenHaspelDialog();
  }

  // function editOrder() {
  //   const newOrders = [...orders];
  //   newOrders[openHaspelDialog.index] = order;
  //   setOrders(newOrders);
  //   close();
  // }

  function addToOrder() {
    // setOrders([...orders, order]);
    close();
    // updateCurrentHaspel(order);
    UpdateAssemblieHaspel(
      openHaspelDialog.artikelnummer,
      openHaspelDialog.typenummer,
      openHaspelDialog.type_haspel,
      openHaspelDialog.inkoopprijs
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
        <DialogContent>hier kom info over haspel</DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={addToOrder}>
            selecteer deze haspel
          </ConfirmButton>
          {/* <ConfirmButton onClick={addToOrder}>selecteer de kabel</ConfirmButton> */}
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function HaspelDialog(props) {
  if (!props.openHaspelDialog) return null;
  return <HaspelDialogContainer {...props} />;
}
