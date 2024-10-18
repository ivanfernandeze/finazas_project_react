import React, { useState } from "react";
import FormulaCard from "./components/Card";

function RatioGestion() {
  // Guardar los resultados de cada cálculo
  const [resultados, setResultados] = useState({
    cxc: null,
    promCobro: null,
    cxp: null,
  });

  // Funciones para calcular los ratios
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

  // Función para manejar el cálculo y actualizar resultados
  const handleCalcular = () => {
    const ventas = parseFloat(document.getElementById("ventas").value);
    const promedioClientes = parseFloat(document.getElementById("promedioClientes").value);
    const comprasCredito = parseFloat(document.getElementById("comprasCredito").value);
    const promedioProveedores = parseFloat(document.getElementById("promedioProveedores").value);

    // Validar si los valores son números
    if (!isNaN(ventas) && !isNaN(promedioClientes) && !isNaN(comprasCredito) && !isNaN(promedioProveedores)) {
      const rotacionCXC = calcularRotacionCXC(ventas, promedioClientes);
      const promCobro = calcularPeriodoPromedioCobro(rotacionCXC);
      const rotacionCXP = calcularRotacionCXP(comprasCredito, promedioProveedores);

      setResultados({
        cxc: rotacionCXC,
        promCobro: promCobro,
        cxp: rotacionCXP,
      });
    } else {
      alert("Por favor, ingresa valores numéricos válidos en todos los campos.");
    }
  };

  return (
    <div className="p-8">
      {/* Sección con la imagen de fondo */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url('https://www.esan.edu.pe/images/blog/20221109/ZXGs25.png')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Ratios de Gestión</h1>
        </div>
      </div>

      {/* Sección para ingresar datos */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Ingresar datos para calcular los ratios</h2>
        <div className="grid grid-cols-1 gap-4">
          {/* Entradas para calcular la Rotación de Cuentas por Cobrar */}
          <div className="flex flex-col">
            <label htmlFor="ventas" className="font-semibold">Ventas:</label>
            <input id="ventas" type="number" className="border p-2 rounded" placeholder="Ingrese ventas" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="promedioClientes" className="font-semibold">Promedio de cuentas por cobrar (Clientes):</label>
            <input id="promedioClientes" type="number" className="border p-2 rounded" placeholder="Ingrese promedio cta clientes" />
          </div>
          {/* Entradas para calcular la Rotación de Cuentas por Pagar */}
          <div className="flex flex-col">
            <label htmlFor="comprasCredito" className="font-semibold">Compras al crédito:</label>
            <input id="comprasCredito" type="number" className="border p-2 rounded" placeholder="Ingrese compras al crédito" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="promedioProveedores" className="font-semibold">Promedio de cuentas por pagar (Proveedores):</label>
            <input id="promedioProveedores" type="number" className="border p-2 rounded" placeholder="Ingrese promedio cta proveedores" />
          </div>

          {/* Botón para calcular */}
          <button
            onClick={handleCalcular}
            className="bg-blue-500 text-white p-2 rounded mt-4"
          >
            Calcular Ratios
          </button>
        </div>
      </div>

      {/* Sección de resultados y tarjetas con los ratios */}
      <div className="flex flex-col gap-6 mt-6">
        <FormulaCard
          title="1. Rotación de CxC"
          formula="Ventas / Promedio cta clientes"
          description="Este ratio calcula el número de veces que han sido renovadas las cuentas por cobrar."
          imageUrl="https://noticierocontable.com/wp-content/uploads/2021/04/Rotacion-de-cuentas-por-cobrar-.jpg.webp"
        />
        <div className="font-semibold text-xl">
          Resultado de Rotación de CxC: {resultados.cxc || "Esperando datos"}
        </div>

        <FormulaCard
          title="2. Periodo Prom Cobro"
          formula="360 / Rotación de CxC"
          description="Este índice pondera el número de días que dichas cuentas se convierten en efectivo."
          imageUrl="https://noticierocontable.com/wp-content/uploads/2021/04/Periodo-Promedio-de-Cobro.jpg.webp"
        />
        <div className="font-semibold text-xl">
          Resultado de Periodo Promedio de Cobro: {resultados.promCobro || "Esperando datos"}
        </div>

        <FormulaCard
          title="3. Rotación de CxP"
          formula="Compras al crédito / Promedio cta proveedores"
          description="Este ratio calcula el número de veces que han sido renovadas las cuentas por pagar."
          imageUrl="https://noticierocontable.com/wp-content/uploads/2021/04/Rotacion-de-Cuentas-por-Pagar.jpg.webp"
        />
        <div className="font-semibold text-xl">
          Resultado de Rotación de CxP: {resultados.cxp || "Esperando datos"}
        </div>
      </div>
    </div>
  );
}

export default RatioGestion;
