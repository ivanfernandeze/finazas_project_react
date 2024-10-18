import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import NavBar from './shared/components/NavBar'
import Home from './shared/ui/Home'
import About from './shared/ui/About'

import FactorSimple from './pages/factor_simple/FactorSimple'
import FactorSA from './pages/factor_SA/FactorFSA'

function App() {

  return (
    <>
      {/* NAVEGACION */}
      <NavBar />
      
      {/* CONTENIDO */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/factor-simple-c" element={<FactorSimple />} />
        <Route path="/factor-simple-a" element={<FactorSA />} />
      </Routes>
    </>
  )
}

export default App
