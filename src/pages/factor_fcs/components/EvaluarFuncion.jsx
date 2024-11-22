import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import { ImputNumber } from './ImputNumber';
import { Button } from "@material-tailwind/react";

function EvaluarFuncion() {
    const [R, setR] = useState(800);  // Valor de ahorro mensual
    const [i, setI] = useState(0.09);  // Tasa de interés mensual
    const [n, setN] = useState(5);  // Cantidad de periodos (meses)
    const [decimales, setDecimales] = useState(2);  // Número de decimales para redondeo
    const [steps, setSteps] = useState([]);

    // Función para redondear el valor a los decimales seleccionados
    const round = (value) => {
        return parseFloat(value.toFixed(decimales));
    };

    const handleSolve = () => {
        // 1. Calcular A = (1 + i)^n y redondear según los decimales
        const A = evaluate(`(1 + ${i})^${n}`);
        const A_redondeado = round(A);
        const step1 = {
            part: "Calcular (1 + i)^n",
            base: 'A = (1 + i)^n',
            equation: `A = (1 + ${i})^{${n}}`,
            result: A_redondeado // Redondeado
        };

        // 2. Calcular el numerador: A - 1 y redondear
        const numerador = A_redondeado - 1;
        const numerador_redondeado = round(numerador);
        const step2 = {
            part: "Calcular el numerador",
            base: 'Numerador = A - 1',
            equation: `Numerador = ${A_redondeado} - 1`,
            result: numerador_redondeado // Redondeado
        };

        // 3. Calcular S = R * (numerador / i) y redondear
        const S = R * (numerador_redondeado / i);
        const S_redondeado = round(S);
        const step3 = {
            part: "Calcular S",
            base: 'S = R * (Numerador / i)',
            equation: `S = ${R} * (${numerador_redondeado} / ${i})`,
            result: S_redondeado // Redondeado
        };

        // Guardar los pasos con redondeo aplicado
        setSteps([step1, step2, step3]);
    };

    return (
        <div className='grid grid-cols-2 gap-10'>
            {/* Calculadora */}
            <div className='flex flex-col gap-4 items-center pb-8'>
                <h2 className='text-3xl font-light text-center'>Calculadora</h2>
                <ImputNumber className="text-black" label="Valor de Ahorro Mensual (R)" type="number" value={R} onChange={(e) => setR(Number(e.target.value))}></ImputNumber>
                <ImputNumber className="text-black" label="Tasa de Interés Mensual (en decimales)" type="number" value={i} onChange={(e) => setI(Number(e.target.value))}></ImputNumber>
                <ImputNumber className="text-black" label="Cantidad de Periodos (Meses)" type="number" value={n} onChange={(e) => setN(Number(e.target.value))}></ImputNumber>
                <ImputNumber className="text-black" label="Cantidad de Decimales" type="number" value={decimales} onChange={(e) => setDecimales(Number(e.target.value))}></ImputNumber>
                <Button onClick={handleSolve}>Resolver paso a paso</Button>
            </div>

            {/* Solución Paso a Paso */}
            <div className='flex flex-col gap-4'>
                <h3 className='text-2xl font-light text-center'>Solución Paso a Paso</h3>
                {steps.length > 0 && steps.map((step, index) => (
                    <div key={index} className='py-2 border-b-2'>
                        <div className='flex gap-2'>
                            <p className='font-semibold text-lg pb-3'>{index + 1}: {step.part}</p>
                            <BlockMath math={step.base} />
                        </div>
                        <BlockMath math={step.equation} />
                        <p>Resultado: {step.result}</p> {/* Mostrar el valor redondeado */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EvaluarFuncion;
