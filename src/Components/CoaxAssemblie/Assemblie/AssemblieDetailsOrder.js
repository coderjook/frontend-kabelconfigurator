import React, { useContext, useState } from "react";
import { Link } from "@reach/router";
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";
import { formatPrice } from "../../../Utils/FormatPrice";
import {
  OrderTitle,
  DetailsOrderGrid4,
  DetailsOrderStyled,
  DetailsOrderTitle,
  DetailsOrderFooter,
  DetailsOrderFinalPrice,
} from "../../../Styles/OrderStyle";
import { ConfirmButton } from "../../../Styles/ButtonStyle";

let subPriceMaterial = null;
const getSubPriceMaterial = (selectedAssemblie, aantalAssemblies) => {
  subPriceMaterial =
    (selectedAssemblie.prijs_kabel +
      selectedAssemblie.prijs_connector_a +
      selectedAssemblie.prijs_connector_b +
      selectedAssemblie.prijshaspel +
      selectedAssemblie.prijs_krimp) *
    aantalAssemblies;

  return subPriceMaterial;
};

let margePriceMaterial = 0.6;
let totalPriceMaterial = null;
const getTotalPriceMaterial = (subPriceMaterial, margePriceMaterial) => {
  totalPriceMaterial = subPriceMaterial / margePriceMaterial;
  return totalPriceMaterial;
};

let costSpoel = 0.1;
let costConnector = 2.0;
let costHaspel = 35.0;
let costBos = 25.0;
let priceLaborBos = null;
let priceLaborHaspel = null;

const getPriceLaborBos = (selectedAssemblie, aantalAssemblies) => {
  const kostenSpoel =
    costSpoel * selectedAssemblie.lengte_kabel * aantalAssemblies;
  const aantConnector = selectedAssemblie.artnr_connector_b === 999999 ? 1 : 2;
  const kostenConnectors = aantConnector * aantalAssemblies * costConnector;
  const kostenBos = costBos * 1;
  priceLaborBos = kostenSpoel + kostenConnectors + kostenBos;
  return priceLaborBos;
};

const getPriceLaborHaspel = (selectedAssemblie, aantalAssemblies) => {
  const kostenSpoel =
    costSpoel * selectedAssemblie.lengte_kabel * aantalAssemblies;
  const kostenHaspel = costHaspel * aantalAssemblies;
  priceLaborHaspel = kostenSpoel + kostenHaspel;
  return priceLaborHaspel;
};

const calcAssemblieBos = (totalPriceMaterial, priceLaborBos) => {
  const totalBos = totalPriceMaterial + priceLaborBos;
  return totalBos;
};

const calcAssemblieHaspel = (totalPriceMaterial, priceLaborHaspel) => {
  const totalHaspel = totalPriceMaterial + priceLaborHaspel;
  return totalHaspel;
};

