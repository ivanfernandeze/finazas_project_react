import React, { useState } from "react";

function Bonos() {
  const [selectedBono, setSelectedBono] = useState("A");
  const [bulletData, setBulletData] = useState({
    nominal: 1000,
    tasa: 0.05,
    tiempo: 5,
    tasaCupon: 0.06,
  });

  const [cuponCeroData, setCuponCeroData] = useState({
    nominal: 1000,
    tasa: 0.05,
    tiempo: 5,
  });

  const [bulletResult, setBulletResult] = useState(null);
  const [cuponCeroResult, setCuponCeroResult] = useState(null);

  const [bonos, setBonos] = useState({
    A: { nominal: 1000, cupon: 10, tir1: 12, tir2: 6, tiempo: 5 },
    B: { nominal: 1000, cupon: 10, tir1: 10, tir2: 6, tiempo: 5 },
  });

  const calcularCuponCero = () => {
    const { nominal, tasa, tiempo } = cuponCeroData;
    const precio = nominal / Math.pow(1 + tasa, tiempo);
    setCuponCeroResult(precio.toFixed(2));
  };

  const [results, setResults] = useState({
    tir1: [],
    tir2: [],
    vpTir1: 0,
    vpTir2: 0,
    variacion: 0,
  });

  const calcularSensibilidad = () => {
    const bono = bonos[selectedBono];
    const { nominal, cupon, tir1, tir2, tiempo } = bono;

    const calcularFlujos = (tir) => {
      const flujos = [];
      for (let t = 1; t <= tiempo; t++) {
        const flujo = t === tiempo ? cupon + nominal : cupon;
        const valorPresente = flujo / Math.pow(1 + tir / 100, t);
        flujos.push({ periodo: t, flujo: flujo.toFixed(2), vp: valorPresente.toFixed(2) });
      }
      return flujos;
    };

    const flujosTir1 = calcularFlujos(tir1);
    const flujosTir2 = calcularFlujos(tir2);

    const vpTir1 = flujosTir1.reduce((sum, flujo) => sum + parseFloat(flujo.vp), 0);
    const vpTir2 = flujosTir2.reduce((sum, flujo) => sum + parseFloat(flujo.vp), 0);

    const variacion = ((vpTir2 - vpTir1) / vpTir2) * 100;

    setResults({
      tir1: flujosTir1,
      tir2: flujosTir2,
      vpTir1: vpTir1.toFixed(2),
      vpTir2: vpTir2.toFixed(2),
      variacion: variacion.toFixed(2),
    });
  };

    // Cálculo para Bono Bullet
    const calcularBullet = () => {
      const { nominal, tasa, tiempo, tasaCupon } = bulletData;
      const cupón = nominal * tasaCupon;
      let precio = 0;
      for (let t = 1; t <= tiempo; t++) {
        precio += cupón / Math.pow(1 + tasa, t);
      }
      precio += nominal / Math.pow(1 + tasa, tiempo);
      setBulletResult(precio.toFixed(2));
    };
  
  const handleBonoChange = (bonoKey, field, value) => {
    setBonos((prevState) => ({
      ...prevState,
      [bonoKey]: {
        ...prevState[bonoKey],
        [field]: parseFloat(value),
      },
    }));
  };

  return (
    <div className="p-8 bg-gray-50 font-sans">
      <div className="p-8 bg-gray-50 font-sans">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Cálculos de Bonos
      </h1>

      {/* Bono Bullet */}
      <div className="mb-8 bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col md:flex-row">
        <img
          src="https://slideplayer.es/slide/21318/1/images/5/Precio+de+un+bono+Bullet.jpg"
          alt="Bono Bullet"
          className="rounded-l-lg object-cover md:w-1/2"
        />
        <div className="p-6 flex-1">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Bono Bullet
          </h2>
          <p className="text-gray-600 mb-4">
            <strong>Teoría:</strong> Los bonos Bullet son aquellos que pagan
            intereses (cupones) periódicamente y devuelven el valor nominal
            completo al vencimiento.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Fórmula:</strong>{" "}
            <code>
              P = Σ [C / (1 + r)^t] + N / (1 + r)^n
            </code>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              Valor Nominal:
              <input
                type="number"
                value={bulletData.nominal}
                onChange={(e) =>
                  setBulletData({
                    ...bulletData,
                    nominal: parseFloat(e.target.value),
                  })
                }
                className="block w-full border rounded-md p-2 mt-2"
              />
            </label>
            <label className="block">
              Tasa de Rendimiento (%):
              <input
                type="number"
                value={bulletData.tasa * 100}
                onChange={(e) =>
                  setBulletData({
                    ...bulletData,
                    tasa: parseFloat(e.target.value) / 100,
                  })
                }
                className="block w-full border rounded-md p-2 mt-2"
              />
            </label>
            <label className="block">
              Tasa de Cupón (%):
              <input
                type="number"
                value={bulletData.tasaCupon * 100}
                onChange={(e) =>
                  setBulletData({
                    ...bulletData,
                    tasaCupon: parseFloat(e.target.value) / 100,
                  })
                }
                className="block w-full border rounded-md p-2 mt-2"
              />
            </label>
            <label className="block">
              Tiempo (años):
              <input
                type="number"
                value={bulletData.tiempo}
                onChange={(e) =>
                  setBulletData({
                    ...bulletData,
                    tiempo: parseInt(e.target.value, 10),
                  })
                }
                className="block w-full border rounded-md p-2 mt-2"
              />
            </label>
          </div>
          <button
            onClick={calcularBullet}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-4"
          >
            Calcular Precio
          </button>
          {bulletResult && (
            <p className="mt-4 text-green-600">
              El precio del bono bullet es{" "}
              <strong>${bulletResult}</strong>. Este precio incluye el valor
              presente de todos los cupones y el nominal al vencimiento.
            </p>
          )}
        </div>
      </div>
      {/* Bono Cupón Cero */}
      <div className="mb-8 bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col md:flex-row">
        <img
          src="https://image.slidesharecdn.com/bonosnegociosinternacionales-1226523166835190-8/85/Bonos-43-320.jpg"
          alt="Bono Cupón Cero"
          className="rounded-l-lg object-cover md:w-1/2"
        />
        <div className="p-6 flex-1">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Bono Cupón Cero
          </h2>
          <p className="text-gray-600 mb-4">
            <strong>Teoría:</strong> Los bonos cupón cero no pagan intereses
            durante su vida. La rentabilidad se obtiene de la diferencia entre
            el precio de compra y el valor nominal al vencimiento.
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Fórmula:</strong>{" "}
            <code>
              P = N / (1 + r)^n
            </code>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              Valor Nominal:
              <input
                type="number"
                value={cuponCeroData.nominal}
                onChange={(e) =>
                  setCuponCeroData({
                    ...cuponCeroData,
                    nominal: parseFloat(e.target.value),
                  })
                }
                className="block w-full border rounded-md p-2 mt-2"
              />
            </label>
            <label className="block">
              Tasa de Rendimiento (%):
              <input
                type="number"
                value={cuponCeroData.tasa * 100}
                onChange={(e) =>
                  setCuponCeroData({
                    ...cuponCeroData,
                    tasa: parseFloat(e.target.value) / 100,
                  })
                }
                className="block w-full border rounded-md p-2 mt-2"
              />
            </label>
            <label className="block">
              Tiempo (años):
              <input
                type="number"
                value={cuponCeroData.tiempo}
                onChange={(e) =>
                  setCuponCeroData({
                    ...cuponCeroData,
                    tiempo: parseInt(e.target.value, 10),
                  })
                }
                className="block w-full border rounded-md p-2 mt-2"
              />
            </label>
          </div>
          <button
            onClick={calcularCuponCero}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-4"
          >
            Calcular Precio
          </button>
          {cuponCeroResult && (
            <p className="mt-4 text-green-600">
              El precio del bono cupón cero es{" "}
              <strong>${cuponCeroResult}</strong>. Este precio refleja el valor
              presente del nominal al vencimiento.
            </p>
          )}
        </div>
      </div>
    </div>
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Cálculo de Sensibilidad de Bonos
      </h1>

      {/* Configuración del Bono */}
      <div className="mb-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Configuración de Bonos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(bonos).map((bonoKey) => (
            <div key={bonoKey} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">
                Bono {bonoKey}
              </h3>
              <div className="grid gap-2 mt-4">
                <label>
                  Valor Nominal:
                  <input
                    type="number"
                    value={bonos[bonoKey].nominal}
                    onChange={(e) =>
                      handleBonoChange(bonoKey, "nominal", e.target.value)
                    }
                    className="block w-full p-2 border rounded-md"
                  />
                </label>
                <label>
                  Cupón Anual:
                  <input
                    type="number"
                    value={bonos[bonoKey].cupon}
                    onChange={(e) =>
                      handleBonoChange(bonoKey, "cupon", e.target.value)
                    }
                    className="block w-full p-2 border rounded-md"
                  />
                </label>
                <label>
                  TIR Anual 1 (%):
                  <input
                    type="number"
                    value={bonos[bonoKey].tir1}
                    onChange={(e) =>
                      handleBonoChange(bonoKey, "tir1", e.target.value)
                    }
                    className="block w-full p-2 border rounded-md"
                  />
                </label>
                <label>
                  TIR Anual 2 (%):
                  <input
                    type="number"
                    value={bonos[bonoKey].tir2}
                    onChange={(e) =>
                      handleBonoChange(bonoKey, "tir2", e.target.value)
                    }
                    className="block w-full p-2 border rounded-md"
                  />
                </label>
                <label>
                  Tiempo (años):
                  <input
                    type="number"
                    value={bonos[bonoKey].tiempo}
                    onChange={(e) =>
                      handleBonoChange(bonoKey, "tiempo", e.target.value)
                    }
                    className="block w-full p-2 border rounded-md"
                  />
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calcular Sensibilidad */}
      <div className="mb-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Calcular Sensibilidad
        </h2>
        <div className="flex justify-center mb-6">
          {Object.keys(bonos).map((bonoKey) => (
            <button
              key={bonoKey}
              onClick={() => setSelectedBono(bonoKey)}
              className={`px-6 py-2 rounded-lg ${
                selectedBono === bonoKey
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              Bono {bonoKey}
            </button>
          ))}
        </div>
        <button
          onClick={calcularSensibilidad}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Calcular Sensibilidad
        </button>
      </div>

      {/* Resultados */}
      {results.tir1.length > 0 && (
        <div className="mb-10 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Resultados de Sensibilidad
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Tabla para TIR 1 */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">TIR 1</h3>
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2">Periodo</th>
                    <th className="border border-gray-300 p-2">Flujo</th>
                    <th className="border border-gray-300 p-2">Valor Presente</th>
                  </tr>
                </thead>
                <tbody>
                  {results.tir1.map((flujo) => (
                    <tr key={flujo.periodo}>
                      <td className="border border-gray-300 p-2 text-center">
                        {flujo.periodo}
                      </td>
                      <td className="border border-gray-300 p-2 text-center">
                        {flujo.flujo}
                      </td>
                      <td className="border border-gray-300 p-2 text-center">
                        {flujo.vp}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-center">
                Valor Presente Total: <strong>${results.vpTir1}</strong>
              </p>
            </div>
            {/* Tabla para TIR 2 */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">TIR 2</h3>
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2">Periodo</th>
                    <th className="border border-gray-300 p-2">Flujo</th>
                    <th className="border border-gray-300 p-2">Valor Presente</th>
                  </tr>
                </thead>
                <tbody>
                  {results.tir2.map((flujo) => (
                    <tr key={flujo.periodo}>
                      <td className="border border-gray-300 p-2 text-center">
                        {flujo.periodo}
                      </td>
                      <td className="border border-gray-300 p-2 text-center">
                        {flujo.flujo}
                      </td>
                      <td className="border border-gray-300 p-2 text-center">
                        {flujo.vp}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-center">
                Valor Presente Total: <strong>${results.vpTir2}</strong>
              </p>
            </div>
          </div>
          <p className="mt-6 text-lg text-center text-gray-700">
            Variación Porcentual: <strong>{results.variacion}%</strong>
            {results.variacion && (
  <div className="mb-10 bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold text-blue-600 mb-4">
      Interpretación de la Sensibilidad
    </h2>
    <p className="text-gray-700 text-lg">
      La variación porcentual calculada entre los valores presentes totales para 
      las dos tasas internas de rendimiento (TIR1 y TIR2) es de{" "}
      <strong>{results.variacion}%</strong>. Este resultado indica cómo cambia 
      el valor presente del bono ante fluctuaciones en la tasa de descuento.
    </p>
    <p className="text-gray-700 text-lg mt-4">
      Una variación alta sugiere que el bono es más sensible a los cambios en la 
      tasa de rendimiento, lo que implica mayor riesgo ante movimientos en el mercado. 
      Por el contrario, una variación baja indica que el bono tiene menor sensibilidad, 
      siendo más estable frente a estos cambios.
    </p>
    <p className="text-gray-700 text-lg mt-4">
      Para el bono seleccionado (<strong>Bono {selectedBono}</strong>):
    </p>
    <ul className="list-disc pl-6 mt-2 text-gray-700 text-lg">
      <li>
        Valor Presente Total con TIR1: <strong>${results.vpTir1}</strong>
      </li>
      <li>
        Valor Presente Total con TIR2: <strong>${results.vpTir2}</strong>
      </li>
      <li>
        Variación Porcentual: <strong>{results.variacion}%</strong>
      </li>
    </ul>
    <p className="text-gray-700 text-lg mt-4">
      Este análisis es crucial para los inversionistas, ya que les permite evaluar
      la sensibilidad del bono ante cambios en las tasas de interés, ayudándoles a 
      tomar decisiones informadas sobre sus inversiones.
    </p>
  </div>
)}

          </p>
        </div>
      )}
    </div>
  );
}

export default Bonos;
