import React from "react";
import { AssemblieContextProvider } from "../../Hooks/Context/AssemblieContext";
import Cable from "./Cable/Cable";
import Connector from "./Connector/Connector";
import AssemblieDetails from "./Assemblie/AssemblieDetails";
import ConnectorB from "./Connector/ConnectorB";
import Haspel from "./Haspel/Haspel";
import Afwerking from "./Afwerking/Afwerking";
import { Order } from "./Order/Order";
import { useOrders } from "../../Hooks/useOrders";

function CoaxAssemblie() {
  const assemblies = [];
  const orders = useOrders();
  return (
    <>
      <AssemblieContextProvider assemblies={assemblies}>
        <div>
          {/* <Order {...orders} /> */}
          <AssemblieDetails />
        </div>
        <Cable />
        <Connector {...orders} />
        <ConnectorB {...orders} />
        <Haspel {...orders} />
        <Afwerking {...orders} />
      </AssemblieContextProvider>
    </>
  );
}

export default CoaxAssemblie;
