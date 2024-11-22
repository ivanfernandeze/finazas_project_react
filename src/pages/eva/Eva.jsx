import React, { useState } from "react";
import FinancialTable from './components/Table'
function Eva() {
    const [roeData, setRoeData] = useState({
        utilidadNeta: 65.8,
        patrimonio: 144,
    });

    // Función para calcular el ROE
    const calculateROE = () => {
        if (roeData.patrimonio !== 0) {
            return ((roeData.utilidadNeta / roeData.patrimonio) * 100).toFixed(2) + "%";
        }
        return "N/A"; // Para evitar divisiones por 0
    };
    return (
        <div className=''>
            <div className='my-20'></div>
            {/* Título principal */}
            <h1 className="font-bold text-5xl text-green-700 text-center mb-8">
                EVA - Valor Económico Agregado
            </h1>

            <div className='grid grid-cols-3 gap-4'>
                {/* Introducción */}
                <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h2 className="font-bold text-4xl text-green-600 mb-4">¿Qué es el EVA?</h2>
                    <p className="text-gray-700 text-lg">
                        El EVA (Valor Económico Agregado) es una métrica financiera que mide el valor generado por una empresa después de cubrir los costos del capital invertido.
                        Es una herramienta clave para evaluar la eficiencia de una empresa en la generación de valor adicional para sus accionistas.
                    </p>
                </section>

                {/* Fórmula del EVA */}
                <section className="bg-white shadow-lg rounded-lg p-6 mb-8 col-span-2">
                    <h2 className="font-bold text-4xl text-green-600 mb-4">Fórmula del EVA</h2>
                    <div className="text-gray-700 text-lg">
                        <p className="mb-4">
                            La fórmula básica para calcular el EVA es:
                        </p>
                        <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-green-500 text-center text-xl font-mono">
                            <span className="text-green-700">EVA =</span> UAIDI - (Capital Invertido × Costo de Capital)
                        </div>
                        <ul className="mt-4 list-disc list-inside text-gray-700">
                            <li>
                                <span className="font-semibold text-green-700">UODI:</span> Utilidad Operativa Después de Impuestos.
                            </li>
                            <li>
                                <span className="font-semibold text-green-700">Capital Invertido:</span> Activos netos de la empresa (activos totales - pasivos operativos).
                            </li>
                            <li>
                                <span className="font-semibold text-green-700">Costo de Capital:</span> Porcentaje de retorno esperado por los inversionistas.
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            <div className='flex justify-center gap-5'>
                <FinancialTable setRoeData={setRoeData} />
                <div className="flex justify-center mt-10 w-max ">
                    <div className="bg-white shadow-lg rounded-lg p-6 w-max text-center h-max">
                        <h2 className="font-bold text-3xl text-green-600 mb-4">Rentabilidad del Patrimonio (ROE)</h2>
                        <table className="table-auto w-full bg-gray-100 rounded-lg">
                            <tbody>
                                <tr className="border-b">
                                    <td className="p-4 font-medium text-gray-600">Fórmula</td>
                                    <td className="p-4 text-gray-700">Utilidad Neta / Patrimonio</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-4 font-medium text-gray-600">Cálculo</td>
                                    <td className="p-4 text-gray-700">
                                        {roeData.utilidadNeta.toFixed(2)} / {roeData.patrimonio.toFixed(2)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium text-gray-600">ROE</td>
                                    <td className="p-4 text-green-700 font-bold">{calculateROE()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* ROE Section */}

        </div>
    )
}

export default Eva