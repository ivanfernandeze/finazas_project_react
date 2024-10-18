import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import { ImputNumber } from './ImputNumber';
import { Button } from "@material-tailwind/react";

function EvaluarFuncionFDA() {
    const [S, setS] = useState(35000); // Valor objetivo
    const [i, setI] = useState(0.00999); // Tasa de interés por periodo (trimestral)
    const [n, setN] = useState(60); // Número de periodos
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

        // 2. Calcular el denominador: A - 1
        const denominador = evaluate(`${A} - 1`);
        const step2 = {
            part: "Calcular el denominador",
            base: 'Denominador = A - 1',
            equation: `Denominador = ${A} - 1`,
            result: denominador
        };
        console.log(denominador);

        // 3. Calcular R = S * (i / denominador)
        const R = evaluate(`${S} * (${i} / ${denominador})`);
        const step3 = {
            part: "Calcular R",
            base: 'R = S * (i / Denominador)',
            equation: `R = ${S} * (${i} / ${denominador})`,
            result: R
        };
        console.log(R);

        // Guardar los pasos en el estado
        setSteps([step1, step2, step3]);
    };

    return (
        <div className='flex flex-col gap-6 items-center py-10'>
            <div className='flex flex-col gap-4'>
                <ImputNumber className="text-black" label="Valor Futuro (S)" type="number" value={S} onChange={(e) => setS(e.target.value)}></ImputNumber>
                <ImputNumber className="text-black" label="Tasa de Interés (en decimales)" type="number" value={i} onChange={(e) => setI(e.target.value)}></ImputNumber>
                <ImputNumber className="text-black" label="Número de Periodos (n)" type="number" value={n} onChange={(e) => setN(e.target.value)}></ImputNumber>
                <ImputNumber className="text-black" label="Cantidad de Decimales" type="number" value={decimales} onChange={(e) => setDecimales(e.target.value)}></ImputNumber>
            </div>
            <Button onClick={handleSolve}>Calcular paso a paso</Button>
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

export default EvaluarFuncionFDA;
