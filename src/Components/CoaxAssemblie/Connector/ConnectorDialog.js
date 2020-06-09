import React, { useState, useContext } from "react";
//hooks
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";
import { useInstallation } from "../../../Hooks/useInstallation";
//components
import Tules from "./Tules";
//styles
import styled from "styled-components";
import { ProductDetails } from "../../../Styles/ProductGrid";
import { ConfirmButton } from "../../../Styles/ButtonStyle";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogShadow,
  DialogBanner,
  DialogBannerName,
} from "../../../Styles/DialogStyle";

const CursorPointer = `cursor: pointer`;

const RadioInput = styled.input`
  ${CursorPointer}
`;

const Label = styled.label`
  ${CursorPointer}
`;

function ConnectorDialogContainer({
  closeShowConnectorGrid,
  openConnectorDialog,
  setOpenConnectorDialog,
  connector,
}) {
  const installationRadio = useInstallation();
  // const isEditing = openConnectorDialog.index > -1;
  const [tuleState, setTuleState] = useState();
  const { UpdateAssemblieConnA, UpdateAssemblieConnB } = useContext(
    AssemblieContext
  );

  const tuleOrder = tuleState
    ? `${tuleState}`
    : installationRadio.value === "geen"
    ? 0
    : 10593;

  const installation = installationRadio.value;

  let subPriceConnector = null;
  const getPriceConnector = (openConnectorDialog, installation) => {
    const priceConnector =
      openConnectorDialog.inkoopprijs / openConnectorDialog.prijsper;
    const priceInstallation = installation === "geen" ? 0 : 0.25;
    subPriceConnector = priceConnector + priceInstallation;
    console.log("inst", priceInstallation);
    return subPriceConnector;
  };

  function close() {
    setOpenConnectorDialog();
  }

  function addToOrder() {
    if (connector === "connA") {
      UpdateAssemblieConnA(
        openConnectorDialog.artikelnummer,
        openConnectorDialog.typenummer,
        openConnectorDialog.connectortype,
        openConnectorDialog.assemblage,
        subPriceConnector,
        installationRadio.value,
        tuleOrder
      );
    } else {
      UpdateAssemblieConnB(
        openConnectorDialog.artikelnummer,
        openConnectorDialog.typenummer,
        openConnectorDialog.connectortype,
        openConnectorDialog.assemblage,
        subPriceConnector,
        installationRadio.value,
        tuleOrder
      );
    }
    closeShowConnectorGrid();
    close();
  }

  return (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openConnectorDialog.img}>
          <DialogBannerName>{openConnectorDialog.typenummer}</DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <ProductDetails>
            <div>artikelnummer: {openConnectorDialog.artikelnummer}</div>
            <div>merk: {openConnectorDialog.merk}</div>
            <div>
              inkoopprijs: {openConnectorDialog.inkoopprijs} per{" "}
              {openConnectorDialog.prijsper}
            </div>
            <div>kabelgroep: {openConnectorDialog.kabelgroep}</div>
            <div>assemblage: {openConnectorDialog.assemblage}</div>
            <div>tulegroep: {openConnectorDialog.tulegroep}</div>
          </ProductDetails>

          <h3> Kies de afwerking:</h3>
          <RadioInput
            type="radio"
            id="geen"
            name="geen"
            value="geen"
            checked={installationRadio.value === "geen"}
            onChange={installationRadio.onChange}
          />
          <Label for="geen">geen afwerking</Label>
          <RadioInput
            type="radio"
            id="krimpkous"
            name="krimpkous"
            value="krimpkous"
            checked={installationRadio.value === "krimpkous"}
            onChange={installationRadio.onChange}
          />
          <Label for="krimpkous">zwarte krimpkous</Label>
          <RadioInput
            type="radio"
            id="tule"
            name="tule"
            value="tule"
            checked={installationRadio.value === "tule"}
            onChange={installationRadio.onChange}
          />
          <Label for="tule">tule</Label>

          {installationRadio.value === "tule" ? (
            <>
              <div>tule: {tuleState}</div>
              <Tules
                tulegroep={openConnectorDialog.tulegroep}
                onChange={(banaan) => setTuleState(banaan)}
                tuleOrder={tuleState}
              />
            </>
          ) : null}
          <ProductDetails>
            <div>
              materiaalkosten connector:{" "}
              {getPriceConnector(openConnectorDialog, installation)}
            </div>
          </ProductDetails>
        </DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={addToOrder}>
            selecteer deze connector
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function ConnectorDialog(props) {
  if (!props.openConnectorDialog) return null;
  return <ConnectorDialogContainer {...props} />;
}
