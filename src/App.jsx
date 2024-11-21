import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './shared/components/NavBar'
import Home from './shared/ui/Home'
import About from './shared/ui/About'
import FactorFRC from './pages/factor_frc/FactorFRC'
import FactorFAS from './pages/factor_fas/FactorFAS'



function App() {

  return (
    <>
      {/* NAVEGACION */}
      <NavBar />

      {/* CONTENIDO */}
      <main className='w-[95%] mx-auto'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/factorFRC" element={<FactorFRC />} />
          <Route path="/factorFAS" element={<FactorFAS />} />
          {/* <Route path="/liquidez" element={<Liquidez />} /> */}
  
          <Route path="/RatioGestion" element={<RatioGestion />} />
          <Route path='/ratio-rentabilidad' element={<RatioRentabilidad />} />
          <Route path='/ratio-liquidez' element={<RatioLiquidez />} />
          <Route path='/ratio-solvencia' element={<RatioSolvencia />} />
          <Route path='/ratio-solvencia' element={<RatioSolvencia />} />
        </Routes>
      </main>
    </>
  )
}

export default App
