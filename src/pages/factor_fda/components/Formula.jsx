import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

function FormulaFDA() {
    return (
        <div className='flex px-6 py-4'>
            <div className="p-4 text-green-600 text-4xl font-bold shadow-lg rounded-lg">
                <BlockMath math={'R = S \\cdot \\frac{i}{(1 + i)^n - 1}'} />
                <div className='text-sm font-light flex flex-col items-center'>
                    <p className='flex items-center gap-4'>
                        Numerador: <BlockMath math="i" />
                    </p>
                    <p className='flex items-center gap-4'>
                        Denominador: <BlockMath math="(1 + i)^n - 1" />
                    </p>
                    <p className='flex items-center gap-4'>
                        Fracción: <BlockMath math="\\frac{i}{(1 + i)^n - 1}" />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FormulaFDA;
