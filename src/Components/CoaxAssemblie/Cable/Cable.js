import React, { useState, useContext } from "react";
//hooks
import { useToggleContent } from "../../../Hooks/useToggleContent";
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";
import { useOpenCableDialog } from "../../../Hooks/useOpenCableDialog";
//components
import { CableDb } from "./CableDb";
// data kabel vanuit Data: import CableGrid from "./CableGrid";
import { CableDialog } from "./CableDialog";
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
  const [showCableGrid, setShowCableGrid] = useState(true);

  return (
    <>
      {selectedAssemblie && !showCableGrid ? (
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
                      openCableDialog.setOpenCableDialog(selectedAssemblie);
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
                        openCableDialog.setOpenCableDialog(selectedAssemblie);
                      }}
                    >
                      Wijzig lengte kabel
                    </ChangeButton>
                    <ChangeButton onClick={() => setShowCableGrid(true)}>
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
        closeShowCableGrid={() => setShowCableGrid(false)}
      />

      {showCableGrid ? (
        <>
          <ProductHeader active>
            <div>Stap 1: Selecteer een kabel</div>
            <div /> <div />
          </ProductHeader>
          <CableDb {...openCableDialog} />
          {/* <CableGrid {...openCableDialog} /> */}
        </>
      ) : null}
    </>
  );
}

export default Cable;
