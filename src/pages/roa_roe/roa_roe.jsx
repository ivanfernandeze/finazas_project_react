import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";

const RoaRoe = () => {
    const [netIncome, setNetIncome] = useState(0); // Margen Neto
    const [totalAssets, setTotalAssets] = useState(0); // Activos Totales
    const [shareholderEquity, setShareholderEquity] = useState(0); // Patrimonio Neto

    // Cálculo de ROA
    const calculateROA = () =>
        totalAssets ? ((netIncome / totalAssets) * 100).toFixed(2) : "0.00";

    // Cálculo de ROE
    const calculateROE = () =>
        shareholderEquity
            ? ((netIncome / shareholderEquity) * 100).toFixed(2)
            : "0.00";

    // Interpretación para ROA
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

    // Interpretación para ROE
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

    // Validar si todos los datos están completos
    const isDataComplete = netIncome > 0 && totalAssets > 0 && shareholderEquity > 0;

    return (
        <section className="flex flex-col items-center">
            {/* Imagen de encabezado */}
            <figure className="relative h-96 w-full">
                <img
                    className="h-full w-full rounded-xl object-cover object-center"
                    src="/FRC/finanzas.webp"
                    alt="Imagen financiera"
                />
                <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
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

            <div className="my-10"></div>

            {/* Definición y Fórmulas */}
            <article className="w-full max-w-4xl px-4">
                <Typography variant="h4" className="mb-4 text-center">
                    Definición y Fórmulas
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Definición del ROA */}
                    <div className="flex flex-col items-center gap-4 rounded-lg shadow-md py-6 px-4">
                        <Typography variant="h5" className="text-center">
                            Definición del ROA
                        </Typography>
                        <p className="text-gray-700">
                            El <strong>ROA (Return on Assets)</strong> mide la eficiencia de
                            una empresa en el uso de sus activos para generar ganancias.
                            Indica qué tan rentable es la empresa en relación con sus activos
                            totales.
                        </p>
                    </div>

                    {/* Definición del ROE */}
                    <div className="flex flex-col items-center gap-4 rounded-lg shadow-md py-6 px-4">
                        <Typography variant="h5" className="text-center">
                            Definición del ROE
                        </Typography>
                        <p className="text-gray-700">
                            El <strong>ROE (Return on Equity)</strong> mide la rentabilidad
                            que los accionistas obtienen sobre su inversión en la empresa. Es
                            un indicador clave de la capacidad de la empresa para generar
                            valor para sus propietarios.
                        </p>
                    </div>
                </div>

                <div className="my-10"></div>

                {/* Fórmulas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Fórmula ROA */}
                    <div className="flex flex-col items-center gap-4 rounded-lg shadow-md py-6 px-4">
                        <Typography variant="h5" className="text-center">
                            Fórmula del ROA
                        </Typography>
                        <p className="text-lg text-gray-800">
                            <strong>ROA = (Margen Neto / Activos Totales) × 100</strong>
                        </p>
                    </div>

                    {/* Fórmula ROE */}
                    <div className="flex flex-col items-center gap-4 rounded-lg shadow-md py-6 px-4">
                        <Typography variant="h5" className="text-center">
                            Fórmula del ROE
                        </Typography>
                        <p className="text-lg text-gray-800">
                            <strong>ROE = (Margen Neto / Patrimonio Neto) × 100</strong>
                        </p>
                    </div>
                </div>
            </article>

            <div className="my-10"></div>

            {/* Tabla de datos */}
            <div className="w-full max-w-4xl px-4">
                <Typography variant="h4" className="mb-4 text-center">
                    Datos Financieros
                </Typography>
                <table className="w-full text-left border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Parámetro</th>
                            <th className="border border-gray-300 px-4 py-2">Descripción</th>
                            <th className="border border-gray-300 px-4 py-2">Valor (USD)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Margen Neto</td>
                            <td className="border border-gray-300 px-4 py-2">
                                Ganancia neta después de impuestos.
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
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
                            <td className="border border-gray-300 px-4 py-2">Activos Totales</td>
                            <td className="border border-gray-300 px-4 py-2">
                                Total de los activos que posee la empresa.
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
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
                            <td className="border border-gray-300 px-4 py-2">Patrimonio Neto</td>
                            <td className="border border-gray-300 px-4 py-2">
                                Capital social más utilidades retenidas.
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
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

            <div className="my-10"></div>

            {/* Resultados */}
            {isDataComplete && (
                <div className="w-full max-w-4xl px-4">
                    <Typography variant="h4" className="mb-4 text-center">
                        Resultados
                    </Typography>
                    <div className="flex flex-col items-center gap-4 rounded-lg shadow-md p-6 bg-gray-50">
                        <p className="text-lg">
                            <strong>ROA:</strong> {calculateROA()}%
                        </p>
                        <p className="text-gray-700">
                            <strong>Interpretación ROA:</strong> {interpretROA()}
                        </p>
                        <p className="text-lg">
                            <strong>ROE:</strong> {calculateROE()}%
                        </p>
                        <p className="text-gray-700">
                            <strong>Interpretación ROE:</strong> {interpretROE()}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default RoaRoe;

