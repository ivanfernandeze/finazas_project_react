import React, { useState } from "react";

const FinancialTable = ({ setRoeData }) => {
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
    });

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
        setRoeData({
            utilidadNeta: updatedData.utilidadNeta,
            patrimonio: updatedData.patrimonio,
        });
    };

    const calculateEVA = () => {
        const capitalInvertido =
            data.caja + data.clientes + data.existencias + data.activoFijo - data.totalPasivo;
        const costoCapital = 0.1; // 10%
        const eva = data.utilidadOperacion - capitalInvertido * costoCapital;
        alert(`EVA calculado: ${eva.toFixed(2)}`);
    };

    return (
        <section className=" bg-gray-100 text-gray-800 font-sans p-10">
            <div className="p-6 w-full">
                <div className="flex gap-10 justify-between w-full">
                    <article>
                        <h2 className="text-2xl font-bold text-green-700 mb-4">Estado de Resultados</h2>
                        <table className="table-auto w-full bg-white shadow rounded-lg">
                            <tbody>
                                <tr className="border-b">
                                    <td className="p-4 font-medium text-gray-600">Ventas</td>
                                    <td className="p-4">
                                        <input
                                            type="number"
                                            value={data.ventas}
                                            onChange={(e) => handleChange("ventas", parseFloat(e.target.value))}
                                            className="w-full border border-green-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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
                                            className="w-full border border-green-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    </td>
                                </tr>
                                <tr className="border-b">
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
                                            className="w-full border border-green-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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
                                            className="w-full border border-green-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    </td>
                                </tr>
                                <tr className="border-b">
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
                                            className="w-full border border-green-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-4 font-medium text-gray-600">Utilidad Antes de Impuestos</td>
                                    <td className="p-4">{data.utilidadAntesImpuestos.toFixed(2)}</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-4 font-medium text-gray-600">Impuesto a la Renta</td>
                                    <td className="p-4">{data.impuestoRenta.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-gray-600">Utilidad Neta</td>
                                    <td className="p-4 font-bold">{data.utilidadNeta.toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                    <article>
                        <h2 className="text-2xl font-bold text-green-700 mb-4">Balance de Situación</h2>
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
                                                className="w-full border border-green-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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
                                                className="w-full border border-green-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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
                                                className="w-full border border-green-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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
                                                className="w-full border border-green-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                            />
                                        </td>
                                    </tr>
                                    <tr className="border-b">
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
                                                className="w-full border border-green-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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
                                                className="w-full border border-green-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                            />
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-bold text-gray-600">Total Pasivo</td>
                                        <td className="p-4 font-bold">{data.totalPasivo.toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium text-gray-600">Patrimonio</td>
                                        <td className="p-4">{data.patrimonio.toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </article>
                </div>
            </div>
            <button
                onClick={calculateEVA}
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all"
            >
                Calcular EVA
            </button>
        </section>
    );
};

export default FinancialTable;
