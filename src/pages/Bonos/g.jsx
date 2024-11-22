import React, { useState } from "react";

function Bonos() {
  // Estado para los datos de entrada (Precios de Bonos)
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

  // Estado para cálculos adicionales
  const [selectedBono, setSelectedBono] = useState("A");
  const [result, setResult] = useState(null);
  const [interpretation, setInterpretation] = useState("");

  const [bonos, setBonos] = useState({
    A: { nominal: 1000, cupon: 10, tir1: 12, tir2: 6 },
    B: { nominal: 1000, cupon: 10, tir1: 10, tir2: 6 },
    C: { nominal: 1000, cupon: 10, tir1: 8, tir2: 6 },
  });

  const handleBonoChange = (bonoKey, field, value) => {
    setBonos((prevState) => ({
      ...prevState,
      [bonoKey]: {
        ...prevState[bonoKey],
        [field]: parseFloat(value),
      },
    }));
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

  // Cálculo para Bono Cupón Cero
  const calcularCuponCero = () => {
    const { nominal, tasa, tiempo } = cuponCeroData;
    const precio = nominal / Math.pow(1 + tasa, tiempo);
    setCuponCeroResult(precio.toFixed(2));
  };

  // Cálculos adicionales
  const calcular = (tipoCalculo) => {
    const bono = bonos[selectedBono];
    const { nominal, cupon, tir1, tir2 } = bono;
    let resultado = 0;

    switch (tipoCalculo) {
      case "Sensibilidad":
        resultado = Math.abs(tir1 - tir2) * nominal;
        setInterpretation(
          "La sensibilidad mide cuánto cambia el precio del bono en respuesta a una variación en la tasa de interés."
        );
        break;
      case "Duración":
        resultado = (1 / tir1) * (1 - Math.pow(1 + tir1, -5)) + 5 / Math.pow(1 + tir1, 5);
        setInterpretation(
          "La duración mide el tiempo promedio ponderado que tarda un inversionista en recuperar su inversión."
        );
        break;
      case "Duración Modificada":
        resultado = ((1 / tir1) * (1 - Math.pow(1 + tir1, -5)) + 5 / Math.pow(1 + tir1, 5)) / (1 + tir1);
        setInterpretation(
          "La duración modificada mide la sensibilidad del precio del bono a cambios en la tasa de interés, considerando el efecto del descuento."
        );
        break;
      default:
        resultado = 0;
        setInterpretation("");
        break;
    }

    setResult(resultado.toFixed(4));
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
    <div className="mb-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Propiedades de los Bonos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  Cupón Anual (%):
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Métricas Adicionales */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Métricas Adicionales
        </h2>
        <div className="flex gap-4 justify-center mb-6">
          {Object.keys(bonos).map((bono) => (
            <button
              key={bono}
              onClick={() => setSelectedBono(bono)}
              className={`px-6 py-2 rounded-lg ${
                selectedBono === bono
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              Bono {bono}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Sensibilidad", "Duración", "Duración Modificada", "Convexidad"].map(
            (tipoCalculo) => (
              <button
                key={tipoCalculo}
                onClick={() => calcular(tipoCalculo)}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                {tipoCalculo}
              </button>
            )
          )}
        </div>

        {result && (
          <div className="mt-6 text-center">
            <p className="text-2xl font-bold text-green-600 mb-4">
              Resultado: {result}
            </p>
            <p className="text-gray-600">{interpretation}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bonos;
