import React, { useEffect, useRef, useState } from 'react';
import { evaluate } from 'mathjs';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import { ImputNumber } from './ImputNumber';
import { Button } from "@material-tailwind/react";
function EvaluarFuncion({ ejemplo }) {
    const [R, setR] = useState(100); // Valor uniforme de pago
    const [i, setI] = useState(0.05); // Tasa de interés
    const [n, setN] = useState(10); // Número de periodos
    const [decimales, setDecimales] = useState(3);
    const [steps, setSteps] = useState([]);

    const btnref = useRef(null);

    useEffect(() => {
        if (ejemplo) {
            setR(ejemplo.R);
            setI(ejemplo.i);
            setN(ejemplo.n);
            setDecimales(ejemplo.decimales);
            if (btnref.current) {
                btnref.current.focus();
            }
        }
    }, [ejemplo]);

    const handleSolve = () => {
        if (btnref.current) {
            btnref.current.blur();
        }
        // 1. Calcular A = (1 + i)^n
        const A = evaluate(`(1 + ${i})^${n}`);
        const step1 = {
            part: " Calcular FSC",
            base: 'A= (1 + i)^n',
            equation: `A = (1 + ${i})^{${n}}`,
            result: A
        };
        console.log(A);
        // 3. Calcular el Numerador B = A - 1
        const B = evaluate(`${A} - 1`);
        const step2 = {
            part: "Calcular el Numerador",
            base: 'B = A - 1',
            equation: `B = ${parseFloat(A).toFixed(decimales)} - 1`,
            result: B
        };
        console.log(B);
        // 3. Calcular el Denominador C = A*i
        const C = evaluate(`${A} * ${i}`);
        const step3 = {
            part: "Calcular el Denominador",
            base: 'C = A * i',
            equation: `C = ${parseFloat(A).toFixed(decimales)} * ${i}`,
            result: C
        };
        console.log(C);

        // 4. Calcular R = R * (B / C)
        const P = evaluate(`${R} * (${B} / ${C})`);
        const step4 = {
            part: "Multiplicar por P la fracción",
            base: 'P = R * \\frac{B}{C}',
            equation: `P = ${R} *\\frac{${parseFloat(B).toFixed(decimales)}}{${parseFloat(C).toFixed(decimales)}}`,
            result: P
        };
        console.log(P);
        // Guardar los pasos en el estado
        setSteps([step1, step2, step3, step4]);
    };

    return (
        <div className={`flex ${steps.length > 0 ? 'gap-20' : ''} py-10 justify-center`}>
            <div className='flex flex-col gap-4 py-8 px-4 bg-[#F0F0F0] rounded-xl h-max'>
                <ImputNumber className="text-black text-lg" label="Valor Uniforme" type="number" value={R} onChange={(e) => setR(e.target.value)}></ImputNumber>
                <ImputNumber className="text-black text-lg" label="Tasa de Interés (en Decimales)*" type="number" value={i} onChange={(e) => setI(e.target.value)}></ImputNumber>
                <ImputNumber className="text-black text-lg" label="Cantidad de Periodos*" type="number" value={n} onChange={(e) => setN(e.target.value)}></ImputNumber>
                <ImputNumber className="text-black text-lg" label="Cantidad de Decimales" type="number" value={decimales} onChange={(e) => setDecimales(e.target.value)}></ImputNumber>
                <p className='text-xs font-extralight text-wrap text-gray-700'>La taza de capitalizacion y la cantidad de periodos deben <br />estar en la misma unidad.
                    <br />Ejemplo: <br /> i = 5% (0.05) anual <br />n = 10 años
                </p>
                <Button ref={btnref} onClick={handleSolve} className='focus:bg-white border-2 focus:border-gray-900 focus:text-gray-800'>Resolver paso a paso</Button>
            </div>
            <div>
                {steps.length > 0 ? <p className='my-4 font-semibold text-xl -ml-4'>Pasos: </p> : null}
                {steps.map((step, index) => (
                    <div key={index} className='py-2 border-b-2 mb-10'>
                        <div className='flex gap-2'>
                            <p className='font-semibold text-lg pb-3 -ml-2'>{index + 1}: {step.part}</p>
                        </div>
                        <BlockMath math={step.base} />
                        <BlockMath math={step.equation} />
                        <p>Resultado: {parseFloat(step.result).toFixed(decimales)}</p>
                    </div>
                ))}
                {steps.length > 0 ? <p className='mt-4 font-semibold text-xl'>El valor presente es {parseFloat(steps[steps.length - 1].result).toFixed(decimales)}</p> : null}
            </div>
        </div >
    );
}

export default EvaluarFuncion;
