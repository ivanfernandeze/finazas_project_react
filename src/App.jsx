import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./shared/components/NavBar";
import Home from "./shared/ui/Home";
import About from "./shared/ui/About";
import FactorFRC from "./pages/factor_frc/FactorFRC";
import FactorFCS from "./pages/factor_fcs/FactorFCS";
import FactorFDA from "./pages/factor_fda/FactorFDA";
import RoaRoe from "./pages/roa_roe/roa_roe";

function App() {
  return (
    <>
      {/* NAVEGACION */}
      <NavBar />

      {/* CONTENIDO */}
      <main className="w-[95%] mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/factorFRC" element={<FactorFRC />} />
          <Route path="/factorFCS" element={<FactorFCS />} />
          <Route path="/factorFDA" element={<FactorFDA />} />
          <Route path="/roa-roe" element={<RoaRoe />} />
          {/* <Route path="/liquidez" element={<Liquidez />} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
