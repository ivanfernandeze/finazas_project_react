import React, { useState } from 'react';
import TableInputCell from './TableInputCell';

const TablaF = () => {
    const [firstColumnWidth, setFirstColumnWidth] = useState(300);

    // Datos de las tablas
    const [dataCorrientes, setDataCorrientes] = useState([
        { id: 1, name: 'EFECTIVO Y EQUIVALENTE FECTIVO', values: ['', '', ''] },
        { id: 2, name: 'CUENTAS POR COBRAR COMERCIALES', values: ['', '', ''] },
        { id: 3, name: 'EXISTENCIAS', values: ['', '', ''] },
    ]);

    const [dataNoCorrientes, setDataNoCorrientes] = useState([
        { id: 5, name: 'INMUEBLE, MAQUINARIA Y EQUIPO', values: ['', '', ''] },
        { id: 6, name: 'ACTIVOS INTANGIBLES', values: ['', '', ''] },
    ]);

    const [dataPasivo, setDataPasivo] = useState([
        { id: 1, name: 'Cuentas por pagar comerciales', values: ['', '', ''] },
        { id: 2, name: 'Obligaciones Financieras', values: ['', '', ''] },
    ]);

    const [dataPasivoObligaciones, setDataPasivoObligaciones] = useState([
        { id: 1, name: 'Obligaciones Financieras', values: ['', '', ''] },
    ]);

    // Nueva tabla de PATRIMONIO
    const [dataPatrimonio, setDataPatrimonio] = useState([
        { id: 1, name: 'Capital', values: ['', '', ''] },
        { id: 2, name: 'Resultados Acumulados', values: ['', '', ''] },
    ]);

    // Nueva tabla de VENTAS
    const [dataVentas, setDataVentas] = useState([
        { id: 1, name: 'Ventas', values: ['', '', ''] },
        { id: 2, name: 'Costo de Ventas', values: ['', '', ''] },
    ]);

    const handleChange = (table, rowId, colIndex, newValue) => {
        const newValueParsed = newValue === '' ? '' : parseFloat(newValue);
        const updateData = (data, setData) => {
            setData(data.map((row) =>
                row.id === rowId
                    ? { ...row, values: row.values.map((value, index) => index === colIndex ? newValueParsed : value) }
                    : row
            ));
        };

        if (table === 'corrientes') updateData(dataCorrientes, setDataCorrientes);
        if (table === 'noCorrientes') updateData(dataNoCorrientes, setDataNoCorrientes);
        if (table === 'pasivo') updateData(dataPasivo, setDataPasivo);
        if (table === 'pasivoObligaciones') updateData(dataPasivoObligaciones, setDataPasivoObligaciones);
        if (table === 'patrimonio') updateData(dataPatrimonio, setDataPatrimonio);
        if (table === 'ventas') updateData(dataVentas, setDataVentas);
    };

    const calculateTotal = (table, colIndex) => {
        const data = table === 'corrientes' ? dataCorrientes : table === 'noCorrientes' ? dataNoCorrientes : table === 'pasivo' ? dataPasivo : table === 'pasivoObligaciones' ? dataPasivoObligaciones : table === 'ventas' ? dataVentas : dataPatrimonio;
        return data
            .map((row) => parseFloat(row.values[colIndex]) || 0)
            .reduce((acc, value) => acc + value, 0);
    };

    const calculateDifference = (table, colIndex) => {
        const data = table === 'corrientes' ? dataCorrientes : table === 'noCorrientes' ? dataNoCorrientes : table === 'pasivo' ? dataPasivo : table === 'pasivoObligaciones' ? dataPasivoObligaciones : table === 'ventas' ? dataVentas : dataPatrimonio;
        
        const firstValue = parseFloat(data[0].values[colIndex]) || 0; // Primer valor de la columna
        return data
            .map((row) => parseFloat(row.values[colIndex]) || 0) // Convertimos los valores a números
            .reduce((acc, value, index) => {
                if (index === 0) {
                    return acc; // No hacer nada con el primer valor
                }
                return acc - value; // Restamos los demás valores al primero
            }, firstValue); // Iniciamos con el primer valor
    };
    
    const getValue = (tableData, rowIndex, colIndex) => {
        if (
            rowIndex >= 0 && rowIndex < tableData.length && // Verifica que la fila esté dentro del rango
            colIndex >= 0 && colIndex < tableData[rowIndex].values.length // Verifica que la columna esté dentro del rango
        ) {
            return tableData[rowIndex].values[colIndex];
        }
        return null; // Retorna null si los índices son inválidos
    };

    return (
        <div>
            {/* Tabla Activos Corrientes */}
            <table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '-1px' }}>
                <thead>
                    <tr>
                        <th style={{ padding: '10px', width: `${firstColumnWidth}px` }}>ACTIVOS</th>
                        <th style={{ padding: '10px', width: `${firstColumnWidth - 100}px` }}>2022</th>
                        <th style={{ padding: '10px', width: `${firstColumnWidth - 100}px` }}>2023</th>
                        <th style={{ padding: '10px', width: `${firstColumnWidth - 100}px` }}>2024</th>
                    </tr>
                </thead>
                <tbody>
                    {dataCorrientes.map((row) => (
                        <tr key={row.id}>
                            <td style={{ padding: '10px', textAlign: 'center', width: `${firstColumnWidth}px` }}>
                                {row.name}
                            </td>
                            {row.values.map((value, colIndex) => (
                                <td key={colIndex} style={{ padding: '10px', textAlign: 'center' }}>
                                    <TableInputCell
                                        initialValue={value}
                                        onChange={(newValue) => handleChange('corrientes', row.id, colIndex, newValue)}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}

                    {/* Fila Total Activo Corriente */}
                    <tr>
                        <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold', width: `${firstColumnWidth}px` }}>
                            Total Activo Corriente
                        </td>
                        {[0, 1, 2].map((colIndex) => (
                            <td key={colIndex} style={{ padding: '10px', textAlign: 'center' }}>
                                {calculateTotal('corrientes', colIndex).toFixed(2)}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>

            {/* Tabla Activos No Corrientes */}
            <table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '-1px' }}>
                <tbody>
                    {dataNoCorrientes.map((row) => (
                        <tr key={row.id}>
                            <td style={{ padding: '10px', textAlign: 'center', width: `${firstColumnWidth}px` }}>
                                {row.name}
                            </td>
                            {row.values.map((value, colIndex) => (
                                <td key={colIndex} style={{ padding: '10px', textAlign: 'center' }}>
                                    <TableInputCell
                                        initialValue={value}
                                        onChange={(newValue) => handleChange('noCorrientes', row.id, colIndex, newValue)}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}

                    {/* Fila Total Activo No Corriente */}
                    <tr>
                        <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold', width: `${firstColumnWidth}px` }}>
                            Total Activo No Corriente
                        </td>
                        {[0, 1, 2].map((colIndex) => (
                            <td key={colIndex} style={{ padding: '10px', textAlign: 'center' }}>
                                {calculateTotal('noCorrientes', colIndex).toFixed(2)}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>

            {/* Tabla PASIVO */}
            <table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
                <thead>
                    <tr>
                        <th style={{ padding: '10px', width: `${firstColumnWidth}px` }}>PASIVO</th>
                        <th style={{ padding: '10px', width: `${firstColumnWidth - 100}px` }}>2022</th>
                        <th style={{ padding: '10px', width: `${firstColumnWidth - 100}px` }}>2023</th>
                        <th style={{ padding: '10px', width: `${firstColumnWidth - 100}px` }}>2024</th>
                    </tr>
                </thead>
                <tbody>
                    {dataPasivo.map((row) => (
                        <tr key={row.id}>
                            <td style={{ padding: '10px', textAlign: 'center', width: `${firstColumnWidth}px` }}>
                                {row.name}
                            </td>
                            {row.values.map((value, colIndex) => (
                                <td key={colIndex} style={{ padding: '10px', textAlign: 'center' }}>
                                    <TableInputCell
                                        initialValue={value}
                                        onChange={(newValue) => handleChange('pasivo', row.id, colIndex, newValue)}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}

                    {/* Fila Total Pasivo Corriente */}
                    <tr>
                        <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold', width: `${firstColumnWidth}px` }}>
                            Total Pasivo Corriente
                        </td>
                        {[0, 1, 2].map((colIndex) => (
                            <td key={colIndex} style={{ padding: '10px', textAlign: 'center' }}>
                                {calculateTotal('pasivo', colIndex).toFixed(2)}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>

            {/* Tabla PATRIMONIO */}
            <table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
                <thead>
                    <tr>
                        <th style={{ padding: '10px', width: `${firstColumnWidth}px` }}>PATRIMONIO</th>
                        <th style={{ padding: '10px', width: `${firstColumnWidth - 100}px` }}>2022</th>
                        <th style={{ padding: '10px', width: `${firstColumnWidth - 100}px` }}>2023</th>
                        <th style={{ padding: '10px', width: `${firstColumnWidth - 100}px` }}>2024</th>
                    </tr>
                </thead>
                <tbody>
                    {dataPatrimonio.map((row) => (
                        <tr key={row.id}>
                            <td style={{ padding: '10px', textAlign: 'center', width: `${firstColumnWidth}px` }}>
                                {row.name}
                            </td>
                            {row.values.map((value, colIndex) => (
                                <td key={colIndex} style={{ padding: '10px', textAlign: 'center' }}>
                                    <TableInputCell
                                        initialValue={value}
                                        onChange={(newValue) => handleChange('patrimonio', row.id, colIndex, newValue)}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}

                    {/* Fila Total Patrimonio */}
                    <tr>
                        <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold', width: `${firstColumnWidth}px` }}>
                            Total Patrimonio
                        </td>
                        {[0, 1, 2].map((colIndex) => (
                            <td key={colIndex} style={{ padding: '10px', textAlign: 'center' }}>
                                {calculateTotal('patrimonio', colIndex).toFixed(2)}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>

            {/* Nueva tabla de VENTAS */}
            <table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
                <thead>
                    <tr>
                        <th style={{ padding: '10px', width: `${firstColumnWidth}px` }}>VENTAS</th>
                        <th style={{ padding: '10px', width: `${firstColumnWidth - 100}px` }}>2022</th>
                        <th style={{ padding: '10px', width: `${firstColumnWidth - 100}px` }}>2023</th>
                        <th style={{ padding: '10px', width: `${firstColumnWidth - 100}px` }}>2024</th>
                    </tr>
                </thead>
                <tbody>
                    {dataVentas.map((row) => (
                        <tr key={row.id}>
                            <td style={{ padding: '10px', textAlign: 'center', width: `${firstColumnWidth}px` }}>
                                {row.name}
                            </td>
                            {row.values.map((value, colIndex) => (
                                <td key={colIndex} style={{ padding: '10px', textAlign: 'center' }}>
                                    <TableInputCell
                                        initialValue={value}
                                        onChange={(newValue) => handleChange('ventas', row.id, colIndex, newValue)}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                    {/* Fila Utilidad Bruta */}
                    <tr>
                        <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold', width: `${firstColumnWidth}px` }}>
                        Utilidad Bruta
                        </td>
                        {[0, 1, 2].map((colIndex) => (
                            <td key={colIndex} style={{ padding: '10px', textAlign: 'center' }}>
                                {calculateDifference('ventas', colIndex).toFixed(2)}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>

            {/* Nueva tabla de Fondo de Maniobra */}
            <table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
                <thead>
                    <tr>
                        <th colSpan="4" style={{ padding: '10px', width: `${firstColumnWidth}px` }}>COMPARACION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold', width: `${firstColumnWidth}px` }}>
                        FM
                        </td>
                        <td style={{ padding: '10px', textAlign: 'center', width: `${firstColumnWidth-100}px` }}>
                        {getValue(dataCorrientes, 0, 0) + getValue(dataCorrientes, 1, 0) + getValue(dataCorrientes, 2, 0)-
                        getValue(dataNoCorrientes, 0, 0) - getValue(dataNoCorrientes, 1, 0)}
                        </td>
                        <td style={{ padding: '10px', textAlign: 'center', width: `${firstColumnWidth-100}px` }}>
                        {getValue(dataCorrientes, 0, 1) + getValue(dataCorrientes, 1, 1) + getValue(dataCorrientes, 2, 1)
                        -getValue(dataNoCorrientes, 0, 1) - getValue(dataNoCorrientes, 1, 1)}
                        </td>
                        <td style={{ padding: '10px', textAlign: 'center', width: `${firstColumnWidth-100}px` }}>
                        {getValue(dataCorrientes, 0, 2) + getValue(dataCorrientes, 1, 2) + getValue(dataCorrientes, 2, 2)
                        -getValue(dataNoCorrientes, 0, 2) - getValue(dataNoCorrientes, 1, 2)}
                        </td>
                    </tr>
                    <tr>
                    <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold', width: `${firstColumnWidth}px` }}>
                        SALDO NOF 1
                        </td>
                        <td style={{ padding: '10px', textAlign: 'center', width: `${firstColumnWidth-100}px` }}>
                        {(getValue(dataCorrientes, 1, 0)/360)*(360/(getValue(dataVentas, 0, 0)/getValue(dataCorrientes, 1, 0)))}
                        </td>
                        <td style={{ padding: '10px', textAlign: 'center', width: `${firstColumnWidth-100}px` }}>
                        {(getValue(dataCorrientes, 1, 1)/360)*(360/(getValue(dataVentas, 0, 1)/getValue(dataCorrientes, 1, 1)))}
                        </td>
                        <td style={{ padding: '10px', textAlign: 'center', width: `${firstColumnWidth-100}px` }}>
                        {(getValue(dataCorrientes, 1, 2)/360)*(360/(getValue(dataVentas, 0, 2)/getValue(dataCorrientes, 1, 2)))}
                        </td>
                    </tr>
                    
                    <tr>
                    <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold', width: `${firstColumnWidth}px` }}>
                        SALDO NOF 2
                        </td>
                        <td style={{ padding: '10px', textAlign: 'center', width: `${firstColumnWidth-100}px` }}>
                        {((getValue(dataCorrientes, 2,0)/360)*(360/(getValue(dataVentas, 1, 0)/getValue(dataCorrientes, 2,0))))}
                        </td>
                        <td style={{ padding: '10px', textAlign: 'center', width: `${firstColumnWidth-100}px` }}>
                        {((getValue(dataCorrientes, 2,1)/360)*(360/(getValue(dataVentas, 1, 1)/getValue(dataCorrientes, 2,1))))}
                        </td>
                        <td style={{ padding: '10px', textAlign: 'center', width: `${firstColumnWidth-100}px` }}>
                        {((getValue(dataCorrientes, 2,2)/360)*(360/(getValue(dataVentas, 1, 2)/getValue(dataCorrientes, 2,2))))}
                        </td>
                    </tr>
                    
                    <tr>
                    <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold', width: `${firstColumnWidth}px` }}>
                        SALDO NOF 3
                        </td>
                        <td style={{ padding: '10px', textAlign: 'center', width: `${firstColumnWidth-100}px` }}>
                        {((getValue(dataPasivo,0,0)/360)*(360/(getValue(dataVentas,1,0)/getValue(dataPasivo,0,0))))}
                        </td>
                        <td style={{ padding: '10px', textAlign: 'center', width: `${firstColumnWidth-100}px` }}>
                        {((getValue(dataPasivo,0,1)/360)*(360/(getValue(dataVentas,1,1)/getValue(dataPasivo,0,1))))}
                        </td>
                        <td style={{ padding: '10px', textAlign: 'center', width: `${firstColumnWidth-100}px` }}>
                        {((getValue(dataPasivo,0,2)/360)*(360/(getValue(dataVentas,1,2)/getValue(dataPasivo,0,2))))}
                        </td>
                    </tr>
                    
                    <tr>
                    <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold', width: `${firstColumnWidth}px` }}>
                        NOF
                        </td>
                        <td style={{ padding: '10px', textAlign: 'center', width: `${firstColumnWidth-100}px` }}>
                        {(getValue(dataCorrientes, 1, 0)/360)*(360/(getValue(dataVentas, 0, 0)/getValue(dataCorrientes, 1, 0)))+
                        ((getValue(dataCorrientes, 2,0)/360)*(360/(getValue(dataVentas, 1, 0)/getValue(dataCorrientes, 2,0))))-
                        ((getValue(dataPasivo,0,0)/360)*(360/(getValue(dataVentas,1,0)/getValue(dataPasivo,0,0))))}
                        </td>
                        <td style={{ padding: '10px', textAlign: 'center', width: `${firstColumnWidth-100}px` }}>
                        {(getValue(dataCorrientes, 1, 1)/360)*(360/(getValue(dataVentas, 0, 1)/getValue(dataCorrientes, 1, 1)))+
                        ((getValue(dataCorrientes, 2,1)/360)*(360/(getValue(dataVentas, 1, 1)/getValue(dataCorrientes, 2,1))))-
                        ((getValue(dataPasivo,0,1)/360)*(360/(getValue(dataVentas,1,1)/getValue(dataPasivo,0,1))))}
                        </td>
                        <td style={{ padding: '10px', textAlign: 'center', width: `${firstColumnWidth-100}px` }}>
                        {(getValue(dataCorrientes, 1, 2)/360)*(360/(getValue(dataVentas, 0, 2)/getValue(dataCorrientes, 1, 2)))+
                        ((getValue(dataCorrientes, 2,2)/360)*(360/(getValue(dataVentas, 1, 2)/getValue(dataCorrientes, 2,2))))-
                        ((getValue(dataPasivo,0,2)/360)*(360/(getValue(dataVentas,1,2)/getValue(dataPasivo,0,2))))}
                        </td>
                    </tr>                    
                </tbody>
            </table>
        </div>
    );
};

export default TablaF;
