import React, { useContext } from "react";
import {
  AssemblieContextProvider,
  AssemblieContext,
} from "../../Hooks/Context/AssemblieContext";
import Cable from "./Cable/Cable";
import Connector from "./Connector/Connector";
import AssemblieDetails from "./Assemblie/AssemblieDetails";
import ConnectorB from "./Connector/ConnectorB";
import Haspel from "./Haspel/Haspel";
import Afwerking from "./Afwerking/Afwerking";
import { Order } from "./Order/Order";
import { useOrders } from "../../Hooks/useOrders";
import {
  ProductHeader,
  ProductContent,
  ProductStyled,
} from "../../Styles/ProductStyle";

function CoaxAssemblie() {
  const { selectedAssemblie } = useContext(AssemblieContext);
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

        <Haspel />

        <Afwerking {...orders} />
      </AssemblieContextProvider>
    </>
  );
}

export default CoaxAssemblie;