function AssemblieDetailsOrder() {
  const { selectedAssemblie } = useContext(AssemblieContext);
  const [aantalAssemblies, setAantalAssemblies] = useState(1);
  const [totalCostMaterial, setTotalCostMaterial] = useState();
  const [totalCostLabor, setTotalCostLabor] = useState();
  const [totalCostAssemblie, setTotalCostAssemblie] = useState(1);
  const [orderAssemblie, setOrderAssemblie] = useState([]);

  const handleChange = (event) => {
    setAantalAssemblies(event.target.value);
    orderAssemblieBos(totalPriceMaterial, priceLaborBos);
  };

  const orderAssemblieBos = (totalPriceMaterial, priceLaborBos) => {
    setTotalCostMaterial(totalPriceMaterial);
    setTotalCostLabor(priceLaborBos);
    const totalBos = totalPriceMaterial + priceLaborBos;
    setTotalCostAssemblie(totalBos);
    addToOrder();
    console.log(
      "orderAssemblieOrder",
      totalCostMaterial,
      totalCostLabor,
      totalCostAssemblie
    );
  };

  const totalOrderAssemblie = (totalPriceMaterial, priceLabor) => {
    setTotalCostMaterial(totalPriceMaterial);
    setTotalCostLabor(priceLabor);
    const totalOrder = totalPriceMaterial + priceLabor;
    setTotalCostAssemblie(totalOrder);
    addToOrder();
    console.log(
      "orderAssemblieHaspel",
      totalCostMaterial,
      totalCostLabor,
      totalCostAssemblie
    );
  };
  let order = null;

  function addToOrder() {
    order = {
      assemblieID: selectedAssemblie.assemblieID,
      totalCostMaterial: totalCostMaterial,
      totalCostLabor: totalCostLabor,
      totalCostAssemblie: totalCostAssemblie,
      aantalAssemblies: aantalAssemblies,
    };
    setOrderAssemblie(order);
    console.log(
      "orderAssemblieHaspel",
      order.totalCostMaterial,
      order.totalCostLabor,
      order.totalCostAssemblie
    );
  }

  return (
    <>
      {selectedAssemblie ? (
        <>
          <DetailsOrderStyled>
            <DetailsOrderGrid4>
              <div>
                <h3>AssemblieNR:{selectedAssemblie.assemblieID} </h3>{" "}
              </div>
              <div>
                <h3>Aantal stuks: </h3>
                <input
                  type="text"
                  id="aantAssemblie"
                  name="aantAssemblie"
                  value={aantalAssemblies}
                  onChange={handleChange}
                />
              </div>
            </DetailsOrderGrid4>

            <DetailsOrderTitle>
              <div />
              <div>Materiaalkosten assemblie:</div>

              <div> prijs per 1 assemblie</div>
              <div>prijs per {aantalAssemblies} assemblie(s)</div>
            </DetailsOrderTitle>
            <DetailsOrderGrid4>
              <div>Kabel:</div>
              <div>
                <b>{selectedAssemblie.artnr_kabel}</b> |{" "}
                {selectedAssemblie.details_kabel} lengte:{" "}
                {selectedAssemblie.lengte_kabel} meter
              </div>
              <div>{formatPrice(selectedAssemblie.prijs_kabel)}</div>
              <div>
                {formatPrice(selectedAssemblie.prijs_kabel * aantalAssemblies)}
              </div>
            </DetailsOrderGrid4>

            <DetailsOrderGrid4>
              <div>Connector kant A:</div>
              <div>
                <b>{selectedAssemblie.artnr_connector_a}</b> |{" "}
                {selectedAssemblie.details_connector_a} Afwerking product:{" "}
                {selectedAssemblie.afwerking_connector_a}
              </div>
              <div>{formatPrice(selectedAssemblie.prijs_connector_a)}</div>
              <div>
                {formatPrice(
                  selectedAssemblie.prijs_connector_a * aantalAssemblies
                )}
              </div>
            </DetailsOrderGrid4>

            <DetailsOrderGrid4>
              <div>Connector kant B:</div>
              <div>
                {selectedAssemblie.artnr_connector_b === 999999 ? (
                  "geen connector op kant B"
                ) : (
                  <>
                    <b>{selectedAssemblie.artnr_connector_b}</b> |
                    {selectedAssemblie.details_connector_b} Afwerking product:{" "}
                    {selectedAssemblie.afwerking_connector_b}
                  </>
                )}
              </div>
              <div>{formatPrice(selectedAssemblie.prijs_connector_b)}</div>
              <div>
                {formatPrice(
                  selectedAssemblie.prijs_connector_b * aantalAssemblies
                )}
              </div>
            </DetailsOrderGrid4>

            <DetailsOrderGrid4>
              <div>Haspel:</div>
              <div>
                {selectedAssemblie.artnr_haspel === 999999 ? (
                  "geen Haspel gekozen, assemblie wordt op bos geleverd"
                ) : (
                  <>
                    {" "}
                    <b>{selectedAssemblie.artnr_haspel}</b> |{" "}
                    {selectedAssemblie.details_haspel}{" "}
                  </>
                )}
              </div>
              <div>{formatPrice(selectedAssemblie.prijshaspel)}</div>
              <div>
                {formatPrice(selectedAssemblie.prijshaspel * aantalAssemblies)}
              </div>
            </DetailsOrderGrid4>

            <DetailsOrderGrid4>
              <div>Afwerking:</div>
              <div>
                {selectedAssemblie.trans_krimp} Lengte krimpkous:{" "}
                {selectedAssemblie.lengte_trans_krimp}{" "}
              </div>
              <div>{formatPrice(selectedAssemblie.prijs_krimp)}</div>
              <div>
                {formatPrice(selectedAssemblie.prijs_krimp * aantalAssemblies)}
              </div>
            </DetailsOrderGrid4>

            <DetailsOrderFooter>
              <div />
              <div>subtotaal materiaalkosten Assemblie: </div>
              <div />
              <div>
                {formatPrice(
                  getSubPriceMaterial(selectedAssemblie, aantalAssemblies)
                )}
              </div>
              <div />
              <div>
                <b>
                  Totaal materiaalkosten Assemblie (marge: {margePriceMaterial}
                  ):{" "}
                </b>
              </div>
              <div />
              <div>
                <b>
                  {formatPrice(
                    getTotalPriceMaterial(subPriceMaterial, margePriceMaterial)
                  )}
                </b>
              </div>
            </DetailsOrderFooter>
          </DetailsOrderStyled>

          {selectedAssemblie.artnr_haspel === 999999 ? (
            <>
              <DetailsOrderStyled>
                <DetailsOrderTitle>
                  <div />
                  <div>arbeidskosten assemblie op bos:</div>
                  <div> prijs per 1 assemblie</div>
                  <div>prijs per {aantalAssemblies} assemblie(s)</div>
                </DetailsOrderTitle>
                <DetailsOrderGrid4>
                  <div>Spoelkosten:</div>
                  <div>
                    {selectedAssemblie.lengte_kabel} meter kabel *{" "}
                    {aantalAssemblies} assemblie(s) x {formatPrice(0.1)}
                  </div>
                  <div />
                  <div>
                    {formatPrice(
                      selectedAssemblie.lengte_kabel * aantalAssemblies * 0.1
                    )}
                  </div>
                </DetailsOrderGrid4>

                <DetailsOrderGrid4>
                  <div>Instelkosten Bos:</div>
                  <div>
                    eenmalig: {formatPrice(25.0)} (kosten per assemblie{" "}
                    {formatPrice(25.0 / aantalAssemblies)} )
                  </div>
                  <div />
                  <div>{formatPrice(25)}</div>
                </DetailsOrderGrid4>

                <DetailsOrderGrid4>
                  <div>Aanzetkosten connectoren</div>
                  <div>
                    {selectedAssemblie.artnr_connector_b === 999999
                      ? "1 connector"
                      : "2 connectoren"}{" "}
                    x {aantalAssemblies} assemblie(s) x {formatPrice(2.0)}
                  </div>
                  <div />
                  <div>
                    {formatPrice(
                      (selectedAssemblie.artnr_connector_b === 999999 ? 1 : 2) *
                        aantalAssemblies *
                        2
                    )}
                  </div>
                </DetailsOrderGrid4>

                <DetailsOrderFooter>
                  <div />
                  <div>
                    <b>Totaal arbeidskosten Assemblie op bos</b>
                  </div>
                  <div />
                  <div>
                    {formatPrice(
                      getPriceLaborBos(selectedAssemblie, aantalAssemblies)
                    )}
                  </div>
                </DetailsOrderFooter>
                <DetailsOrderFinalPrice>
                  <div />
                  <div>
                    <b>TOTAALPRIJS ASSEMBLIE</b>
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        orderAssemblieBos(totalPriceMaterial, priceLaborBos)
                      }
                    >
                      bereken prijs
                    </button>
                    <button onClick={addToOrder}> voeg toe aan order</button>
                    <div>
                      {orderAssemblie ? (
                        <>
                          <div>Hallo dit is je order:</div>
                          <div>{orderAssemblie.totalCostMaterial}</div>
                        </>
                      ) : (
                        <div>nog geen order geplaatst</div>
                      )}
                      M:{totalCostMaterial}
                      A:{totalCostLabor}
                      T:{totalCostAssemblie} Bereken de totaalprijs
                    </div>
                  </div>
                  <div>
                    {formatPrice(
                      calcAssemblieBos(totalPriceMaterial, priceLaborBos)
                    )}
                  </div>
                </DetailsOrderFinalPrice>
              </DetailsOrderStyled>
            </>
          ) : (
            <>
              <DetailsOrderStyled>
                <DetailsOrderTitle>
                  <div />
                  <div>arbeidskosten assemblie op haspel:</div>
                  <div> prijs per 1 assemblie</div>
                  <div>prijs per {aantalAssemblies} assemblie(s)</div>
                </DetailsOrderTitle>
                <DetailsOrderGrid4>
                  <div>Spoelkosten:</div>
                  <div>
                    {selectedAssemblie.lengte_kabel} meter kabel *{" "}
                    {aantalAssemblies} assemblie(s) x {formatPrice(0.1)}
                  </div>
                  <div />
                  <div>
                    {formatPrice(
                      selectedAssemblie.lengte_kabel * aantalAssemblies * 0.1
                    )}
                  </div>
                </DetailsOrderGrid4>

                <DetailsOrderGrid4>
                  <div>Instelkosten haspel:</div>
                  <div>per haspel {formatPrice(35.0)} </div>
                  <div />
                  <div>{formatPrice(35.0 * aantalAssemblies)}</div>
                </DetailsOrderGrid4>

                <DetailsOrderGrid4>
                  <div />
                  <div>Aanzetkosten connectoren inclusief</div>
                  <div />
                  <div />
                </DetailsOrderGrid4>

                <DetailsOrderFooter>
                  <div />
                  <div>
                    <b>Totaal arbeidskosten Assemblie op Haspel</b>
                  </div>
                  <div />
                  <div>
                    <b>
                      {formatPrice(
                        getPriceLaborHaspel(selectedAssemblie, aantalAssemblies)
                      )}
                    </b>
                  </div>
                </DetailsOrderFooter>
                <DetailsOrderFinalPrice>
                  <div />
                  <div>
                    <b>TOTAALPRIJS ASSEMBLIE</b>
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        totalOrderAssemblie(
                          totalPriceMaterial,
                          priceLaborHaspel
                        )
                      }
                    >
                      bereken prijs
                    </button>
                    <button onClick={addToOrder}> voeg toe aan order</button>
                    <div>
                      {orderAssemblie ? (
                        <>
                          <div>Hallo dit is je hashpelorder:</div>
                          <div>{orderAssemblie.totalCostMaterial}</div>
                        </>
                      ) : (
                        <div>nog geen order geplaatst</div>
                      )}
                      M:{totalCostMaterial}
                      A:{totalCostLabor}
                      T:{totalCostAssemblie} Bereken de totaalprijs
                    </div>
                  </div>
                  <div>
                    {formatPrice(
                      calcAssemblieHaspel(totalPriceMaterial, priceLaborHaspel)
                    )}
                  </div>
                </DetailsOrderFinalPrice>
              </DetailsOrderStyled>
            </>
          )}
        </>
      ) : (
        <Link to="/">
          <div>Maak een nieuwe assemblie aan</div>
        </Link>
      )}
    </>
  );
}

export default AssemblieDetailsOrder;
