import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useToggleContent } from "../../../Hooks/useToggleContent";
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";
import {
  ProductHeader,
  ProductContent,
  ProductStyled,
} from "../../../Styles/ProductStyle";
import HaspelGrid from "./HaspelGrid";
import { HaspelDb } from "./HaspelDb";
import { HaspelDialog } from "./HaspelDialog";
import { useOpenHaspelDialog } from "../../../Hooks/useOpenHaspelDialog";
import { ConfirmButton } from "../../../Styles/DialogStyle";
import { ChangeButton } from "../../../Styles/ButtonStyle";
import {
  Product,
  ProductGrid3,
  ProductImg,
  ProductName,
  ProductDetails,
} from "../../../Styles/ProductGrid";

const ProductContentCheck = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-items: start;
  row-gap: 20px;
  // column-gap: 5px;
  padding: 15px 10px 15px 20px;
  margin-bottom: 10px;
  font-size: 18px;
`;

function Haspel({ ...orders }) {
  const { selectedAssemblie, UpdateAssemblieHaspel } = useContext(
    AssemblieContext
  );
  const openHaspel = useOpenHaspelDialog();
  const toggleContent = useToggleContent(false);
  const [showHaspelGrid, setShowHaspelGrid] = useState(false);
  const [opmaakHaspel, setOpmaakHaspel] = useState("gebonden");

  const handleChange = (event) => {
    setOpmaakHaspel(event.target.value);
  };

  function addToOrder() {
    UpdateAssemblieHaspel(999999, "gebonden", "nvt", 0);
  }

  return (
    <>
      {!selectedAssemblie ? (
        <>
          <ProductHeader active>
            <div>Stap 4: Selecteer afwerking: Haspel of Gebonden</div>
            <div /> <div />
          </ProductHeader>
        </>
      ) : selectedAssemblie.lengte_kabel > 20 ? (
        !selectedAssemblie.details_haspel ? (
          <>
            <ProductHeader active onClick={toggleContent.toggleShowContent}>
              <div>Stap 4: Selecteer afwerking: Haspel of Gebonden</div>
              <div /> <div />
            </ProductHeader>
          </>
        ) : (
          <>
            <ProductHeader onClick={toggleContent.toggleShowContent}>
              <div>
                Geselecteerde afwerking: {selectedAssemblie.details_haspel}
              </div>
              <div></div>
              <div />
            </ProductHeader>
          </>
        )
      ) : (
        <>
          <ProductHeader>
            <div>opmaak op haspel mogelijk vanaf lengte kabel 20 meter</div>
            <div></div>
            <div />
          </ProductHeader>
        </>
      )}

      {toggleContent.toggleContent ? (
        selectedAssemblie.artnr_haspel !== 999999 ? (
          <>
            <ProductStyled>
              <ProductGrid3>
                <div>
                  <Product>
                    <ProductName>
                      <div>{selectedAssemblie.details_haspel}</div>
                    </ProductName>
                    <ProductDetails>
                      <div>Artikelnummer: {selectedAssemblie.artnr_haspel}</div>
                      <div>type: {selectedAssemblie.type_haspel}</div>
                    </ProductDetails>
                  </Product>
                </div>
                <div>
                  <Product>
                    <ChangeButton onClick={() => setShowHaspelGrid(true)}>
                      selecteer een andere haspel
                    </ChangeButton>
                  </Product>
                </div>
                <div />
              </ProductGrid3>
            </ProductStyled>
          </>
        ) : null
      ) : null}
      {toggleContent.toggleContent ? (
        <>
          <ProductContentCheck>
            <div>
              <h3> Kies opmaak assemblie:</h3>
            </div>
            <div>
              <div>
                <input
                  type="radio"
                  id="gebonden"
                  name="gebonden"
                  value="gebonden"
                  checked={opmaakHaspel === "gebonden"}
                  onChange={handleChange}
                />
                <label for="gebonden">Assemblie wordt gebonden geleverd</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="haspel"
                  name="haspel"
                  value="haspel"
                  checked={opmaakHaspel === "haspel"}
                  onChange={handleChange}
                />
                <label for="haspel">Opmaak op haspel</label>
              </div>
              <p></p>
            </div>
          </ProductContentCheck>
          {opmaakHaspel === "gebonden" ? (
            <ConfirmButton onClick={addToOrder}>
              selecteer de opmaak gebonden
            </ConfirmButton>
          ) : null}
          {opmaakHaspel === "haspel" ? (
            <>
              <HaspelGrid {...openHaspel} />
              <HaspelDb {...openHaspel} />
            </>
          ) : null}
        </>
      ) : null}
      <HaspelDialog
        {...openHaspel}
        {...orders}
        closeShowHaspelGrid={() => toggleContent.setToggleContent(false)}
      />
    </>
  );
}

export default Haspel;
