import React, { useContext } from "react";
//hooks
import { useFetch } from "../../../Hooks/useFetch";
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";
//components
import Spinner from "../../../Utils/Spinner";
//styles
import { ProductStyled } from "../../../Styles/ProductStyle";
import {
  Product,
  ProductGrid,
  ProductImg,
  ProductName,
  ProductDetails,
} from "../../../Styles/ProductGrid";
// images
import connectorImg from "../../../Assets/Images/connector.jpg";

export const ConnectorDb = ({ setOpenConnectorDialog }) => {
  const { selectedAssemblie } = useContext(AssemblieContext);
  let orderKabelgroep = null;
  if (!selectedAssemblie) {
    orderKabelgroep = null;
  } else {
    orderKabelgroep = selectedAssemblie.kabelgroep_kabel;
  }

  const [data, isLoading, isError] = useFetch(
    "http://localhost:8080/api/kabelconfigurator/connector",
    []
  );

  //check op errors en loading
  if (isError) return <div>something went wrong</div>;
  if (isLoading) return <Spinner />;

  const connectors = data.filter(
    (connector) => connector.kabelgroep === orderKabelgroep
  );

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
                <ProductImg img={connectorImg} />
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
