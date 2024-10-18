import { useState } from "react";
import FormulaCard from "./components/Card";

function RatioGestion() {
  const [resultados, setResultados] = useState({
    cxc: null,
    promCobro: null,
    cxp: null,
  });

  // Funciones de cálculo
  const calcularRotacionCXC = (ventas, promedioClientes) => {
    if (ventas && promedioClientes && promedioClientes !== 0) {
      return (ventas / promedioClientes).toFixed(2);
    }
    return null;
  };

  const calcularPeriodoPromedioCobro = (rotacionCXC) => {
    if (rotacionCXC && rotacionCXC !== 0) {
      return (360 / rotacionCXC).toFixed(2);
    }
    return null;
  };

  const calcularRotacionCXP = (comprasCredito, promedioProveedores) => {
    if (comprasCredito && promedioProveedores && promedioProveedores !== 0) {
      return (comprasCredito / promedioProveedores).toFixed(2);
    }
    return null;
  };

  // Manejar cálculos para cada ratio
  const handleCalcularCXC = () => {
    const ventas = parseFloat(document.getElementById("ventas").value);
    const promedioClientes = parseFloat(document.getElementById("promedioClientes").value);

    if (!isNaN(ventas) && !isNaN(promedioClientes)) {
      const rotacionCXC = calcularRotacionCXC(ventas, promedioClientes);
      setResultados(prev => ({ ...prev, cxc: rotacionCXC }));
    } else {
      alert("Por favor, ingresa valores válidos para ventas y promedio de clientes.");
    }
  };

  const handleCalcularPeriodoPromCobro = () => {
    const rotacionCXC = resultados.cxc;
    if (rotacionCXC) {
      const promCobro = calcularPeriodoPromedioCobro(rotacionCXC);
      setResultados(prev => ({ ...prev, promCobro: promCobro }));
    } else {
      alert("Primero calcula la rotación de CxC.");
    }
  };

  const handleCalcularCXP = () => {
    const comprasCredito = parseFloat(document.getElementById("comprasCredito").value);
    const promedioProveedores = parseFloat(document.getElementById("promedioProveedores").value);

    if (!isNaN(comprasCredito) && !isNaN(promedioProveedores)) {
      const rotacionCXP = calcularRotacionCXP(comprasCredito, promedioProveedores);
      setResultados(prev => ({ ...prev, cxp: rotacionCXP }));
    } else {
      alert("Por favor, ingresa valores válidos para compras al crédito y promedio de proveedores.");
    }
  };

  return (
    <div className="p-8">
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url('https://www.esan.edu.pe/images/blog/20221109/ZXGs25.png')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Ratios de Gestión</h1>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 mt-6">
        {/* Primera Card - Rotación CxC */}
        <div className="flex items-center">
          <FormulaCard
            title="1. Rotación de CxC"
            formula="Ventas / Promedio cta clientes"
            description="Este ratio calcula el número de veces que han sido renovadas las cuentas por cobrar."
            imageUrl="https://noticierocontable.com/wp-content/uploads/2021/04/Rotacion-de-cuentas-por-cobrar-.jpg.webp"
          />
          <div className="ml-8">
            <div className="flex flex-col">
              <label htmlFor="ventas" className="font-semibold">Ventas:</label>
              <input id="ventas" type="number" className="border p-2 rounded" placeholder="Ingrese ventas" />
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="promedioClientes" className="font-semibold">Promedio cta clientes:</label>
              <input id="promedioClientes" type="number" className="border p-2 rounded" placeholder="Ingrese promedio cta clientes" />
            </div>
            <button
              onClick={handleCalcularCXC}
              className="bg-blue-500 text-white p-2 rounded mt-4"
            >
              Calcular Rotación CxC
            </button>
            <div className="font-semibold text-xl mt-2">
              Resultado: {resultados.cxc || "Esperando datos"}
            </div>
          </div>
        </div>

        {/* Segunda Card - Periodo Promedio Cobro */}
        <div className="flex items-center flex-row-reverse">
          <FormulaCard
            title="2. Periodo Prom Cobro"
            formula="360 / Rotación de CxC"
            description="Este índice pondera el número de días que dichas cuentas se convierten en efectivo."
            imageUrl="https://noticierocontable.com/wp-content/uploads/2021/04/Periodo-Promedio-de-Cobro.jpg.webp"
          />
          <div className="mr-8">
            <button
              onClick={handleCalcularPeriodoPromCobro}
              className="bg-blue-500 text-white p-2 rounded mt-4"
            >
              Calcular Periodo Promedio de Cobro
            </button>
            <div className="font-semibold text-xl mt-2">
              Resultado: {resultados.promCobro || "Esperando datos"}
            </div>
          </div>
        </div>

        {/* Tercera Card - Rotación CxP */}
        <div className="flex items-center">
          <FormulaCard
            title="3. Rotación de CxP"
            formula="Compras al crédito / Promedio cta proveedores"
            description="Este ratio calcula el número de veces que han sido renovadas las cuentas por pagar."
            imageUrl="https://noticierocontable.com/wp-content/uploads/2021/04/Rotacion-de-Cuentas-por-Pagar.jpg.webp"
          />
          <div className="ml-8">
            <div className="flex flex-col">
              <label htmlFor="comprasCredito" className="font-semibold">Compras al crédito:</label>
              <input id="comprasCredito" type="number" className="border p-2 rounded" placeholder="Ingrese compras al crédito" />
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="promedioProveedores" className="font-semibold">Promedio cta proveedores:</label>
              <input id="promedioProveedores" type="number" className="border p-2 rounded" placeholder="Ingrese promedio cta proveedores" />
            </div>
            <button
              onClick={handleCalcularCXP}
              className="bg-blue-500 text-white p-2 rounded mt-4"
            >
              Calcular Rotación CxP
            </button>
            <div className="font-semibold text-xl mt-2">
              Resultado: {resultados.cxp || "Esperando datos"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RatioGestion;
