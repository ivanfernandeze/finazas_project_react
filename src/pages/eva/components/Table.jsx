import React, { useState, useEffect } from "react";

const FinancialTable = ({ setRoeData, uaidi, van, wacc, onUpdateTableData }) => {
    const [data, setData] = useState({
        ventas: 600.0,
        costoVentas: -490.0,
        utilidadBruta: 110.0,
        otrosIngresos: 60.0,
        otrosGastos: -70.0,
        utilidadOperacion: 100.0,
        gastosFinancieros: -6.0,
        utilidadAntesImpuestos: 94.0,
        impuestoRenta: -28.2,
        utilidadNeta: 65.8,
        caja: 20,
        clientes: 39,
        existencias: 20,
        activoFijo: 181,
        proveedores: 70,
        deuda: 46,
        patrimonio: 144,
        totalActivo: 260,
        totalPasivo: 116,
        costoPatrimonio: 13, // Costo anual del patrimonio (en %)
        costoDeuda: 4, // Costo anual de la deuda (en %)
    });
    const [eva, setEva] = useState(null);
    const [evaInterpretation, setEvaInterpretation] = useState("");
    const [showEva, setShowEva] = useState(false); // Control para la animación
    const handleChange = (field, value) => {
        const updatedData = { ...data, [field]: value };

        // Recalcular cálculos derivados
        updatedData.utilidadBruta = updatedData.ventas + updatedData.costoVentas;
        updatedData.utilidadOperacion =
            updatedData.utilidadBruta + updatedData.otrosIngresos + updatedData.otrosGastos;
        updatedData.utilidadAntesImpuestos =
            updatedData.utilidadOperacion + updatedData.gastosFinancieros;
        updatedData.impuestoRenta = updatedData.utilidadAntesImpuestos * -0.3; // 30% de impuestos
        updatedData.utilidadNeta = updatedData.utilidadAntesImpuestos + updatedData.impuestoRenta;

        // Calcular Totales de Balance de Situación
        updatedData.totalActivo =
            updatedData.caja + updatedData.clientes + updatedData.existencias + updatedData.activoFijo;
        updatedData.totalPasivo = updatedData.proveedores + updatedData.deuda;

        // Recalcular Patrimonio (Activo - Pasivo)
        updatedData.patrimonio = updatedData.totalActivo - updatedData.totalPasivo;

        setData(updatedData);

        // Actualizar ROE
        setRoeData({
            utilidadNeta: updatedData.utilidadNeta,
            patrimonio: updatedData.patrimonio,
        });

        // Notificar al padre los datos actualizados
        onUpdateTableData(updatedData);
    };

    const calculateEVA = () => {
        // const eva = uaidi - (van * (wacc / 100));
        // alert(`EVA calculado: ${eva.toFixed(2)}`);
        if (uaidi !== null && van !== null && wacc !== null) {
            const evaCalculado = uaidi - (van * (wacc / 100));
            setEva(evaCalculado.toFixed(2));

            // Interpretación del EVA
            if (evaCalculado > 0) {
                setEvaInterpretation(
                    "El EVA es positivo, lo que indica que la empresa está generando valor adicional para sus accionistas."
                );
            } else if (evaCalculado < 0) {
                setEvaInterpretation(
                    "El EVA es negativo, lo que sugiere que la empresa no está cubriendo sus costos de capital."
                );
            } else {
                setEvaInterpretation(
                    "El EVA es neutro, lo que indica que la empresa está alcanzando exactamente su costo de capital."
                );
            }
            // Muestra la animación del EVA
            setShowEva(true);
        } else {
            setEva("No calculado");
            setEvaInterpretation("Por favor, asegúrate de que todos los datos estén completos.");
            setShowEva(false);
        }
    };

    useEffect(() => {
        onUpdateTableData(data);

    }, []);
    // Estilos en línea
    const evaBoxStyle = {
        transition: "all 0.5s ease-in-out",
        transform: showEva ? "scale(1)" : "scale(0.8)",
        opacity: showEva ? 1 : 0,
    };
    return (
        <section className=" text-gray-800 font-sans pb-6">
            <div className="w-full">
                <div className="flex gap-10 justify-between w-full">
                    <article className="bg-white rounded-xl p-6 shadow-sm">
                        <h2 className="text-2xl font-bold text-[#007F5F] mb-4">Estado de Resultados</h2>
                        <table className="table-auto w-full bg-white shadow-md rounded-lg">
                            <tbody>
                                <tr className="border-b">
                                    <td className="p-4 font-medium text-gray-600">Ventas</td>
                                    <td className="p-4">
                                        <input
                                            type="number"
                                            value={data.ventas}
                                            onChange={(e) => handleChange("ventas", parseFloat(e.target.value))}
                                            className="w-full border-2 border-[#EEEF20] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-4 font-medium text-gray-600">Costo de Ventas</td>
                                    <td className="p-4">
                                        <input
                                            type="number"
                                            value={data.costoVentas}
                                            onChange={(e) => handleChange("costoVentas", parseFloat(e.target.value))}
                                            className="w-full border-2 border-[#EEEF20] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    </td>
                                </tr>
                                <tr className="border-b border-black">
                                    <td className="p-4  text-gray-600 font-bold">Utilidad Bruta</td>
                                    <td className="p-4 font-bold">{data.utilidadBruta.toFixed(2)}</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-4 font-medium text-gray-600">Otros Ingresos</td>
                                    <td className="p-4">
                                        <input
                                            type="number"
                                            value={data.otrosIngresos}
                                            onChange={(e) => handleChange("otrosIngresos", parseFloat(e.target.value))}
                                            className="w-full border-2 border-[#EEEF20] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-4 font-medium text-gray-600">Otros Gastos</td>
                                    <td className="p-4">
                                        <input
                                            type="number"
                                            value={data.otrosGastos}
                                            onChange={(e) => handleChange("otrosGastos", parseFloat(e.target.value))}
                                            className="w-full border-2 border-[#EEEF20] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    </td>
                                </tr>
                                <tr className="border-b border-black">
                                    <td className="p-4 font-bold text-gray-600">Utilidad de Operación</td>
                                    <td className="p-4 font-bold">{data.utilidadOperacion.toFixed(2)}</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-4 font-medium text-gray-600">Gastos Financieros</td>
                                    <td className="p-4">
                                        <input
                                            type="number"
                                            value={data.gastosFinancieros}
                                            onChange={(e) => handleChange("gastosFinancieros", parseFloat(e.target.value))}
                                            className="w-full border-2 border-[#EEEF20] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    </td>
                                </tr>
                                <tr className="border-b border-black">
                                    <td className="p-4 font-bold text-gray-600">Utilidad Antes de Impuestos</td>
                                    <td className="p-4 font-bold">{data.utilidadAntesImpuestos.toFixed(2)}</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-4 font-medium text-gray-600">Impuesto a la Renta</td>
                                    <td className="p-4">{data.impuestoRenta.toFixed(2)}</td>
                                </tr>
                                <tr className="border-b border-black">
                                    <td className="p-4 font-bold text-gray-600">Utilidad Neta</td>
                                    <td className="p-4 font-bold">{data.utilidadNeta.toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                    <article className="">
                        <div className="bg-white p-6 shadow-sm h-max  rounded-xl ">
                            <h2 className="text-2xl font-bold text-[#007F5F] mb-4">Balance de Situación</h2>
                            <div className="grid grid-cols-2 gap-2">
                                <table className="table-auto w-full mb-8 bg-white shadow-md rounded-lg overflow-hidden">
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="p-4 font-medium text-gray-600">Caja</td>
                                            <td className="p-4">
                                                <input
                                                    type="number"
                                                    value={data.caja}
                                                    onChange={(e) => handleChange("caja", parseFloat(e.target.value))}
                                                    className="w-full border-2 border-[#EEEF20] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                />
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4 font-medium text-gray-600">Clientes</td>
                                            <td className="p-4">
                                                <input
                                                    type="number"
                                                    value={data.clientes}
                                                    onChange={(e) => handleChange("clientes", parseFloat(e.target.value))}
                                                    className="w-full border-2 border-[#EEEF20] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                />
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4 font-medium text-gray-600">Existencias</td>
                                            <td className="p-4">
                                                <input
                                                    type="number"
                                                    value={data.existencias}
                                                    onChange={(e) => handleChange("existencias", parseFloat(e.target.value))}
                                                    className="w-full border-2 border-[#EEEF20] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                />
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4 font-medium text-gray-600">Activo Fijo</td>
                                            <td className="p-4">
                                                <input
                                                    type="number"
                                                    value={data.activoFijo}
                                                    onChange={(e) => handleChange("activoFijo", parseFloat(e.target.value))}
                                                    className="w-full border-2 border-[#EEEF20] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                />
                                            </td>
                                        </tr>
                                        <tr className="border-b border-black">
                                            <td className="p-4 font-bold text-gray-600">Total Activo</td>
                                            <td className="p-4 font-bold">{data.totalActivo.toFixed(2)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="table-auto w-full mb-8 bg-white shadow-md rounded-lg overflow-hidden">
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="p-4 font-medium text-gray-600">Proveedores</td>
                                            <td className="p-4">
                                                <input
                                                    type="number"
                                                    value={data.proveedores}
                                                    onChange={(e) => handleChange("proveedores", parseFloat(e.target.value))}
                                                    className="w-full border-2 border-[#EEEF20] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                />
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4 font-medium text-gray-600">Deuda</td>
                                            <td className="p-4">
                                                <input
                                                    type="number"
                                                    value={data.deuda}
                                                    onChange={(e) => handleChange("deuda", parseFloat(e.target.value))}
                                                    className="w-full border-2 border-[#EEEF20] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                />
                                            </td>
                                        </tr>
                                        <tr className="border-b border-black">
                                            <td className="p-4 font-bold text-gray-600">Total Pasivo</td>
                                            <td className="p-4 font-bold">{data.totalPasivo.toFixed(2)}</td>
                                        </tr>
                                        <tr className="border-b border-black">
                                            <td className="p-4 font-bold text-gray-600">Patrimonio</td>
                                            <td className="p-4 font-bold">{data.patrimonio.toFixed(2)}</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4 font-medium text-gray-600">Costo Deuda (%)</td>
                                            <td className="p-4">
                                                <input
                                                    type="number"
                                                    value={data.costoDeuda}
                                                    onChange={(e) => handleChange("costoDeuda", e.target.value)}
                                                    className="w-full  border-2 border-[#EEEF20] rounded-md p-2"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-gray-600">Costo Patrimonio (%)</td>
                                            <td className="p-4">
                                                <input
                                                    type="number"
                                                    value={data.costoPatrimonio}
                                                    onChange={(e) => handleChange("costoPatrimonio", e.target.value)}
                                                    className="w-full border-2 border-[#EEEF20] rounded-md p-2"
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="flex w-full justify-center">
                            <button
                                onClick={calculateEVA}
                                className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-[#007F5F] transition-all text-lg">
                                Calcular EVA
                            </button>
                            {/* Mostrar EVA con animación */}
                            <div
                                className="bg-white rounded-xl p-4 w-max text-center h-max shadow-lg"
                                style={evaBoxStyle}
                            >
                                <h2 className="font-bold text-3xl text-green-600 mb-4">Resultado EVA</h2>
                                <p className="text-xl font-bold text-gray-800">
                                    {eva !== null ? `${eva}` : "No calculado"}
                                </p>
                                <p className="text-lg text-gray-700 mt-4">{evaInterpretation}</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>

        </section>
    );
};

export default FinancialTable;
