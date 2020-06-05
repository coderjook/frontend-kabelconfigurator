import React, { useContext } from "react";
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";
import styled from "styled-components";
import { connectors } from "../../../Data/ConnectorData";
import {
  Product,
  ProductGrid,
  ProductName,
  ProductImg,
  ProductDetails,
} from "../../../Styles/ProductGrid";
import { ProductStyled } from "../../../Styles/ProductStyle";
import { formatPrice } from "../../../Data/ConnectorData";

function ConnectorGrid({ setOpenConnectorDialog }) {
  const { selectedAssemblie } = useContext(AssemblieContext);
  let orderKabelgroep = null;
  if (!selectedAssemblie) {
    orderKabelgroep = null;
  } else {
    orderKabelgroep = selectedAssemblie.kabelgroep_kabel;
  }

  return (
    <ProductStyled>
      {Object.entries(connectors).map(([kabelgroep, connectors]) =>
        kabelgroep === orderKabelgroep ? (
          <>
            <ProductGrid>
              {connectors.map((connector) => (
                <>
                  <Product
                    img={connector.img}
                    onClick={() => {
                      setOpenConnectorDialog(connector);
                    }}
                  >
                    <ProductImg img={connector.img} />
                    <ProductName>
                      <div>{connector.typenummer}</div>
                    </ProductName>
                    <ProductDetails>
                      <div>artikelnummer: {connector.artikelnummer}</div>
                      <div>
                        inkoopprijs: {formatPrice(connector.inkoopprijs)} per{" "}
                        {connector.prijsper}
                      </div>
                      <div>kabelgroep: {connector.kabelgroep}</div>
                      <div>merk: {connector.merk}</div>
                      <div>
                        type:
                        {connector.connectortype}
                      </div>
                    </ProductDetails>
                  </Product>
                </>
              ))}
            </ProductGrid>
          </>
        ) : null
      )}
    </ProductStyled>
  );
}

export default ConnectorGrid;
