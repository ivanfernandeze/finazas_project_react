import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import { ImputNumber } from './ImputNumber';
import { Button } from "@material-tailwind/react";
function EvaluarFuncion() {
    const [P, setP] = useState(100); // Capital inicial
    const [i, setI] = useState(0.05); // Tasa de interés
    const [n, setN] = useState(10); // Número de periodos
    const [decimales, setDecimales] = useState(3);
    const [steps, setSteps] = useState([]);

    const handleSolve = () => {
        // 1. Calcular A = (1 + i)^n
        const A = evaluate(`(1 + ${i})^${n}`);
        const step1 = {
            part: " Calcular FSC",
            base: 'A= (1 + i)^n',
            equation: `A = (1 + ${i})^{${n}}`,
            result: A
        };
        console.log(A);
        // 3. Calcular el Numerador B = A*i
        const B = evaluate(`${A} * ${i}`);
        const step2 = {
            part: "Calcular el Numerador",
            base: 'B = A * i',
            equation: `B = ${A} * ${i}`,
            result: B
        };
        console.log(B);
        // 3. Calcular el Denominador C = A - 1
        const C = evaluate(`${A} - 1`);
        const step3 = {
            part: "Calcular el Denominador",
            base: 'C = A - 1',
            equation: `C = ${A} - 1`,
            result: C
        };
        console.log(C);
        // 4. Calcular R = P * (B / C)
        const R = evaluate(`${P} * (${B} / ${C})`);
        const step4 = {
            part: "Multiplicar por P la fracción",
            base: 'R = P * (B / C)',
            equation: `R = ${P} * (${B} / ${C})`,
            result: R
        };
        console.log(R);
        // Guardar los pasos en el estado
        setSteps([step1, step2, step3, step4]);
    };

    return (
        <div className='flex flex-col gap-6 items-center py-10'>
            <div className='flex flex-col gap-4'>
                <ImputNumber className="text-black" label="Valor Presente" type="number" value={P} onChange={(e) => setP(e.target.value)}></ImputNumber>
                <ImputNumber className="text-black" label="Tasa de Interés (en Decimales)*" type="number" value={i} onChange={(e) => setI(e.target.value)}></ImputNumber>
                <ImputNumber className="text-black" label="Cantidad de Periodos*" type="number" value={n} onChange={(e) => setN(e.target.value)}></ImputNumber>
                <ImputNumber className="text-black" label="Cantidad de Decimales" type="number" value={decimales} onChange={(e) => setDecimales(e.target.value)}></ImputNumber>
                <p className='text-xs font-extralight text-wrap text-gray-700'>La taza de capitalizacion y la cantidad de periodos deben <br />estar en la misma unidad.
                    <br />Ejemplo: <br /> i = 5% (0.05) anual <br />n = 10 años
                </p>
            </div>
            <div>
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
