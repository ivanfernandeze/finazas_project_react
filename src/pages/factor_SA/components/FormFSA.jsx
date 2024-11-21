import React, { useState } from 'react';
import { Input, Typography, Button } from "@material-tailwind/react";

function FormFSA() {
  const [valorFinal, setValorFinal] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [tasaInteres, setTasaInteres] = useState('');
  const [montoInicial, setMontoInicial] = useState(null);

  const calcularMontoInicial = (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Convertir los valores a números
    const F = parseFloat(valorFinal);
    const n = parseInt(periodo, 10);
    const i = parseFloat(tasaInteres) / 100; // Dividir por 100 para convertir a decimal

    // Calcular el valor inicial
    const P = F / Math.pow(1 + i, n);

    // Guardar el resultado en el estado
    setMontoInicial(P);
  };

  return (
    <form onSubmit={calcularMontoInicial}>
      <div className="space-y-4">
        <Input
          label="Valor Final (F)"
          value={valorFinal}
          type='number'
          onChange={(e) => setValorFinal(e.target.value)}
        />
        <Input
          label="Periodo de Capitalización (n)"
          value={periodo}
          type='number'
          onChange={(e) => setPeriodo(e.target.value)}
        />
        <Input
          label="Tasa de Interés (%)"
          value={tasaInteres}
          type='number'
          onChange={(e) => setTasaInteres(e.target.value)}
        />
      </div>
      <Typography variant="small" color="gray" className="mt-4">
        La taza de capitalizacion y la cantidad de periodos deben estar en las mismas unidades
      </Typography>
      <Button type="submit" className="mt-6" fullWidth>
        Calcular Monto Inicial
      </Button>

      {montoInicial !== null && (
        <Typography variant="h6" color="green" className="mt-4">
          Monto Inicial (P): {montoInicial.toFixed(2)}
        </Typography>
      )}
    </form>
  );
}

export default FormFSA;