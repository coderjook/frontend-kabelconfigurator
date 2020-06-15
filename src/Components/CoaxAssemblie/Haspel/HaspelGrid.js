import React from "react";
import styled from "styled-components";
import { haspels } from "../../../Data/HaspelData";
import {
  Product,
  ProductGrid,
  ProductName,
  ProductImg,
} from "../../../Styles/ProductGrid";
import { formatPrice } from "../../../Data/HaspelData";

const ProductStyled = styled.div`
  margin: 0px 400px 50px 20px;
`;

function HaspelGrid({ setOpenHaspelDialog }) {
  return (
    <ProductStyled>
      {Object.entries(haspels).map(([sectionName, haspels]) => (
        <>
          <h3> {sectionName} </h3>
          <ProductGrid>
            {haspels.map((haspel) => (
              <Product
                key={haspel.artikelnummer}
                onClick={() => {
                  setOpenHaspelDialog(haspel);
                }}
              >
                <ProductImg img={haspel.img} />
                <ProductName>
                  <div>{haspel.typenummer}</div>
                  <div>{formatPrice(haspel.inkoopprijs)}</div>
                </ProductName>
              </Product>
            ))}
          </ProductGrid>
        </>
      ))}
    </ProductStyled>
  );
}

export default HaspelGrid;
