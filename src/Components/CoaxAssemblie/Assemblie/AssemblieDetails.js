import React, { useContext } from "react";
import { Link } from "@reach/router";
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";
import { makePostRequestAssemblie } from "../../../DataDb/PostRequestAssemblie";
import {
  OrderStyled,
  OrderHeader,
  OrderTitle,
  OrderContent,
  OrderContainer,
  OrderItem,
  DetailItem,
} from "../../../Styles/OrderStyle";
import { ConfirmButton } from "../../../Styles/ButtonStyle";

function AssemblieDetails() {
  // get the selectedAssemblie form the assemblieContext
  const { selectedAssemblie } = useContext(AssemblieContext);

  function createOrder() {
    const params = {
      // id_assemblie: selectedAssemblie.assemblieID, UUID wordt aangemaakt in db
      artnr_kabel: selectedAssemblie.artnr_kabel,
      lengte_kabel: selectedAssemblie.lengte_kabel,
      artnr_connector_a: selectedAssemblie.artnr_connector_a,
      artnr_connector_b: selectedAssemblie.artnr_connector_b,
      artnr_afw_conn_a: selectedAssemblie.artnr_afwerking_a,
      artnr_afw_conn_b: selectedAssemblie.artnr_afwerking_b,
      artnr_haspel: selectedAssemblie.artnr_haspel,
      trans_krimp: selectedAssemblie.trans_krimp,
      lengte_trans_krimp: selectedAssemblie.lengte_trans_krimp,
      artnr_assemblie: selectedAssemblie.artnr_assemblie,
    };

    makePostRequestAssemblie(params);
    console.log("ga verder met de order", params.id_assemblie);
  }

  return (
    <>
      {selectedAssemblie ? (
        <>
          <OrderStyled>
            <OrderContent>
              <OrderContainer>
                <OrderHeader>
                  Assemblie artikelnummer:{selectedAssemblie.artnr_assemblie}{" "}
                </OrderHeader>

                <OrderTitle>
                  <div>Geselecteerde kabel: </div>
                </OrderTitle>
                <OrderItem>
                  <div>{selectedAssemblie.details_kabel} </div>
                </OrderItem>
                <DetailItem>
                  <div>Artikelnummer: {selectedAssemblie.artnr_kabel} </div>
                  <div>Lengte: {selectedAssemblie.lengte_kabel} meter</div>
                </DetailItem>
                <DetailItem>
                  <div>Materiaalkosten: {selectedAssemblie.prijs_kabel}</div>
                  <div>Diameter: {selectedAssemblie.diameter_buitenmantel}</div>
                </DetailItem>
              </OrderContainer>

              <OrderContainer>
                {selectedAssemblie.artnr_connector_a === 999999 ? (
                  <>
                    {" "}
                    <OrderTitle>
                      <div>Geen Connector aan kant A geselecteerd:</div>
                    </OrderTitle>{" "}
                  </>
                ) : (
                  <>
                    <OrderTitle>
                      <div>Connector kant A:</div>
                    </OrderTitle>
                    <OrderItem>
                      <div>{selectedAssemblie.details_connector_a} </div>
                    </OrderItem>
                    <DetailItem>
                      <div>
                        Artikelnummer: {selectedAssemblie.artnr_connector_a}
                      </div>
                      <div>
                        Materiaalkosten: {selectedAssemblie.prijs_connector_a}
                      </div>
                    </DetailItem>
                    <DetailItem>
                      <div>
                        Afwerking product:{" "}
                        {selectedAssemblie.afwerking_connector_a}
                      </div>
                      <div>
                        Afwerking artikelnummer:{" "}
                        {selectedAssemblie.artnr_afwerking_a}
                      </div>
                    </DetailItem>
                  </>
                )}
              </OrderContainer>

              <OrderContainer>
                {selectedAssemblie.artnr_connector_b === 999999 ? (
                  <>
                    {" "}
                    <OrderTitle>
                      <div>Geen Connector aan kant B geselecteerd:</div>
                    </OrderTitle>{" "}
                  </>
                ) : (
                  <>
                    <OrderTitle>
                      <div>Connector kant B:</div>
                    </OrderTitle>
                    <OrderItem>
                      <div>{selectedAssemblie.details_connector_b} </div>
                    </OrderItem>
                    <DetailItem>
                      <div>
                        Artikelnummer: {selectedAssemblie.artnr_connector_b}
                      </div>
                      <div>
                        Materiaalkosten: {selectedAssemblie.prijs_connector_b}
                      </div>
                    </DetailItem>
                    <DetailItem>
                      <div>
                        Afwerking product:{" "}
                        {selectedAssemblie.afwerking_connector_b}
                      </div>
                      <div>
                        Afwerking artikelnummer:{" "}
                        {selectedAssemblie.artnr_afwerking_b}
                      </div>
                    </DetailItem>
                  </>
                )}
              </OrderContainer>

              <OrderContainer>
                {selectedAssemblie.artnr_haspel === 999999 ? (
                  <>
                    {" "}
                    <OrderTitle>
                      <div>Opmaak gebonden, geen Haspel geselecteerd</div>
                    </OrderTitle>{" "}
                  </>
                ) : (
                  <>
                    <OrderTitle>
                      <div>Geselecteerde Haspel:</div>
                    </OrderTitle>
                    <OrderItem>
                      <div>{selectedAssemblie.details_haspel} </div>
                    </OrderItem>
                    <DetailItem>
                      <div>
                        Artikelnummer: {selectedAssemblie.artnr_haspel}{" "}
                      </div>
                      <div>
                        Materiaalkosten: {selectedAssemblie.prijshaspel}{" "}
                      </div>
                    </DetailItem>
                  </>
                )}
              </OrderContainer>

              <OrderContainer>
                {selectedAssemblie.trans_krimp === "kies afwerking" ? (
                  <>
                    {" "}
                    <OrderTitle>
                      <div>Geen afwerking geselecteerd</div>
                    </OrderTitle>{" "}
                  </>
                ) : (
                  <>
                    <OrderTitle>
                      <div>
                        Geselecteerde Afwerking: {selectedAssemblie.trans_krimp}
                      </div>
                    </OrderTitle>

                    <DetailItem>
                      <div>
                        Krimpkous Artikelnummer:{" "}
                        {selectedAssemblie.artnr_trans_krimp}
                      </div>
                      <div>
                        Lengte krimpkous: {selectedAssemblie.lengte_trans_krimp}{" "}
                      </div>
                    </DetailItem>
                  </>
                )}
              </OrderContainer>
              <OrderContainer>
                <Link to="detailsOrder">
                  <ConfirmButton onClick={createOrder}>
                    Ga verder met deze assemblie
                  </ConfirmButton>
                </Link>
              </OrderContainer>
            </OrderContent>
          </OrderStyled>
        </>
      ) : null}
    </>
  );
}

export default AssemblieDetails;
