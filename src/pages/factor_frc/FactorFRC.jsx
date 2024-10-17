import React from 'react'
import { Typography } from '@material-tailwind/react'
import { CardDefault } from './components/card'
import Formula from './components/formula'
import { ImputNumber } from './components/ImputNumber'

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
            <section className='w-full flex flex-col items-center'>
                <div className='my-10'></div>
                <div className='flex flex-col items-center gap-4 rounded-lg shadow-md w-max py-8 px-2'>
                    <h2 className='text-3xl font-light'>Fórmula</h2>
                    <div className='flex gap-4 items-center'>
                        <Formula />
                        <div className='text-4xl shadow-lg rounded-lg h-max  p-4 pr-8'>
                            <p className='font-semibold text-xl text-gray-800'>Donde:</p>
                            <ul className='text-lg'>
                                <li>
                                    <strong>R</strong> = valor uniforme de pago
                                </li>
                                <li>
                                    <strong>P</strong> = valor presente
                                </li>
                                <li>
                                    <strong>i</strong> = tasa de interes
                                </li>
                                <li>
                                    <strong>n</strong> = numero de periodos
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>
                <div className='flex flex-col items-center gap-4 rounded-lg shadow-md w-max py-8 px-2'>
                    <h2 className='text-3xl font-light'>Definición</h2>
                    <div className='text-2xl shadow-lg rounded-lg h-max  p-4 pr-8'>
                        <p className='font-semibold text-xl text-gray-800'>El Factor de Recuperación de Capital (FRC) es el valor uniforme de pago que se debe realizar en un periodo determinado para recuperar el valor presente de una inversión.</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-3xl font-light'>Calculadora</h2>
                    <div className='my-10'></div>
                    <div className='flex gap-4'>
                        <ImputNumber label="Valor Presente"></ImputNumber>
                        <ImputNumber label="Tasa de Interes"></ImputNumber>
                        <ImputNumber label="Número de Periodos"></ImputNumber>
                    </div>

                </div>
            </section >

            {/* <CardDefault src="/FRC/finanzas.webp" title="hola" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non enim dignissimos, atque voluptate aliquid et in natus provident iste voluptatibus iusto velit esse ab saepe nesciunt, explicabo incidunt suscipit. A.
Voluptate similique velit, rerum veritatis ipsam odio excepturi, ipsum autem atque provident ex non odit! Veritatis voluptas, beatae culpa omnis, quo in placeat, qui consequuntur architecto iste quidem quae quaerat."></CardDefault> */}
        </>
    )
}

export default FactorFRC