import React, { useState, useContext } from "react";
//hooks
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";
import { useToggleContent } from "../../../Hooks/useToggleContent";
//styles
import { ConfirmButton } from "../../../Styles/ButtonStyle";
import { ProductHeader } from "../../../Styles/ProductStyle";
import { ProductStyled } from "../../../Styles/ProductStyle";
import { ProductGrid2 } from "../../../Styles/ProductGrid";

function Afwerking() {
  const toggleContent = useToggleContent();
  const [transKrimpkous, setTransKrimpkous] = useState("geen");
  const [lengthTransKrimpkous, setLengthTransKrimpkous] = useState(1);
  const { UpdateAssemblieAfwerking, selectedAssemblie } = useContext(
    AssemblieContext
  );

  const handleChange = (event) => {
    setTransKrimpkous(event.target.value);
  };

  const handleChangeLength = (event) => {
    setLengthTransKrimpkous(event.target.value);
  };

  const prijs_krimp =
    transKrimpkous === "beideKanten"
      ? 0.5
      : transKrimpkous === "geen"
      ? 0
      : 0.25;

  function addToOrder() {
    UpdateAssemblieAfwerking(lengthTransKrimpkous, transKrimpkous, prijs_krimp);
    toggleContent.toggleShowContent();
  }

  return (
    <>
      {!selectedAssemblie ? (
        <>
          <ProductHeader active onClick={toggleContent.toggleShowContent}>
            <div>Laatste stap: kies afwerking assemblie</div>
            <div />
            <div />
          </ProductHeader>
        </>
      ) : selectedAssemblie.trans_krimp === "kies afwerking" ? (
        <>
          <ProductHeader active onClick={toggleContent.toggleShowContent}>
            <div>Laatste stap: kies afwerking assemblie</div>
            <div />
            <div />
          </ProductHeader>
        </>
      ) : (
        <>
          {" "}
          <ProductHeader onClick={toggleContent.toggleShowContent}>
            <div>Geselecteerde afwerking: {selectedAssemblie.trans_krimp}</div>
            <div></div>
            <div />
          </ProductHeader>
        </>
      )}

      {toggleContent.toggleContent ? (
        <>
          <ProductStyled>
            <div>
              <h3> Kies de afwerking:</h3>
            </div>

            <ProductGrid2>
              <div>
                <div>
                  <input
                    type="radio"
                    id="geen"
                    name="geen"
                    value="geen"
                    checked={transKrimpkous === "geen"}
                    onChange={handleChange}
                  />
                  <label for="geen">geen afwerking</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="kantA"
                    name="kantA"
                    value="kantA"
                    checked={transKrimpkous === "kantA"}
                    onChange={handleChange}
                  />
                  <label for="kantB">
                    transparante krimpkous alleen kant A
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="kantB"
                    name="kantB"
                    value="kantB"
                    checked={transKrimpkous === "kantB"}
                    onChange={handleChange}
                  />
                  <label for="kantB">
                    transparante krimpkous alleen kant B
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="beideKanten"
                    name="beideKanten"
                    value="beideKanten"
                    checked={transKrimpkous === "beideKanten"}
                    onChange={handleChange}
                  />
                  <label for="beideKanten">
                    transparante krimpkous op beide kanten
                  </label>
                </div>{" "}
              </div>
              <div>
                {transKrimpkous === "geen" ? (
                  <div>geen transparante krimpkous</div>
                ) : (
                  <div>
                    Lengte transparante krimpkous cm
                    <input
                      type="text"
                      id="lengthTransKrimp"
                      name="lengthTransKrimp"
                      value={lengthTransKrimpkous}
                      onChange={handleChangeLength}
                    />
                  </div>
                )}
              </div>
              <div>materiaalkosten transparante krimpkous: {prijs_krimp}</div>
              <div>
                <ConfirmButton onClick={addToOrder}>
                  selecteer de afwerking
                </ConfirmButton>
              </div>
            </ProductGrid2>
          </ProductStyled>
        </>
      ) : null}
    </>
  );
}

export default Afwerking;
