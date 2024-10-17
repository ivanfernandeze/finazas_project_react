import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './shared/components/NavBar'
import Home from './shared/ui/Home'
import About from './shared/ui/About'
import FactorFRC from './pages/factor_frc/FactorFRC'


function App() {

  return (
    <>
      {/* NAVEGACION */}
      <NavBar />

      {/* CONTENIDO */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/factorFRC" element={<FactorFRC />} />
      </Routes>
    </>
  )
}

export default App
