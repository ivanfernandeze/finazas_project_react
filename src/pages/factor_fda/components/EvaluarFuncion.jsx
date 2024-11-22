import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import { ImputNumber } from './ImputNumber';
import { Button } from "@material-tailwind/react";

function EvaluarFuncionFDA() {
    const [S, setS] = useState(80000); // Valor objetivo
    const [i, setI] = useState(0.015); // Tasa de interés por periodo (trimestral)
    const [n, setN] = useState(30); // Número de periodos
    const [decimales, setDecimales] = useState(2); // Cantidad de decimales para redondeo
    const [steps, setSteps] = useState([]);

    // Función para redondear el resultado según los decimales ingresados
    const round = (value) => {
        return parseFloat(value.toFixed(decimales));
    };

    const handleSolve = () => {
        // 1. Calcular A = (1 + i)^n y redondear
        const A = evaluate(`(1 + ${i})^${n}`);
        const A_redondeado = round(A);
        const step1 = {
            part: "Calcular (1 + i)^n",
            base: 'A = (1 + i)^n',
            equation: `A = (1 + ${i})^{${n}}`,
            result: A_redondeado // Aplicamos redondeo
        };

        // 2. Calcular el denominador: A - 1 y redondear
        const denominador = A_redondeado - 1;
        const denominador_redondeado = round(denominador);
        const step2 = {
            part: "Calcular el denominador",
            base: 'Denominador = A - 1',
            equation: `Denominador = ${A_redondeado} - 1`,
            result: denominador_redondeado // Aplicamos redondeo
        };

        // 3. Calcular R = S * (i / denominador) y redondear
        const R = S * (i / denominador_redondeado);
        const R_redondeado = round(R);
        const step3 = {
            part: "Calcular R",
            base: 'R = S * (i / Denominador)',
            equation: `R = ${S} * (${i} / ${denominador_redondeado})`,
            result: R_redondeado // Aplicamos redondeo
        };

        // Guardar los pasos con los valores redondeados en cada cálculo
        setSteps([step1, step2, step3]);
    };

    return (
        <div className='grid grid-cols-2 gap-10'>
            {/* Calculadora */}
            <div className='flex flex-col gap-4 items-center pb-8'>
                <h2 className='text-3xl font-light text-center'>Calculadora</h2>
                <ImputNumber className="text-black" label="Valor Futuro (S)" type="number" value={S} onChange={(e) => setS(Number(e.target.value))}></ImputNumber>
                <ImputNumber className="text-black" label="Tasa de Interés (en decimales)" type="number" value={i} onChange={(e) => setI(Number(e.target.value))}></ImputNumber>
                <ImputNumber className="text-black" label="Número de Periodos (n)" type="number" value={n} onChange={(e) => setN(Number(e.target.value))}></ImputNumber>
                <ImputNumber className="text-black" label="Cantidad de Decimales" type="number" value={decimales} onChange={(e) => setDecimales(Number(e.target.value))}></ImputNumber>
                <Button onClick={handleSolve}>Calcular paso a paso</Button>
            </div>
    
            {/* Solución paso a paso */}
            <div className='flex flex-col gap-4'>
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

export default EvaluarFuncionFDA;
