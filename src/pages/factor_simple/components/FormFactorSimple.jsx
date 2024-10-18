import React, { useState } from 'react';
import { Input, Typography } from "@material-tailwind/react";
import {
Button,
} from "@material-tailwind/react";

function FormFactorSimple() {
  const [valorActual, setValorActual] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [tasaInteres, setTasaInteres] = useState('');
  const [montoFinal, setMontoFinal] = useState(null);

  const calcularMontoFinal = (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Convertir los valores a números
    const P = parseFloat(valorActual);
    const n = parseInt(periodo, 10);
    const i = parseFloat(tasaInteres) / 100; // Dividir por 100 para convertir a decimal

    // Calcular el monto final
    const M = P * Math.pow(1 + i, n);

    // Guardar el resultado en el estado
    setMontoFinal(M);
  };

  return (
    <form onSubmit={calcularMontoFinal}>
      <div className="space-y-4">
        <Input
          label="Valor Actual (P)"
          value={valorActual}
          onChange={(e) => setValorActual(e.target.value)}
        />
        <Input
          label="Periodo de Capitalización (n)"
          value={periodo}
          onChange={(e) => setPeriodo(e.target.value)}
        />
        <Input
          label="Tasa de Interés (%)"
          value={tasaInteres}
          onChange={(e) => setTasaInteres(e.target.value)}
        />
      </div>
      <Typography variant="small" color="gray" className="mt-4">
        La taza de capitalizacion y la cantidad de periodos deben estar en las mismas unidades
      </Typography>
      <Button type="submit" className="mt-6" fullWidth>
        Calcular Monto Final
      </Button>
      {montoFinal !== null && (
        <Typography variant="h6" color="" className="mt-4">
          Monto Final (F): {montoFinal.toFixed(2)}
        </Typography>
      )}
    </form>
  );
}

export default FormFactorSimple;