import React, { useContext } from "react";
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";
import {
  OrderTitle,
  OrderGrid2,
  OrderItem,
  DetailItem,
} from "../../../Styles/OrderStyle";
import { ConfirmButton } from "../../../Styles/ButtonStyle";
// import { ProductHeader, ProductStyled } from "../../../Styles/ProductStyle";
// import {
//   Product,
//   div,
//   ProductName,
//   ProductDetails,
// } from "../../../Styles/ProductGrid";
// import { ChangeButton } from "../../../Styles/ButtonStyle";
import { ProductStyled } from "../../../Styles/ProductStyle";

let subPriceMaterial = null;
const getSubPriceMaterial = (selectedAssemblie) => {
  subPriceMaterial =
    selectedAssemblie.prijs_kabel +
    selectedAssemblie.prijs_connector_a +
    selectedAssemblie.prijs_connector_b +
    selectedAssemblie.prijshaspel +
    selectedAssemblie.prijs_krimp;

  return subPriceMaterial;
};

let margePriceMaterial = 0.6;
let totalPriceMaterial = null;
const getTotalPriceMaterial = (subPriceMaterial, margePriceMaterial) => {
  totalPriceMaterial = subPriceMaterial / margePriceMaterial;
  return totalPriceMaterial;
};

function AssemblieDetailsOrder() {
  // get the selectedAssemblie form the assemblieContext
  const { selectedAssemblie } = useContext(AssemblieContext);

  return (
    <>
      {selectedAssemblie ? (
        <>
          <ProductStyled>
            <OrderGrid2>
              <div>
                <h3>AssemblieNR:{selectedAssemblie.assemblieID} </h3>{" "}
              </div>
              <div>
                <h3>Aantal stuks: </h3>
                <input type="text" />
              </div>
            </OrderGrid2>

            <OrderTitle>
              <div>Opbouwmateriaalkosten kabel:</div>
            </OrderTitle>
            <OrderGrid2>
              <div>
                Kabel:
                <br /> <b>{selectedAssemblie.artnr_kabel}</b> |{" "}
                {selectedAssemblie.details_kabel} lengte:{" "}
                {selectedAssemblie.lengte_kabel} meter
              </div>
              <div>{selectedAssemblie.prijs_kabel}</div>
            </OrderGrid2>

            <OrderGrid2>
              <div>
                Connector kant A:
                <br /> <b>{selectedAssemblie.artnr_connector_a}</b> |{" "}
                {selectedAssemblie.details_connector_a} Afwerking product:{" "}
                {selectedAssemblie.afwerking_connector_a}
              </div>
              <div>{selectedAssemblie.prijs_connector_a}</div>
            </OrderGrid2>

            <OrderGrid2>
              <div>
                Connector kant B:
                <br /> <b>{selectedAssemblie.artnr_connector_b}</b> |{" "}
                {selectedAssemblie.details_connector_b} Afwerking product:{" "}
                {selectedAssemblie.afwerking_connector_b}
              </div>
              <div>{selectedAssemblie.prijs_connector_b}</div>
            </OrderGrid2>

            <OrderGrid2>
              <div>
                {" "}
                Haspel:
                <br /> <b>{selectedAssemblie.artnr_haspel}</b> |{" "}
                {selectedAssemblie.details_haspel}{" "}
              </div>
              <div>:{selectedAssemblie.prijshaspel}</div>
            </OrderGrid2>

            <OrderGrid2>
              <div>
                Afwerking:
                <br /> {selectedAssemblie.trans_krimp} Lengte krimpkous:{" "}
                {selectedAssemblie.lengte_trans_krimp}{" "}
              </div>
              <div>{selectedAssemblie.prijs_krimp}</div>
            </OrderGrid2>

            <OrderTitle>
              <OrderGrid2>
                <div>subtotaal materiaalkosten Assemblie: </div>
                <div>{getSubPriceMaterial(selectedAssemblie)}</div>
                <div>
                  <b>
                    Totaal materiaalkosten Assemblie (marge:{" "}
                    {margePriceMaterial}
                    ):{" "}
                  </b>
                </div>
                <div>
                  <b>
                    {getTotalPriceMaterial(
                      subPriceMaterial,
                      margePriceMaterial
                    )}
                  </b>
                </div>
              </OrderGrid2>
            </OrderTitle>
          </ProductStyled>
        </>
      ) : null}
    </>
  );
}

export default AssemblieDetailsOrder;
