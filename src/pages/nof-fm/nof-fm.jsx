import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
import TablaF from "./TablaF";

const NofFm = () => {
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
                            NOF y FM: Rentabilidad Empresarial
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
                            Definición del FM
                        </Typography>
                        <p className="text-gray-700">
                            El <strong>FM (Fondo de Maniobra)</strong> es la parte del Activo corriente, que se financia con  pasivos a Largo Plazo
                        </p>
                    </div>

                    {/* Definición del ROE */}
                    <div className="flex flex-col items-center gap-4 rounded-lg shadow-md py-6 px-4">
                        <Typography variant="h5" className="text-center">
                            Definición del NOF
                        </Typography>
                        <p className="text-gray-700">
                            El <strong>NOF (Necesidades Operativas de Fondos)</strong> representan los fondos necesarios para financiar las operaciones corrientes, luego de haber descontado el financiamiento espontaneo, que se genera de realizar las mismas
                        </p>
                    </div>
                </div>

                <div className="my-10"></div>

                {/* Fórmulas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Fórmula ROA */}
                    <div className="flex flex-col items-center gap-4 rounded-lg shadow-md py-6 px-4">
                        <Typography variant="h5" className="text-center">
                            Fórmula del NF
                        </Typography>
                        <p className="text-lg text-gray-800">
                            <strong>NF = ACTIVO CORRIENTE - PASIVO CORRIENTE</strong>
                        </p>
                    </div>

                    {/* Fórmula ROE */}
                    <div className="flex flex-col items-center gap-4 rounded-lg shadow-md py-6 px-4">
                        <Typography variant="h5" className="text-center">
                            Fórmula del NOF
                        </Typography>
                        <p className="text-lg text-gray-800">
                            <strong>NOF = ACTIVO CTE OPERATIVO - PASIVO CTE OPERATIVO</strong>
                        </p>
                    </div>
                </div>
            </article>

            <div className="my-10"></div>

            {/* Tabla de datos */}
            <div className="w-full px-4">
                <Typography variant="h4" className="mb-4 text-center">
                    Datos Financieros
                </Typography>
                <TablaF/>
            </div>
        </section>
    );
};

export default NofFm;

