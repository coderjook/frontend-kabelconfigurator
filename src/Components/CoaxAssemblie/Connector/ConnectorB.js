import React, { useState, useContext } from "react";
import { ProductHeader, ProductStyled } from "../../../Styles/ProductStyle";
import { useToggleContent } from "../../../Hooks/useToggleContent";
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";
import { ConnectorDialog } from "./ConnectorDialog";
import ConnectorGrid from "./ConnectorGrid";
import { useOpenConnectorDialog } from "../../../Hooks/useOpenConnectorDialog";
import { ChangeButton } from "../../../Styles/ButtonStyle";
import {
  Product,
  ProductGrid3,
  ProductImg,
  ProductName,
  ProductDetails,
} from "../../../Styles/ProductGrid";

function Connector({ ...orders }) {
  const { selectedAssemblie } = useContext(AssemblieContext);
  const toggleContent = useToggleContent();
  const openConnectorDialog = useOpenConnectorDialog();
  const [showConnectorGrid, setShowConnectorGrid] = useState(true);

  return (
    <>
      {selectedAssemblie && !showConnectorGrid ? (
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
          <ConnectorGrid {...openConnectorDialog} />
        </>
      ) : null}
    </>
  );
}

export default Connector;
