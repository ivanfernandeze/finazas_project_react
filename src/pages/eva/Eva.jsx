import React, { useState } from "react";
import FinancialTable from './components/Table';

function Eva() {
    const [roeData, setRoeData] = useState({
        utilidadNeta: 65.8,
        patrimonio: 144,
    });

    const [vanData, setVanData] = useState({
        totalActivo: 260,
        proveedores: 70,
    });

    const [waccData, setWaccData] = useState({
        financiamientos: [
            // tipo: "Préstamos", 
            { importe: 46, costo: 4 },
            // tipo: "Patrimonio",
            { importe: 144, costo: 13 },
        ],
        total: 190,
    });

    const [uaidi, setUaidi] = useState(null);
    const [van, setVan] = useState(null);
    const [wacc, setWacc] = useState(null);

    // Calcular UAIDI dinámicamente
    const calculateUAIDI = (utilidadOperacion, impuestoRenta) => {
        const uaidiCalculado = utilidadOperacion - utilidadOperacion * 0.3; // Impuesto ya es negativo
        setUaidi(uaidiCalculado);
    };

    // Calcular VAN dinámicamente
    const calculateVAN = (totalActivo, proveedores) => {
        const vanCalculado = totalActivo - proveedores;
        setVan(vanCalculado.toFixed(2));
    };

    // Calcular WACC dinámicamente
    const calculateWACC = (updatedData) => {
        // Recalcula WACC según los datos actualizados
        const deuda = updatedData.deuda || 0;
        const patrimonio = updatedData.patrimonio || 0;
        const total = deuda + patrimonio;

        if (total > 0) {
            const waccCalculado =
                (deuda / total) * (updatedData.costoDeuda / 100) +
                (patrimonio / total) * (updatedData.costoPatrimonio / 100);
            setWacc((waccCalculado * 100).toFixed(2));
        } else {
            setWacc("N/A"); // Evita división por cero
        }
    };

    // Función para manejar datos actualizados desde el componente hijo
    const handleTableDataUpdate = (updatedData) => {
        // Recalcula UAIDI
        calculateUAIDI(updatedData.utilidadOperacion, updatedData.impuestoRenta);

        // Recalcula VAN
        calculateVAN(updatedData.totalActivo, updatedData.proveedores);

        // Recalcula WACC
        calculateWACC(updatedData);
    };

    return (
        <div>
            <div className='h-screen flex flex-col justify-center'>
                <h1 className="font-bold text-7xl text-green-700 text-center mb-8">
                    EVA
                </h1>
                <h1 className="font-bold text-4xl text-green-700 text-center mb-8">
                    Valor Económico Agregado
                </h1>
            </div>

            <div className='grid grid-cols-3 gap-4'>
                {/* Introducción */}
                <section className="bg-white shadow-lg rounded-lg p-6 mb-8 h-max">
                    <h2 className="font-bold text-4xl text-green-600 mb-4">¿Qué es el EVA?</h2>
                    <p className="text-gray-700 text-lg">
                        El EVA (Valor Económico Agregado) es una métrica financiera que mide el valor generado por una empresa después de cubrir los costos del capital invertido.
                        Es una herramienta clave para evaluar la eficiencia de una empresa en la generación de valor adicional para sus accionistas.
                    </p>
                </section>

                {/* Fórmula del EVA */}
                <section className="bg-white shadow-lg rounded-lg p-6 mb-8 col-span-2 h-max">
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
            <div className="my-32"></div>

            <div className='flex justify-center gap-5 mt-10 items-start'>
                <FinancialTable
                    setRoeData={setRoeData}
                    uaidi={uaidi}
                    van={van}
                    wacc={wacc}
                    onUpdateTableData={handleTableDataUpdate} // Nueva función para datos dinámicos
                />

                <div className="flex flex-col items-center gap-8 ">
                    {/* Cálculo de ROE */}
                    <div className="bg-white rounded-xl p-6 w-max text-center h-max">
                        <h2 className="font-bold text-3xl text-[#00936E] mb-4">Rentabilidad del Patrimonio (ROE)</h2>
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
                                    <td className="p-4 text-green-700 font-bold">
                                        {roeData.patrimonio !== 0
                                            ? ((roeData.utilidadNeta / roeData.patrimonio) * 100).toFixed(2) + "%"
                                            : "N/A"}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Mostrar valores dinámicos */}
                    <div className="bg-white rounded-xl p-6 w-max text-center h-max">
                        <h2 className="font-bold text-3xl text-[#00936E] mb-4">Cálculos Adicionales</h2>
                        <p className="text-lg">UAIDI: {uaidi !== null ? uaidi.toFixed(2) : "No calculado"}</p>
                        <p className="text-lg">VAN: {van !== null ? van : "No calculado"}</p>
                        <p className="text-lg">WACC: {wacc !== null ? `${wacc}%` : "No calculado"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eva;
