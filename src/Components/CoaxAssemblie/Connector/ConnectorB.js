import React, { useState, useContext } from "react";
// hooks
import { useToggleContent } from "../../../Hooks/useToggleContent";
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";
import { useOpenConnectorDialog } from "../../../Hooks/useOpenDialog";
// components
import { ConnectorDialog } from "./ConnectorDialog";
// import { ConnectorDb } from "./ConnectorDb";
import ConnectorGrid from "./ConnectorGrid";
// import ConnectorGrid from "./ConnectorGrid";
//styles
import { ProductHeader, ProductStyled } from "../../../Styles/ProductStyle";
import { ChangeButton } from "../../../Styles/ButtonStyle";
import {
  Product,
  ProductGrid3,
  ProductName,
  ProductDetails,
} from "../../../Styles/ProductGrid";

function ConnectorB() {
  const { selectedAssemblie } = useContext(AssemblieContext);
  const toggleContent = useToggleContent();
  const openConnectorDialog = useOpenConnectorDialog();
  const [showConnectorGrid, setShowConnectorGrid] = useState(true);

  return (
    <>
      {selectedAssemblie && !showConnectorGrid ? (
        selectedAssemblie.artnr_connector_b !== 999999 ? (
          <>
            {" "}
            <ProductHeader onClick={toggleContent.toggleShowContent}>
              <div>
                Geselecteerde connector: {selectedAssemblie.details_connector_b}
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
                        <div>{selectedAssemblie.details_connector_b}</div>
                      </ProductName>
                      <ProductDetails>
                        <div>
                          Artikelnummer: {selectedAssemblie.artnr_connector_b}
                        </div>
                        <div>type: {selectedAssemblie.type_connector_b}</div>
                        <div>
                          afwerking: {selectedAssemblie.afwerking_connector_b}
                        </div>
                      </ProductDetails>
                    </Product>
                  </div>
                  <div>
                    <Product>
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
              <div>Stap 2: Selecteer een connector voor kant B</div>
              <div /> <div />
            </ProductHeader>
            {/* <ConnectorDb {...openConnectorDialog} /> */}
            <ConnectorGrid {...openConnectorDialog} />
          </>
        )
      ) : null}
      <ConnectorDialog
        {...openConnectorDialog}
        closeShowConnectorGrid={() => setShowConnectorGrid(false)}
        connector="connB"
      />
      {showConnectorGrid ? (
        <>
          <ProductHeader active>
            <div>Stap 3: Selecteer een connector voor kant B</div>
            <div /> <div />
          </ProductHeader>
          {/* <ConnectorDb {...openConnectorDialog} /> */}
          <ConnectorGrid {...openConnectorDialog} />
        </>
      ) : null}
    </>
  );
}

export default ConnectorB;
