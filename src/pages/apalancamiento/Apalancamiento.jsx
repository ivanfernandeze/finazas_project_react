import React, { useState } from "react";
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

function Apalancamiento() {
    const [gao, setGao] = useState(null); // Grado de Apalancamiento Operativo
    const [gaf, setGaf] = useState(null); // Grado de Apalancamiento Financiero
    const [gac, setGac] = useState(null); // Grado de Apalancamiento Combinado

    // Calcula el GAO
    const calculateGAO = (uaiiChange, salesChange) => {
        if (salesChange !== 0) {
            const gaoCalculated = (uaiiChange / salesChange).toFixed(2);
            setGao(gaoCalculated);
        } else {
            setGao("N/A");
        }
    };

    // Calcula el GAF
    const calculateGAF = (epsChange, uaiiChange) => {
        if (uaiiChange !== 0) {
            const gafCalculated = (epsChange / uaiiChange).toFixed(2);
            setGaf(gafCalculated);
        } else {
            setGaf("N/A");
        }
    };

    // Calcula el GAC
    const calculateGAC = () => {
        if (gao !== null && gaf !== null && gao !== "N/A" && gaf !== "N/A") {
            const gacCalculated = (gao * gaf).toFixed(2);
            setGac(gacCalculated);
        } else {
            setGac("N/A");
        }
    };

    return (
        <div className="p-8 min-h-screen">
            <h1 className="text-7xl font-bold text-blue-600 text-center mb-8 flex items-center justify-center h-[50vh]">
                Apalancamiento Operativo y Financiero
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Información */}
                <section className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="font-bold text-2xl text-blue-600 mb-4">
                        ¿Qué es el Apalancamiento?
                    </h2>
                    <p className="text-gray-700">
                        El apalancamiento financiero y operativo son herramientas esenciales para entender cómo los cambios en las ventas y la estructura de costos afectan las utilidades de una empresa.
                    </p>
                    <ul className="list-disc list-inside mt-4 text-gray-700">
                        <li>
                            <b className="text-xl">Grado de apalancamiento operativo (GAO):</b>
                            <BlockMath math="\text{GAO} = \frac{\%\Delta \text{UAII}}{\%\Delta \text{Ventas}}" />
                            <p className="text-center mb-10">
                                Mide cómo las ventas afectan la utilidad operativa (UAII).
                            </p>
                        </li>
                        <li>
                            <b className="text-xl">Grado de apalancamiento financiero (GAF):</b>
                            <BlockMath math="\text{GAF} = \frac{\%\Delta \text{EPS}}{\%\Delta \text{UAII}}" />
                            <p className="text-center mb-10">
                                Relaciona cambios en la ganancia por acción (EPS) con la utilidad operativa.
                            </p>
                        </li>
                        <li>
                            <b className="text-xl">Grado de apalancamiento combinado (GAC):</b>
                            <BlockMath math="\text{GAC} = \text{GAO} \times \text{GAF}" />
                            <p className="text-center mb-10">
                                Combina GAO y GAF para evaluar el impacto total.
                            </p>
                        </li>
                    </ul>
                </section>

                {/* Calculadora */}
                <section className="bg-white shadow-lg rounded-lg p-6 h-max w-1/2 mx-auto">
                    <h2 className="font-bold text-2xl text-blue-600 mb-4">
                        Calculadora de Apalancamiento
                    </h2>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const form = e.target;
                            const uaiiChange = parseFloat(form.uaiiChange.value);
                            const salesChange = parseFloat(form.salesChange.value);
                            const epsChange = parseFloat(form.epsChange.value);

                            calculateGAO(uaiiChange, salesChange);
                            calculateGAF(epsChange, uaiiChange);
                            calculateGAC();
                        }}
                        className="flex flex-col gap-4"
                    >
                        <div>
                            <label className="block text-gray-700 font-semibold">
                                % Cambio en UAII:
                            </label>
                            <input
                                type="number"
                                name="uaiiChange"
                                defaultValue="20" // Valor por defecto
                                step="0.01"
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold">
                                % Cambio en Ventas:
                            </label>
                            <input
                                type="number"
                                name="salesChange"
                                defaultValue="10" // Valor por defecto
                                step="0.01"
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold">
                                % Cambio en EPS:
                            </label>
                            <input
                                type="number"
                                name="epsChange"
                                defaultValue="25" // Valor por defecto
                                step="0.01"
                                className="w-full p-2 border rounded-lg"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                        >
                            Calcular
                        </button>
                    </form>
                </section>
            </div>

            {/* Resultados */}
            <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
                <h2 className="font-bold text-2xl text-blue-600 mb-4">
                    Resultados
                </h2>
                <p className="text-lg text-gray-700">
                    <b>GAO:</b> {gao !== null ? gao : "No calculado"}
                </p>
                <p className="text-lg text-gray-700">
                    <b>GAF:</b> {gaf !== null ? gaf : "No calculado"}
                </p>
                <p className="text-lg text-gray-700">
                    <b>GAC:</b> {gac !== null ? gac : "No calculado"}
                </p>
                <h3 className="text-lg text-blue-600 mt-4 font-semibold">
                    Interpretación:
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                    <li>
                        Un <b>GAO</b> alto indica que una pequeña variación en las ventas tiene un gran impacto en las utilidades operativas.
                    </li>
                    <li>
                        Un <b>GAF</b> elevado sugiere mayor riesgo financiero debido al uso de deudas en la estructura de capital.
                    </li>
                    <li>
                        Un <b>GAC</b> alto refleja un mayor riesgo combinado, pero también mayor potencial de ganancias con cambios en las ventas.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Apalancamiento;
