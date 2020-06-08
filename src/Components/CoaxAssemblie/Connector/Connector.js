import React, { useState, useContext } from "react";
// hooks
import { useToggleContent } from "../../../Hooks/useToggleContent";
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";
import { useOpenConnectorDialog } from "../../../Hooks/useOpenConnectorDialog";
// components
import { ConnectorDb } from "./ConnectorDb";
import { ConnectorDialog } from "./ConnectorDialog";
// styles
import { ChangeButton } from "../../../Styles/ButtonStyle";
import { ProductHeader, ProductStyled } from "../../../Styles/ProductStyle";
import {
  Product,
  ProductGrid3,
  ProductName,
  ProductDetails,
} from "../../../Styles/ProductGrid";

function Connector() {
  const { selectedAssemblie } = useContext(AssemblieContext);
  const toggleContent = useToggleContent();
  const openConnectorDialog = useOpenConnectorDialog();
  const [showConnectorGrid, setShowConnectorGrid] = useState(true);

  return (
    <>
      {selectedAssemblie && !showConnectorGrid ? (
        selectedAssemblie.artnr_connector_a !== 999999 ? (
          <>
            {" "}
            <ProductHeader onClick={toggleContent.toggleShowContent}>
              <div>
                Geselecteerde connector: {selectedAssemblie.details_connector_a}
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
                        openConnectorDialog.setOpenConnectorDialog(
                          selectedAssemblie
                        );
                      }}
                    >
                      <ProductName>
                        <div>{selectedAssemblie.details_connector_a}</div>
                      </ProductName>
                      <ProductDetails>
                        <div>
                          Artikelnummer: {selectedAssemblie.artnr_connector_a}
                        </div>
                        <div>type: {selectedAssemblie.type_connector_a}</div>
                        <div>
                          afwerking: {selectedAssemblie.afwerking_connector_a}
                        </div>
                      </ProductDetails>
                    </Product>
                  </div>
                  <div>
                    <Product>
                      <ChangeButton
                        onClick={() => {
                          openConnectorDialog.setOpenConnectorDialog(
                            selectedAssemblie
                          );
                        }}
                      >
                        Wijzig connector afwerking
                      </ChangeButton>
                      <ChangeButton onClick={() => setShowConnectorGrid(true)}>
                        selecteer een andere connector
                      </ChangeButton>
                    </Product>
                  </div>
                  <div />
                </ProductGrid3>
              </ProductStyled>
            ) : null}
          </>
        ) : (
          <>
            <ProductHeader active>
              <div>Stap 2: Selecteer een connector voor kant A</div>
              <div /> <div />
            </ProductHeader>
            <ConnectorDb {...openConnectorDialog} />
          </>
        )
      ) : null}
      <ConnectorDialog
        {...openConnectorDialog}
        closeShowConnectorGrid={() => setShowConnectorGrid(false)}
        connector="connA"
      />
      {showConnectorGrid ? (
        <>
          <ProductHeader active>
            <div>Stap 2: Selecteer een connector voor kant A</div>
            <div /> <div />
          </ProductHeader>
          <ConnectorDb {...openConnectorDialog} />
        </>
      ) : null}
    </>
  );
}

export default Connector;
