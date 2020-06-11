import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Context = createContext({});

export const Provider = (props) => {
  // Initial values are obtained from the props
  const {
    assemblies: initialAssemblies,
    selectedAssemblie: initialSelectedAssemblie,
    children,
  } = props;

  // Use State to keep the values
  const [assemblies, setAssemblies] = useState(initialAssemblies);
  const [selectedAssemblie, setSelectedAssemblie] = useState(
    initialSelectedAssemblie
  );

  const defaultArtnr = 999999;
  const addNewAssemblie = (
    artnrCable,
    detailsCable,
    lengthCable,
    groupCable,
    priceCable,
    diameterCable,
    maxLengthCable,
    haspelCable
  ) => {
    const newAssemblie = {
      assemblieID: uuidv4(),
      artnr_kabel: artnrCable,
      details_kabel: detailsCable,
      lengte_kabel: lengthCable,
      kabelgroep_kabel: groupCable,
      prijs_kabel: priceCable,
      diameter_buitenmantel: diameterCable,
      opmaak_aantal: maxLengthCable,
      haspelgeschikt: haspelCable,

      artnr_connector_a: defaultArtnr,
      details_connector_a: "",
      type_connector_a: "",
      assemblage_connector_a: "",
      prijs_connector_a: 0,
      afwerking_connector_a: "geen",
      artnr_afwerking_a: defaultArtnr,

      artnr_connector_b: defaultArtnr,
      details_connector_b: "",
      type_connector_b: "",
      assemblage_connector_b: "",
      prijs_connector_b: 0,
      afwerking_connector_b: "geen",
      artnr_afwerking_b: defaultArtnr,

      artnr_haspel: defaultArtnr,
      details_haspel: "",
      type_haspel: "",
      prijshaspel: 0,

      trans_krimp: "kies afwerking",
      lengte_trans_krimp: 0,
      prijs_krimp: 0,
      artnr_trans_krimp: defaultArtnr,
    };
    setAssemblies(newAssemblie);
    setSelectedAssemblie(newAssemblie);
  };

  const UpdateAssemblieCable = (
    artnrCable,
    detailsCable,
    lengthCable,
    groupCable,
    priceCable,
    diameterCable,
    maxLengthCable,
    haspelCable
  ) => {
    const updateAssemblie = {
      ...assemblies,
    };

    updateAssemblie.artnr_kabel = artnrCable;
    updateAssemblie.details_kabel = detailsCable;
    updateAssemblie.lengte_kabel = lengthCable;
    updateAssemblie.kabelgroep_kabel = groupCable;
    updateAssemblie.prijs_kabel = priceCable;
    updateAssemblie.diameter_buitenmantel = diameterCable;
    updateAssemblie.opmaak_aantal = maxLengthCable;
    updateAssemblie.haspelgeschikt = haspelCable;

    updateAssemblie.artnr_connector_a = defaultArtnr;
    updateAssemblie.details_connector_a = "";
    updateAssemblie.type_connector_a = "";
    updateAssemblie.assemblage_connector_a = "";
    updateAssemblie.prijs_connector_a = 0;
    updateAssemblie.afwerking_connector_a = "geen";
    updateAssemblie.artnr_afwerking_a = defaultArtnr;

    updateAssemblie.artnr_connector_b = defaultArtnr;
    updateAssemblie.details_connector_b = "";
    updateAssemblie.type_connector_b = "";
    updateAssemblie.assemblage_connector_b = "";
    updateAssemblie.prijs_connector_b = 0;
    updateAssemblie.afwerking_connector_b = "geen";
    updateAssemblie.artnr_afwerking_b = defaultArtnr;

    setAssemblies(updateAssemblie);
    setSelectedAssemblie(updateAssemblie);
  };

  const UpdateAssemblieCableLength = (lengthCable) => {
    const updateAssemblie = {
      ...assemblies,
    };
    updateAssemblie.lengte_kabel = lengthCable;
    setAssemblies(updateAssemblie);
    setSelectedAssemblie(updateAssemblie);
  };

  const UpdateAssemblieConnA = (
    artnrConnA,
    detailsConnA,
    typeConnA,
    assemblageConnA,
    prijsConnA,
    installationConnA,
    artnrInstallationConnA
  ) => {
    const updateAssemblie = {
      ...assemblies,
    };
    updateAssemblie.artnr_connector_a = artnrConnA;
    updateAssemblie.details_connector_a = detailsConnA;
    updateAssemblie.type_connector_a = typeConnA;
    updateAssemblie.assemblage_connector_a = assemblageConnA;
    updateAssemblie.prijs_connector_a = prijsConnA;
    updateAssemblie.afwerking_connector_a = installationConnA;
    updateAssemblie.artnr_afwerking_a = artnrInstallationConnA;

    setAssemblies(updateAssemblie);
    setSelectedAssemblie(updateAssemblie);
  };

  const UpdateAssemblieConnB = (
    artnrConnB,
    detailsConnB,
    typeConnB,
    assemblageConnB,
    prijsConnB,
    installationConnB,
    artnrInstallationConnB
  ) => {
    const updateAssemblie = {
      ...assemblies,
    };
    updateAssemblie.artnr_connector_b = artnrConnB;
    updateAssemblie.details_connector_b = detailsConnB;
    updateAssemblie.type_connector_b = typeConnB;
    updateAssemblie.assemblage_connector_b = assemblageConnB;
    updateAssemblie.prijs_connector_b = prijsConnB;
    updateAssemblie.afwerking_connector_b = installationConnB;
    updateAssemblie.artnr_afwerking_b = artnrInstallationConnB;

    setAssemblies(updateAssemblie);
    setSelectedAssemblie(updateAssemblie);
  };

  const UpdateAssemblieHaspel = (
    artnrHaspel,
    detailsHaspel,
    typeHaspel,
    prijsHaspel
  ) => {
    const updateAssemblie = {
      ...assemblies,
    };
    updateAssemblie.artnr_haspel = artnrHaspel;
    updateAssemblie.details_haspel = detailsHaspel;
    updateAssemblie.type_haspel = typeHaspel;
    updateAssemblie.prijshaspel = prijsHaspel;

    setAssemblies(updateAssemblie);
    setSelectedAssemblie(updateAssemblie);
  };

  const UpdateAssemblieAfwerking = (lengthKrimp, transKrimp, prijs_krimp) => {
    const updateAssemblie = {
      ...assemblies,
    };
    updateAssemblie.trans_krimp = transKrimp;
    updateAssemblie.lengte_trans_krimp = lengthKrimp;
    updateAssemblie.prijs_krimp = prijs_krimp;
    // updateAssemblie.artnr_trans_krimp = artnrKrimp;
    setAssemblies(updateAssemblie);
    setSelectedAssemblie(updateAssemblie);
  };

  // Make the context object:
  const assemblieContext = {
    assemblies,
    setAssemblies,
    selectedAssemblie,
    setSelectedAssemblie,
    addNewAssemblie,
    UpdateAssemblieCable,
    UpdateAssemblieCableLength,
    UpdateAssemblieConnA,
    UpdateAssemblieConnB,
    UpdateAssemblieHaspel,
    UpdateAssemblieAfwerking,
  };

  // pass the value in provider and return
  return (
    <Context.Provider value={assemblieContext}>{children}</Context.Provider>
  );
};

export const { Consumer } = Context;

export {
  Context as AssemblieContext,
  Provider as AssemblieContextProvider,
  Consumer as AssemblieContextConsumer,
};
