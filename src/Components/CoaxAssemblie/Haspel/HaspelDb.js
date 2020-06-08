import React, { useState, useEffect } from "react";
import axios from "axios";
import haspelImg from "../../../Assets/Images/haspel.jpg";
import { ProductStyled } from "../../../Styles/ProductStyle";
import {
  Product,
  ProductGrid,
  ProductImg,
  ProductName,
  ProductDetails,
} from "../../../Styles/ProductGrid";

export const HaspelDb = ({ setOpenHaspelDialog }) => {
  const [haspelInfo, setHaspelInfo] = useState([]);
  const fetchHaspelInfo = () => {
    axios
      .get("http://localhost:8080/api/kabelconfigurator/haspel")
      .then((res) => {
        console.log(res);
        const data = res.data;
        setHaspelInfo(data);
      });
  };

  useEffect(() => {
    fetchHaspelInfo();
  }, []);

  return (
    <>
      <ProductStyled>
        <ProductGrid>
          {haspelInfo.map((haspel, index) => {
            return (
              <Product
                key={index}
                onClick={() => {
                  setOpenHaspelDialog(haspel);
                }}
              >
                <ProductImg img={haspelImg} />
                <ProductName>
                  <div>{haspel.typenummer}</div>
                </ProductName>
                <ProductDetails>
                  <div>artikelnummer: {haspel.artikelnummer}</div>
                  <div>merk: {haspel.merk}</div>
                  <div>
                    inkoopprijs: {haspel.inkoopprijs} per {haspel.prijsper}
                  </div>
                  <div>breedte haspel: {haspel.breedte_haspel}</div>
                  <div>
                    diameter kern haspel mm: {haspel.diameter_kern_haspel}
                  </div>
                  <div>diameter haspel mm: {haspel.diameter_haspel}</div>
                </ProductDetails>
              </Product>
            );
          })}
        </ProductGrid>
      </ProductStyled>
    </>
  );
};
