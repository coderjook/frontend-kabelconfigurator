import React from "react";
import { Router, Link } from "@reach/router";
import { AssemblieContextProvider } from "./Hooks/Context/AssemblieContext";
import { Navbar } from "./Components/Navbar/Navbar";
import { Banner } from "./Components/Banner/Banner";
import CoaxAssemblie from "./Components/CoaxAssemblie/CoaxAssemblie";
import Test from "./Components/CoaxAssemblie/Assemblie/Test";
import AssemblieDetailsOrder from "./Components/CoaxAssemblie/Assemblie/AssemblieDetailsOrder";

// import styles
import { GlobalStyle } from "./Styles/GlobalStyle";

// ***** functie App *****

function App() {
  const assemblies = [];
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <AssemblieContextProvider assemblies={assemblies}>
        <Router>
          <CoaxAssemblie path="/" />
          <AssemblieDetailsOrder path="detailsOrder" />
        </Router>
      </AssemblieContextProvider>
    </>
  );
}

export default App;
