import React, { useContext } from "react";
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";
import { OrderTitle, OrderItem, DetailItem } from "../../../Styles/OrderStyle";
import { ConfirmButton } from "../../../Styles/ButtonStyle";
import { ProductHeader, ProductStyled } from "../../../Styles/ProductStyle";
import {
  Product,
  ProductGrid3,
  ProductName,
  ProductDetails,
} from "../../../Styles/ProductGrid";
import { ChangeButton } from "../../../Styles/ButtonStyle";

function AssemblieDetailsOrder() {
  // get the selectedAssemblie form the assemblieContext
  const { selectedAssemblie } = useContext(AssemblieContext);

  function createOrder() {
    console.log("ga verder met de order", selectedAssemblie);
  }

  return (
    <>
      {selectedAssemblie ? (
        <>
          <ProductStyled>
            <ProductGrid3>
              <div>
                <div>AssemblieNR:{selectedAssemblie.assemblieID} </div>

                <OrderTitle>
                  <div>Geselecteerde kabel: </div>
                </OrderTitle>
                <OrderItem>
                  <div>{selectedAssemblie.details_kabel} </div>
                  <div>Lengte: {selectedAssemblie.lengte_kabel} meter</div>
                </OrderItem>
                <DetailItem>
                  <div>Artikelnummer: {selectedAssemblie.artnr_kabel} </div>
                  <div>Kabelgroep: {selectedAssemblie.kabelgroep_kabel}</div>
                </DetailItem>
                <DetailItem>
                  <div>Prijs: {selectedAssemblie.prijs_kabel}</div>

                  <div>Diameter: {selectedAssemblie.diameter_buitenmantel}</div>
                </DetailItem>
                <DetailItem>
                  <div>Maximale lengte: {selectedAssemblie.opmaak_aantal}</div>
                  <div>
                    Geschikt voor haspel: {selectedAssemblie.haspelgeschikt}
                  </div>
                </DetailItem>
              </div>

              <div>
                <OrderTitle>
                  <div>Geselecteer Connector A:</div>
                </OrderTitle>
                <OrderItem>
                  <div>{selectedAssemblie.details_connector_a} </div>
                </OrderItem>
                <DetailItem>
                  <div>
                    Artikelnummer: {selectedAssemblie.artnr_connector_a}
                  </div>
                  <div>Type: {selectedAssemblie.type_connector_a}</div>
                </DetailItem>
                <DetailItem>
                  <div>
                    Assemblage: {selectedAssemblie.assemblage_connector_a}
                  </div>
                  <div>Prijs: {selectedAssemblie.prijs_connector_a}</div>
                </DetailItem>
                <DetailItem>
                  <div>
                    Afwerking product: {selectedAssemblie.afwerking_connector_a}
                  </div>
                  <div>
                    Afwerking artikelnummer:{" "}
                    {selectedAssemblie.artnr_afwerking_a}
                  </div>
                </DetailItem>
              </div>
              <div>
                <OrderTitle>
                  <div>Geselecteerde Connector B:</div>
                </OrderTitle>
                <OrderItem>
                  <div>{selectedAssemblie.details_connector_b} </div>
                </OrderItem>
                <DetailItem>
                  <div>
                    Artikelnummer: {selectedAssemblie.artnr_connector_b}
                  </div>
                  <div>Type: {selectedAssemblie.type_connector_b}</div>
                </DetailItem>
                <DetailItem>
                  <div>
                    Assemblage: {selectedAssemblie.assemblage_connector_b}
                  </div>
                  <div>Prijs: {selectedAssemblie.prijs_connector_b}</div>
                </DetailItem>
                <DetailItem>
                  <div>
                    Afwerking product: {selectedAssemblie.afwerking_connector_b}
                  </div>
                  <div>
                    Afwerking artikelnummer:{" "}
                    {selectedAssemblie.artnr_afwerking_b}
                  </div>
                </DetailItem>
              </div>
              <div>
                <OrderTitle>
                  <div>Geselecteerde Haspel:</div>
                </OrderTitle>
                <OrderItem>
                  <div>{selectedAssemblie.details_haspel} </div>
                </OrderItem>
                <DetailItem>
                  <div>Type: {selectedAssemblie.type_haspel}</div>{" "}
                  <div>Artikelnummer: {selectedAssemblie.artnr_haspel} </div>
                </DetailItem>
                <DetailItem>
                  <div>Prijs: {selectedAssemblie.prijshaspel} </div>
                </DetailItem>
              </div>
              <div>
                <OrderTitle>
                  <div>Geselecteerde Afwerking:</div>
                </OrderTitle>
                <OrderItem>
                  <div>{selectedAssemblie.trans_krimp} </div>
                </OrderItem>
                <DetailItem>
                  <div>
                    Krimpkous Artikelnummer:{" "}
                    {selectedAssemblie.artnr_trans_krimp}
                  </div>
                  <div>
                    Lengte krimpkous: {selectedAssemblie.lengte_trans_krimp}{" "}
                  </div>
                </DetailItem>
              </div>
              <div>
                <ConfirmButton onClick={createOrder}>
                  Ga verder met assemblie
                </ConfirmButton>
              </div>
            </ProductGrid3>
          </ProductStyled>
        </>
      ) : null}
    </>
  );
}

export default AssemblieDetailsOrder;
