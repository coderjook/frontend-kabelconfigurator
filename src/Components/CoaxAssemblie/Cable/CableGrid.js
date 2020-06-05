import React from "react";
import styled from "styled-components";
import { cables } from "../../../Data/CableData";
import {
  Product,
  ProductGrid,
  ProductImg,
  ProductName,
  ProductDetails,
} from "../../../Styles/ProductGrid";
import { formatPrice } from "../../../Data/CableData";

const ProductStyled = styled.div`
  margin: 0px 400px 50px 20px;
`;

function CableGrid({ setOpenCableDialog }) {
  return (
    <ProductStyled>
      {Object.entries(cables).map(([sectionName, cables]) => (
        <>
          <h3> {sectionName} </h3>
          <ProductGrid>
            {cables.map((cable) => (
              <>
                <Product
                  onClick={() => {
                    setOpenCableDialog(cable);
                  }}
                >
                  <ProductImg img={cable.img} />
                  <ProductName>
                    <div>{cable.typenummer}</div>
                  </ProductName>
                  <ProductDetails>
                    <div>artikelnummer: {cable.artikelnummer}</div>
                    <div>
                      inkoopprijs: {formatPrice(cable.inkoopprijs)} per{" "}
                      {cable.prijsper}
                    </div>
                    <div>kabelgroep: {cable.kabelgroep}</div>
                    <div>maximale lengte: {cable.opmaak_aantal}</div>
                    <div>
                      geschikt voor haspel:{" "}
                      {cable.haspelgeschikt ? "ja" : "nee"}
                    </div>
                  </ProductDetails>
                </Product>
              </>
            ))}
          </ProductGrid>
        </>
      ))}
    </ProductStyled>
  );
}

export default CableGrid;
