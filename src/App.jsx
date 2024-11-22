import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./shared/components/NavBar";
import Home from "./shared/ui/Home";
import About from "./shared/ui/About";
import FactorFRC from "./pages/factor_frc/FactorFRC";
import FactorFAS from './pages/factor_fas/FactorFAS'
import FactorFCS from "./pages/factor_fcs/FactorFCS";
import FactorFDA from "./pages/factor_fda/FactorFDA";
import FactorSimple from './pages/factor_simple/FactorSimple'
import FactorSA from './pages/factor_SA/FactorFSA'
import RatioGestion from './pages/ratio_gestion/RatioGestion'
import RatioRentabilidad from './pages/ratio_rentabilidad/RatioRentabilidad'
import RatioLiquidez from "./pages/ratio_liquidez/RatioLiquidez";
import RatioSolvencia from "./pages/ratio_solvencia/RatioSolvencia";
import Wacc from "./pages/wacc/Wacc";
import Eva from "./pages/eva/eva";
import Apalancamiento from "./pages/apalancamiento/apalancamiento";
import Bonos from "./pages/Bonos/Bonos"; 

function App() {
  return (
    <>
      {/* NAVEGACION */}
      <NavBar />

      {/* CONTENIDO */}
      <main className="w-[95%] mx-auto ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bonos" element={<Bonos />} />
          <Route path="/factorFRC" element={<FactorFRC />} />
          <Route path="/factorFAS" element={<FactorFAS />} />
          <Route path="/factorFCS" element={<FactorFCS />} />
          <Route path="/factorFDA" element={<FactorFDA />} />
          <Route path="/factorFSC" element={<FactorSimple />} />
          <Route path="/factorFSA" element={<FactorSA />} />
          {/* <Route path="/liquidez" element={<Liquidez />} /> */}

          <Route path="/RatioGestion" element={<RatioGestion />} />
          <Route path='/ratio-rentabilidad' element={<RatioRentabilidad />} />
          <Route path='/ratio-liquidez' element={<RatioLiquidez />} />
          <Route path='/ratio-solvencia' element={<RatioSolvencia />} />

          {/* SEGUNDA UNIDAD */}
          <Route path="/wacc" element={<Wacc />} />
          <Route path='/eva' element={<Eva />} />
          <Route path='/apalancamiento' element={<Apalancamiento />} />

        </Routes>
      </main>
    </>
  );
}

export default App;
