import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";
import { ProductStyled } from "../../../Styles/ProductStyle";
import {
  Product,
  ProductGrid,
  ProductImg,
  ProductName,
  ProductDetails,
} from "../../../Styles/ProductGrid";

export const ConnectorDb = ({ setOpenConnectorDialog }) => {
  const { selectedAssemblie } = useContext(AssemblieContext);
  let orderKabelgroep = null;
  if (!selectedAssemblie) {
    orderKabelgroep = null;
  } else {
    orderKabelgroep = selectedAssemblie.kabelgroep_kabel;
  }

  const [connectorInfo, setConnectorInfo] = useState([]);
  const fetchConnectorInfo = () => {
    axios
      .get("http://localhost:8080/api/kabelconfigurator/connector")
      .then((res) => {
        console.log(res);
        const data = res.data;
        setConnectorInfo(data);
      });
  };

  const connectors = connectorInfo.filter(
    (connector) => connector.kabelgroep === orderKabelgroep
  );

  useEffect(() => {
    fetchConnectorInfo();
  }, []);

  return (
    <>
      <ProductStyled>
        <ProductGrid>
          {connectors.map((connector, index) => {
            return (
              <Product
                key={index}
                onClick={() => {
                  setOpenConnectorDialog(connector);
                }}
              >
                {/* <ProductImg img={connector.img} /> */}
                <ProductName>
                  <div>{connector.typenummer}</div>
                </ProductName>
                <ProductDetails>
                  <div>artikelnummer: {connector.artikelnummer}</div>
                  <div>merk: {connector.merk}</div>
                  <div>
                    inkoopprijs: {connector.inkoopprijs} per{" "}
                    {connector.prijsper}
                  </div>
                  <div>kabelgroep: {connector.kabelgroep}</div>
                  <div>assemblage: {connector.assemblage}</div>
                  <div>tulegroep: {connector.tulegroep}</div>
                </ProductDetails>
              </Product>
            );
          })}
        </ProductGrid>
      </ProductStyled>
    </>
  );
};
