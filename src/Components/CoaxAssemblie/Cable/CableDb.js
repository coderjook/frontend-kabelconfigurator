import React, { useState, useEffect } from "react";
import axios from "axios";
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
import kabelImg from "../../../Assets/Images/lmr40075.jpg";

export const CableDb = ({ setOpenCableDialog, cableStatus }) => {
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
                  setOpenCableDialog(cable, cableStatus);
                }}
              >
                <ProductImg img={kabelImg} alt="kabel" />
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
        </ProductGrid>
      </ProductStyled>
    </>
  );
};
