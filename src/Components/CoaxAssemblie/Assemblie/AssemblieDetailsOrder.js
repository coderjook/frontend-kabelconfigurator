import React, { useContext, useState } from "react";
import { Link } from "@reach/router";
import { AssemblieContext } from "../../../Hooks/Context/AssemblieContext";
import {
  OrderTitle,
  DetailsOrderGrid3,
  DetailsOrderStyled,
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

function AssemblieDetailsOrder() {
  const [aantalAssemblies, setAantalAssemblies] = useState(1);
  const [spoelkosten, setSpoelkosten] = useState(0.1);
  const [instelkostenBos, setInstelkostenBos] = useState(1);
  const [kostenConnectors, setKostenConnector] = useState(1);
  const [instelkostenHapsel, setInstelkostenHaspel] = useState(1);
  const { selectedAssemblie } = useContext(AssemblieContext);

  const handleChange = (event) => {
    setAantalAssemblies(event.target.value);
    calcArbeid();
  };

  const calcArbeid = () => {
    const spoel = 0.1 * aantalAssemblies * selectedAssemblie.lengte_kabel;
    setSpoelkosten(spoel);
    const instelBos = 25 * aantalAssemblies;
    setInstelkostenBos(instelBos);
    const aantConnector =
      selectedAssemblie.artnr_connector_b === 999999 ? 1 : 2;
    const kostConnector = aantConnector * aantalAssemblies * 2;
    setKostenConnector(kostConnector);
    return { spoelkosten, instelkostenBos, kostenConnectors };
  };

  // const calcSpoel = (aantalAssemblies) => {
  //   const spoel = 0.1 * aantalAssemblies * selectedAssemblie.lengte_kabel;
  //   setSpoelkosten(spoel);
  //   return spoelkosten;
  // };

  // const calcInstel = (aantalAssemblies) => {
  //   const instelBos = 25 * aantalAssemblies;
  //   setInstelkostenBos(instelBos);
  // };

  return (
    <>
      <Link to="/">
        <div>Maak een nieuwe assemblie aan</div>
      </Link>
      {selectedAssemblie ? (
        <>
          <DetailsOrderStyled>
            <DetailsOrderGrid3>
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
                <button onClick={calcArbeid}> klik</button>
              </div>
            </DetailsOrderGrid3>

            <OrderTitle>
              <DetailsOrderGrid3>
                <div>Opbouwmateriaalkosten kabel:</div>
                <div />
              </DetailsOrderGrid3>
            </OrderTitle>
            <DetailsOrderGrid3>
              <div>Kabel:</div>
              <div>
                {selectedAssemblie.details_kabel} lengte:{" "}
                {selectedAssemblie.lengte_kabel} meter
              </div>
              <div>{selectedAssemblie.prijs_kabel}</div>
            </DetailsOrderGrid3>

            <DetailsOrderGrid3>
              <div>Connector kant A:</div>
              <div>
                <b>{selectedAssemblie.artnr_connector_a}</b> |{" "}
                {selectedAssemblie.details_connector_a} Afwerking product:{" "}
                {selectedAssemblie.afwerking_connector_a}
              </div>
              <div>{selectedAssemblie.prijs_connector_a}</div>
            </DetailsOrderGrid3>

            <DetailsOrderGrid3>
              <div>Connector kant B:</div>
              <div>
                <b>{selectedAssemblie.artnr_connector_b}</b> |{" "}
                {selectedAssemblie.details_connector_b} Afwerking product:{" "}
                {selectedAssemblie.afwerking_connector_b}
              </div>
              <div>{selectedAssemblie.prijs_connector_b}</div>
            </DetailsOrderGrid3>

            <DetailsOrderGrid3>
              <div>Haspel:</div>
              <div>
                {" "}
                <b>{selectedAssemblie.artnr_haspel}</b> |{" "}
                {selectedAssemblie.details_haspel}{" "}
              </div>
              <div>{selectedAssemblie.prijshaspel}</div>
            </DetailsOrderGrid3>

            <DetailsOrderGrid3>
              <div>Afwerking:</div>
              <div>
                {selectedAssemblie.trans_krimp} Lengte krimpkous:{" "}
                {selectedAssemblie.lengte_trans_krimp}{" "}
              </div>
              <div>{selectedAssemblie.prijs_krimp}</div>
            </DetailsOrderGrid3>

            <OrderTitle>
              <DetailsOrderGrid3>
                <div />
                <div>subtotaal materiaalkosten Assemblie: </div>
                <div>
                  {getSubPriceMaterial(selectedAssemblie, aantalAssemblies)}
                </div>
                <div />
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
              </DetailsOrderGrid3>
            </OrderTitle>
          </DetailsOrderStyled>

          <DetailsOrderStyled>
            <OrderTitle>
              <DetailsOrderGrid3>
                <div>arbeidskosten assemblie op bos:</div>
                <div />
              </DetailsOrderGrid3>
            </OrderTitle>
            <DetailsOrderGrid3>
              <div>Spoelkosten:</div>
              <div>
                {selectedAssemblie.lengte_kabel} meter kabel *{" "}
                {aantalAssemblies} assemblie(s) x 0.10
              </div>
              <div>{spoelkosten}</div>
            </DetailsOrderGrid3>

            <DetailsOrderGrid3>
              <div>Instelkosten:</div>
              <div>{aantalAssemblies} assemblie(s) x 25.00</div>
              <div>{instelkostenBos}</div>
            </DetailsOrderGrid3>

            <DetailsOrderGrid3>
              <div>Aanzetkosten connectoren</div>
              <div>
                {selectedAssemblie.artnr_connector_b === 999999
                  ? "1 connector"
                  : "2 connectoren"}{" "}
                x {aantalAssemblies} assemblie(s) x 2.00
              </div>
              <div>{kostenConnectors}</div>
            </DetailsOrderGrid3>

            <OrderTitle>
              <DetailsOrderGrid3>
                <div />
                <div>subtotaal arbeidkosten Assemblie: </div>
                <div></div>
                <div />
                <div>
                  <b>
                    Totaal arbeidskosten Assemblie op bos (marge:{" "}
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
              </DetailsOrderGrid3>
            </OrderTitle>
          </DetailsOrderStyled>
        </>
      ) : (
        <div>ik zie bijna niks</div>
      )}
    </>
  );
}

export default AssemblieDetailsOrder;
