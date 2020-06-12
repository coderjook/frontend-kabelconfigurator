import React, { useContext, useState } from "react";

import axios from "axios";
import { useFetch } from "../../../Hooks/useFetch";
import Spinner from "../../../Utils/Spinner";

import { formatPrice } from "../../../Utils/FormatPrice";
import {
  DetailsOrderGrid9,
  DetailsOrderStyled,
  AssemblieOrdersHeader,
  DetailsOrderTitle,
  DetailsOrderFooter,
  DetailsOrderFinalPrice,
} from "../../../Styles/OrderStyle";
import { ConfirmButton } from "../../../Styles/ButtonStyle";

export const AssemblieOrders = () => {
  const [assemblieOrders, setAssemblieOrders] = useState([]);

  const [data, isLoading, isError] = useFetch(
    "http://localhost:8080/api/kabelconfigurator/assemblie",
    []
  );

  //check op errors en loading
  if (isError) return <div>something went wrong</div>;
  if (isLoading) return <Spinner />;

  const deleteAssemblie = (id) => {
    axios
      .delete("http://localhost:8080/api/kabelconfigurator/assemblie/" + id)
      .then((res) => {
        console.log("weggegooid!!");
      });
  };

  return (
    <>
      <DetailsOrderStyled>
        <AssemblieOrdersHeader>
          <div>Artnr. assemblie</div>
          <div>Artnr. kabel</div>
          <div>lengte (meter)</div>
          <div>Artnr. Connector A</div>
          <div>Artnr. Afwerking A</div>
          <div>Artnr. Connector B</div>
          <div>Artnr. Afwerking B</div>
          <div>Artnr. Haspel</div>
          <div>Afwerking assemblie (cm)</div>
        </AssemblieOrdersHeader>
        {data.map((assemblie, index) => {
          return (
            <>
              <DetailsOrderGrid9>
                <div>
                  {assemblie.id_assemblie}
                  <button
                    onClick={() => {
                      deleteAssemblie(assemblie.id_assemblie);
                    }}
                  >
                    Delete
                  </button>{" "}
                </div>
                <div>{assemblie.artnr_kabel}</div>
                <div>{assemblie.lengte_kabel}</div>
                <div>{assemblie.artnr_connector_a}</div>
                <div>{assemblie.artnr_afw_conn_a}</div>
                <div>{assemblie.artnr_connector_b}</div>
                <div>{assemblie.artnr_afw_conn_b}</div>
                <div>{assemblie.artnr_haspel}</div>
                <div>
                  {assemblie.trans_krimp} ||
                  {assemblie.lengte_trans_krimp}
                </div>
              </DetailsOrderGrid9>
            </>
          );
        })}
      </DetailsOrderStyled>
    </>
  );
};

export default AssemblieOrders;
