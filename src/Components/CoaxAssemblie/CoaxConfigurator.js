import React from "react";
// import { AssemblieContextProvider } from "../../Hooks/Context/AssemblieContext";

// import AssemblieDetails from "./Assemblie/AssemblieDetails";
// import AssemblieDetailsOrder from "./Assemblie/AssemblieDetailsOrder";
import Cable from "./Cable/Cable";
import Connector from "./Connector/Connector";
import ConnectorB from "./Connector/ConnectorB";
import Haspel from "./Haspel/Haspel";
import Afwerking from "./Afwerking/Afwerking";
// import { Order } from "./Order/Order";
// import { useOrders } from "../../Hooks/useOrders";
// import {
//   ProductHeader,
//   ProductContent,
//   ProductStyled,
// } from "../../Styles/ProductStyle";

function CoaxConfigurator() {
  // const assemblies = [];
  // const orders = useOrders();
  return (
    <>
      {/* <AssemblieContextProvider assemblies={assemblies}>
        <div>
          <AssemblieDetails />
        </div> */}
      <Cable />
      <Connector />
      <ConnectorB />

      <Haspel />

      <Afwerking />
      {/* <div>
          <AssemblieDetailsOrder />
        </div>
      </AssemblieContextProvider> */}
    </>
  );
}

export default CoaxConfigurator;
