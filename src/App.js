import React from "react";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Home from "./componentes/Home";
import Details from "./componentes/Details";
import { PokedexContextProvider } from "./contexts/PokedexContext";

const App = () => {
  return (
    <HashRouter>
      <PokedexContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id/:slug" element={<Details />} />
        </Routes>
      </PokedexContextProvider>
    </HashRouter>
  );
};

export default App;
