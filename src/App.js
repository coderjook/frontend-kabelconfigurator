import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { Banner } from "./Components/Banner/Banner";
import CoaxAssemblie from "./Components/CoaxAssemblie/CoaxAssemblie";

// import styles
import { GlobalStyle } from "./Styles/GlobalStyle";

// ***** functie App *****

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <CoaxAssemblie />
    </>
  );
}

export default App;
