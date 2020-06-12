import React, { useState, useContext } from "react";
//hooks
import { useToggleContent } from "../../../Hooks/useToggleContent";
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";
import {
  useOpenCableDialog,
  useOpenCableUpdateDialog,
} from "../../../Hooks/useOpenDialog";

//components
import { CableDb } from "./CableDb";
// data kabel vanuit Data: import CableGrid from "./CableGrid";
import { CableDialog } from "./CableDialog";
import { CableUpdateDialog } from "./CableUpdateDialog";
//styles
import { ProductHeader, ProductStyled } from "../../../Styles/ProductStyle";
import {
  Product,
  ProductGrid3,
  ProductName,
  ProductDetails,
} from "../../../Styles/ProductGrid";
import { ChangeButton } from "../../../Styles/ButtonStyle";

function Cable() {
  const { selectedAssemblie } = useContext(AssemblieContext);
  const toggleContent = useToggleContent();
  const openCableDialog = useOpenCableDialog();

  const openCableUpdateDialog = useOpenCableUpdateDialog();
  const [showCableGrid, setShowCableGrid] = useState("new");

  return (
    <>
      {selectedAssemblie && showCableGrid === "none" ? (
        <>
          {" "}
          <ProductHeader onClick={toggleContent.toggleShowContent}>
            <div>
              Geselecteerde Kabel: {selectedAssemblie.details_kabel} Lengte:{" "}
              {selectedAssemblie.lengte_kabel}
            </div>
            <div></div>
            <div />
          </ProductHeader>
          {toggleContent.toggleContent ? (
            <ProductStyled>
              <ProductGrid3>
                <div>
                  <Product
                    onClick={() => {
                      openCableUpdateDialog.setOpenCableUpdateDialog(
                        selectedAssemblie
                      );
                    }}
                  >
                    <ProductName>
                      <div>{selectedAssemblie.details_kabel}</div>
                    </ProductName>
                    <ProductDetails>
                      <div>artikelnummer: {selectedAssemblie.artnr_kabel}</div>
                      <div>prijs: {selectedAssemblie.prijs_kabel}</div>
                      <div>lengte: {selectedAssemblie.lengte_kabel}</div>
                      <div>
                        geschikt voor haspel: {selectedAssemblie.haspelgeschikt}
                      </div>
                      <div>
                        maximale lengte: {selectedAssemblie.opmaak_aantal}
                      </div>
                    </ProductDetails>
                  </Product>
                </div>
                <div>
                  <Product>
                    <ChangeButton
                      onClick={() => {
                        openCableUpdateDialog.setOpenCableUpdateDialog(
                          selectedAssemblie
                        );
                      }}
                    >
                      Wijzig lengte kabel
                    </ChangeButton>
                    <ChangeButton
                      onClick={() => setShowCableGrid("openUpdate")}
                    >
                      selecteer een andere kabel
                    </ChangeButton>
                  </Product>
                </div>
                <div />
              </ProductGrid3>
            </ProductStyled>
          ) : null}
        </>
      ) : null}
      <CableDialog
        {...openCableDialog}
        closeShowCableGrid={() => setShowCableGrid("none")}
      />
      <CableUpdateDialog
        {...openCableUpdateDialog}
        closeShowCableGrid={() => setShowCableGrid("none")}
      />

      {showCableGrid === "new" ? (
        <>
          <ProductHeader active>
            <div>Stap 1: Selecteer een kabel</div>
            <div /> <div />
          </ProductHeader>
          <CableDb {...openCableDialog} cableStatus="cableNew" />
          {/* <CableGrid {...openCableDialog} /> */}
        </>
      ) : showCableGrid === "openUpdate" ? (
        <>
          <ProductHeader active>
            <div>Stap 1: Selecteer opnieuw een kabel</div>
            <div /> <div />
          </ProductHeader>
          <h3>
            {" "}
            Let op, kiest u een andere kabel dan moet u opnieuw de connectoren,
            haspel en afwerking invullen
          </h3>
          <ChangeButton onClick={() => setShowCableGrid("none")}>
            terug
          </ChangeButton>
          <CableDb {...openCableDialog} cableStatus="cableUpdate" />
          {/* <CableGrid {...openCableDialog} /> */}
        </>
      ) : null}
    </>
  );
}

export default Cable;
