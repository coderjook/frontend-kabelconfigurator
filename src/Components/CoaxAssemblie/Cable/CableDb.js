import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { ProductStyled } from "../../../Styles/ProductStyle";
import {
  Product,
  ProductGrid,
  ProductImg,
  ProductName,
  ProductDetails,
} from "../../../Styles/ProductGrid";

export const CableDb = ({ setOpenCableDialog }) => {
  const [cableInfo, setCableInfo] = useState([]);
  const fetchCableInfo = () => {
    axios
      .get("http://localhost:8080/api/kabelconfigurator/kabel")
      .then((res) => {
        console.log(res);
        const data = res.data;
        setCableInfo(data);
      });
  };

  useEffect(() => {
    fetchCableInfo();
  }, []);

  return (
    <>
      <ProductStyled>
        <ProductGrid>
          {cableInfo.map((cable, index) => {
            return (
              <Product
                key={index}
                onClick={() => {
                  setOpenCableDialog(cable);
                }}
              >
                {/* <ProductImg img={cable.img} /> */}
                <ProductName>
                  <div>{cable.typenummer}</div>
                </ProductName>
                <ProductDetails>
                  <div>artikelnummer: {cable.artikelnummer}</div>
                  <div>merk: {cable.merk}</div>
                  <div>
                    inkoopprijs: {cable.inkoopprijs} per {cable.prijsper}
                  </div>
                  <div>kabelgroep: {cable.kabelgroep}</div>
                  <div>maximale lengte: {cable.opmaak_aantal}</div>
                  <div>
                    geschikt voor haspel: {cable.haspelgeschikt ? "ja" : "nee"}
                  </div>
                </ProductDetails>
              </Product>
            );
          })}
          ;
        </ProductGrid>
      </ProductStyled>
    </>
  );
};
