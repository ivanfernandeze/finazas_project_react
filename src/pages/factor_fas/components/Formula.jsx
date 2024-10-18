import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
function Formula() {
    return (
        <div className='flex px-6 py-4 '>
            <div className="p-4 text-green-600 text-4xl font-bold shadow-lg rounded-lg bg-[#F0F0F0]">
                <BlockMath math={'P = R \\cdot \\frac{(1 + i)^n - 1}{(1 + i)^n \\cdot i}'} />
                <div className='text-sm font-light flex flex-col items-center'>
                    <p className='flex items-center gap-4'>
                        Numerador: <BlockMath math="(1 + i)^n - 1" />
                    </p>
                    <p className='flex items-center gap-4'>
                        Denominador: <BlockMath math="(1 + i)^n \cdot i" />
                    </p>
                    <p className='flex items-center gap-4'>
                        Fracción: <BlockMath math="\frac{(1 + i)^n - 1}{(1 + i)^n \cdot i}" />
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Formula