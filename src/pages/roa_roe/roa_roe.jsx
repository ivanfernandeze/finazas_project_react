import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";

const RoaRoe = () => {
    const [netIncome, setNetIncome] = useState(0);
    const [totalAssets, setTotalAssets] = useState(0);
    const [shareholderEquity, setShareholderEquity] = useState(0);

    const calculateROA = () =>
        totalAssets ? ((netIncome / totalAssets) * 100).toFixed(2) : "0.00";

    const calculateROE = () =>
        shareholderEquity
            ? ((netIncome / shareholderEquity) * 100).toFixed(2)
            : "0.00";

    const interpretROA = () => {
        const roa = parseFloat(calculateROA());
        if (roa > 10) {
            return "El ROA es alto, lo que indica que la empresa utiliza eficientemente sus activos para generar ganancias.";
        } else if (roa > 5) {
            return "El ROA es moderado, lo que sugiere una gestión aceptable de los activos.";
        } else {
            return "El ROA es bajo, lo que podría significar que la empresa no está aprovechando adecuadamente sus activos.";
        }
    };

    const interpretROE = () => {
        const roe = parseFloat(calculateROE());
        if (roe > 15) {
            return "El ROE es alto, lo que refleja una buena rentabilidad para los accionistas.";
        } else if (roe > 10) {
            return "El ROE es moderado, lo que indica un retorno aceptable para los accionistas.";
        } else {
            return "El ROE es bajo, lo que podría significar que la empresa no está generando suficientes beneficios para los accionistas.";
        }
    };

    const isDataComplete = netIncome > 0 && totalAssets > 0 && shareholderEquity > 0;

    return (
        <section className="flex flex-col items-center bg-gray-50">
            {/* Imagen de encabezado */}
            <figure className="relative h-80 w-full">
                <img
                    className="h-full w-full object-cover rounded-xl shadow-lg"
                    src="/FRC/finanzas.webp"
                    alt="Imagen financiera"
                />
                <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-lg border border-gray-300 bg-white py-4 px-6 shadow-lg backdrop-blur-sm">
                    <div>
                        <Typography variant="h1" color="green" textGradient>
                            ROA y ROE: Rentabilidad Empresarial
                        </Typography>
                        <Typography color="gray" className="mt-2 font-normal">
                            Ciclo VI - 2024
                        </Typography>
                    </div>
                    <Typography variant="h5" color="blue-gray">
                        Finanzas Corporativas
                    </Typography>
                </figcaption>
            </figure>

            <div className="my-8"></div>

            {/* Definición y Fórmulas */}
            <article className="w-full max-w-6xl px-6 py-4 bg-white rounded-lg shadow-md">
                <Typography variant="h4" className="mb-6 text-center text-blue-600">
                    Definición y Fórmulas
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 rounded-lg bg-gray-50 shadow">
                        <Typography variant="h5" className="text-center text-gray-800">
                            Definición del ROA
                        </Typography>
                        <p className="text-gray-600 mt-4">
                            El <strong>ROA </strong> mide la eficiencia de una empresa
                            en el uso de sus activos para generar ganancias. Indica qué tan rentable es
                            la empresa en relación con sus activos totales.
                        </p>
                    </div>
                    <div className="p-6 rounded-lg bg-gray-50 shadow">
                        <Typography variant="h5" className="text-center text-gray-800">
                            Definición del ROE
                        </Typography>
                        <p className="text-gray-600 mt-4">
                            El <strong>ROE </strong> mide la rentabilidad que los accionistas
                            obtienen sobre su inversión en la empresa. Es un indicador clave de la capacidad
                            de la empresa para generar valor para sus propietarios.
                        </p>
                    </div>
                </div>
                <div className="my-10"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 rounded-lg bg-gray-50 shadow">
                        <Typography variant="h5" className="text-center text-gray-800">
                            Fórmula del ROA
                        </Typography>
                        <p className="text-gray-700 text-center mt-4">
                            <strong>ROA = (Margen Neto / Activos Totales) × 100</strong>
                        </p>
                    </div>
                    <div className="p-6 rounded-lg bg-gray-50 shadow">
                        <Typography variant="h5" className="text-center text-gray-800">
                            Fórmula del ROE
                        </Typography>
                        <p className="text-gray-700 text-center mt-4">
                            <strong>ROE = (Margen Neto / Patrimonio Neto) × 100</strong>
                        </p>
                    </div>
                </div>
            </article>

            <div className="my-8"></div>

            {/* Tabla de datos */}
            <div className="w-full max-w-6xl px-6 py-4 bg-white rounded-lg shadow-md">
                <Typography variant="h4" className="mb-6 text-center text-blue-600">
                    Datos Financieros
                </Typography>
                <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow">
                    <thead className="bg-blue-100">
                        <tr>
                            <th className="px-4 py-2 border">Parámetro</th>
                            <th className="px-4 py-2 border">Descripción</th>
                            <th className="px-4 py-2 border">Valor (USD)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border">Margen Neto</td>
                            <td className="px-4 py-2 border">Ganancia neta después de impuestos.</td>
                            <td className="px-4 py-2 border">
                                <input
                                    type="number"
                                    value={netIncome}
                                    onChange={(e) => setNetIncome(Number(e.target.value))}
                                    className="w-full p-2 border rounded"
                                    placeholder="Ejemplo: 77000"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Activos Totales</td>
                            <td className="px-4 py-2 border">Total de los activos que posee la empresa.</td>
                            <td className="px-4 py-2 border">
                                <input
                                    type="number"
                                    value={totalAssets}
                                    onChange={(e) => setTotalAssets(Number(e.target.value))}
                                    className="w-full p-2 border rounded"
                                    placeholder="Ejemplo: 960000"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border">Patrimonio Neto</td>
                            <td className="px-4 py-2 border">Capital social más utilidades retenidas.</td>
                            <td className="px-4 py-2 border">
                                <input
                                    type="number"
                                    value={shareholderEquity}
                                    onChange={(e) => setShareholderEquity(Number(e.target.value))}
                                    className="w-full p-2 border rounded"
                                    placeholder="Ejemplo: 420000"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="my-8"></div>

            {/* Resultados */}
            {isDataComplete && (
                <div className="w-full max-w-6xl px-6 py-4 bg-white rounded-lg shadow-md">
                    <Typography variant="h4" className="mb-6 text-center text-blue-600">
                        Resultados
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 bg-gray-50 rounded-lg shadow">
                            <p className="text-lg text-center">
                                <strong>ROA:</strong> {calculateROA()}%
                            </p>
                            <p className="text-gray-700 text-center mt-4">
                                <strong>Interpretación:</strong> {interpretROA()}
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg shadow">
                            <p className="text-lg text-center">
                                <strong>ROE:</strong> {calculateROE()}%
                            </p>
                            <p className="text-gray-700 text-center mt-4">
                                <strong>Interpretación:</strong> {interpretROE()}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default RoaRoe;
