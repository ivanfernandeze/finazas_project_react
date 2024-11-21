import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import { ImputNumber } from './ImputNumber';
import { Button } from "@material-tailwind/react";

function EvaluarFuncion() {
    const [R, setR] = useState(200); 
    const [i, setI] = useState(0.00949); 
    const [n, setN] = useState(36); 
    const [decimales, setDecimales] = useState(2);
    const [steps, setSteps] = useState([]);

    const handleSolve = () => {
        // 1. Calcular A = (1 + i)^n
        const A = evaluate(`(1 + ${i})^${n}`);
        const step1 = {
            part: "Calcular (1 + i)^n",
            base: 'A = (1 + i)^n',
            equation: `A = (1 + ${i})^{${n}}`,
            result: A
        };
        console.log(A);
        
        // 2. Calcular el numerador: A - 1
        const numerador = evaluate(`${A} - 1`);
        const step2 = {
            part: "Calcular el numerador",
            base: 'Numerador = A - 1',
            equation: `Numerador = ${A} - 1`,
            result: numerador
        };
        console.log(numerador);

        // 3. Calcular S = R * (numerador / i)
        const S = evaluate(`${R} * (${numerador} / ${i})`);
        const step3 = {
            part: "Calcular S",
            base: 'S = R * (Numerador / i)',
            equation: `S = ${R} * (${numerador} / ${i})`,
            result: S
        };
        console.log(S);

        // Guardar los pasos en el estado
        setSteps([step1, step2, step3]);
    };

    return (
        <div className='flex flex-col gap-6 items-center py-10'>
            <div className='flex flex-col gap-4'>
                <ImputNumber className="text-black" label="Valor de Ahorro Mensual (R)" type="number" value={R} onChange={(e) => setR(e.target.value)}></ImputNumber>
                <ImputNumber className="text-black" label="Tasa de Interés Mensual (en decimales)" type="number" value={i} onChange={(e) => setI(e.target.value)}></ImputNumber>
                <ImputNumber className="text-black" label="Cantidad de Periodos (Meses)" type="number" value={n} onChange={(e) => setN(e.target.value)}></ImputNumber>
                <ImputNumber className="text-black" label="Cantidad de Decimales" type="number" value={decimales} onChange={(e) => setDecimales(e.target.value)}></ImputNumber>
            </div>
            <Button onClick={handleSolve}>Resolver paso a paso</Button>
            <div>
                {steps.map((step, index) => (
                    <div key={index} className='py-2 border-b-2'>
                        <div className='flex gap-2'>
                            <p className='font-semibold text-lg pb-3'>{index + 1}: {step.part}</p>
                            <BlockMath math={step.base} />
                        </div>
                        <BlockMath math={step.equation} />
                        <p>Resultado: {parseFloat(step.result).toFixed(decimales)}</p>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default EvaluarFuncion;
