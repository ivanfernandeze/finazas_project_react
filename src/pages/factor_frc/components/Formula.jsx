import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
function Formula() {
    return (
        <div className='flex px-6 py-4'>
            <div className="p-4 text-green-600 text-4xl font-bold shadow-lg rounded-lg">
                <BlockMath math={'R = P \\left[ \\frac{(1 + i)^n}{(1 + i)^n - 1} \\times i \\right]'} />
            </div>

        </div>
    )
}

export default Formula