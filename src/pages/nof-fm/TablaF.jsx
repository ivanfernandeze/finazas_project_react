import React, { useState } from "react";
import TableInputCell from "./TableInputCell";

const TablaF = () => {
    const [firstColumnWidth, setFirstColumnWidth] = useState(300);

    const [dataCorrientes, setDataCorrientes] = useState([
        { id: 1, name: "Efectivo y Equivalente Efectivo", values: ["", "", ""] },
        { id: 2, name: "Cuentas por Cobrar Comerciales", values: ["", "", ""] },
        { id: 3, name: "Existencias", values: ["", "", ""] },
    ]);

    const handleChange = (table, rowId, colIndex, newValue) => {
        const updateData = (data, setData) => {
            setData(
                data.map((row) =>
                    row.id === rowId
                        ? {
                              ...row,
                              values: row.values.map((value, index) =>
                                  index === colIndex ? newValue : value
                              ),
                          }
                        : row
                )
            );
        };

        if (table === "corrientes") updateData(dataCorrientes, setDataCorrientes);
    };

    const calculateTotal = (data, colIndex) => {
        return data
            .map((row) => parseFloat(row.values[colIndex]) || 0)
            .reduce((acc, value) => acc + value, 0);
    };

    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-300">
                {/* Encabezado */}
                <thead className="bg-blue-500 text-white">
                    <tr>
                        <th className="px-4 py-2 text-left">Activos Corrientes</th>
                        <th className="px-4 py-2 text-center">2022</th>
                        <th className="px-4 py-2 text-center">2023</th>
                        <th className="px-4 py-2 text-center">2024</th>
                    </tr>
                </thead>
                {/* Cuerpo */}
                <tbody>
                    {dataCorrientes.map((row) => (
                        <tr
                            key={row.id}
                            className="odd:bg-gray-100 even:bg-gray-50 hover:bg-gray-200"
                        >
                            <td className="border px-4 py-2">{row.name}</td>
                            {row.values.map((value, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="border px-4 py-2 text-center"
                                >
                                    <TableInputCell
                                        initialValue={value}
                                        onChange={(newValue) =>
                                            handleChange("corrientes", row.id, colIndex, newValue)
                                        }
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                    {/* Fila Total */}
                    <tr className="bg-gray-200 font-semibold">
                        <td className="border px-4 py-2">Total Activo Corriente</td>
                        {[0, 1, 2].map((colIndex) => (
                            <td
                                key={colIndex}
                                className="border px-4 py-2 text-center"
                            >
                                {calculateTotal(dataCorrientes, colIndex).toFixed(2)}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TablaF;
