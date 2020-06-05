import React, { useState, useContext } from "react";
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";
import { ConfirmButton } from "../../../Styles/DialogStyle";
import { ProductHeader, ProductContent } from "../../../Styles/ProductStyle";
import { useToggleContent } from "../../../Hooks/useToggleContent";
import { ProductStyled } from "../../../Styles/ProductStyle";

function Afwerking({ orders, setOrders }) {
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

  // const order = {
  //   assemblieItem: "afwerking",
  //   transKrimpkous: transKrimpkous,
  //   lengthTransKrimpkous: lengthTransKrimpkous,
  // };

  function addToOrder() {
    // setOrders([...orders, order]);
    UpdateAssemblieAfwerking(lengthTransKrimpkous, transKrimpkous);
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
      ;
      {toggleContent.toggleContent ? (
        <>
          <ProductStyled>
            <ProductContent>
              <div>
                <h3> Kies de afwerking:</h3>
              </div>
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
              <p>
                {transKrimpkous === "geen" ? (
                  <p>geen transparante krimpkous</p>
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
              </p>

              <ConfirmButton onClick={addToOrder}>
                selecteer de afwerking
              </ConfirmButton>
            </ProductContent>
          </ProductStyled>
        </>
      ) : null}
      ;
    </>
  );
}

export default Afwerking;
