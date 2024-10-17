import React from 'react'
import { Typography } from '@material-tailwind/react'
import { CardDefault } from './components/card'
import Formula from './components/formula'

function FactorFRC() {
    // alert('Factor FRC')
    return (
        <>
            {/* <h1 className='text-5xl'>Factor de Recuperacion de Capital(FRC)</h1> */}
            <figure className="relative h-96 w-full">
                <img
                    className="h-full w-full rounded-xl object-cover object-center"
                    src="FRC/finanzas.webp"
                    alt="nature image"
                />
                <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                    <div>
                        <Typography variant='h1' color='green' textGradient>Factor de Recuperacion de Capital(FRC)</Typography>
                        <Typography color="gray" className="mt-2 font-normal">
                            Ciclo VI - 2024
                        </Typography>
                    </div>
                    <Typography variant="h5" color="blue-gray">
                        Finanzas Corporativas
                    </Typography>
                </figcaption>
            </figure>
            <div className='flex flex-col items-center gap-4  rounded-lg shadow-md w-max py-8 px-2'>
                <h1 className='text-[#22577A] text-4xl font-bold'>Formula</h1>
                <Formula />
                <div className='border-2 w-full'>
                    <p>Donde:</p>
                    <ul>
                        <li>S = Valor Final acumulado
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

            </div>
            {/* <CardDefault src="/FRC/finanzas.webp" title="hola" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non enim dignissimos, atque voluptate aliquid et in natus provident iste voluptatibus iusto velit esse ab saepe nesciunt, explicabo incidunt suscipit. A.
Voluptate similique velit, rerum veritatis ipsam odio excepturi, ipsum autem atque provident ex non odit! Veritatis voluptas, beatae culpa omnis, quo in placeat, qui consequuntur architecto iste quidem quae quaerat."></CardDefault> */}
        </>
    )
}

export default FactorFRC