import React from 'react'
import { Typography } from '@material-tailwind/react'
import { CardDefault } from './components/Card'
import Formula from './components/formula'
import EvaluarFuncion from './components/EvaluarFuncion'

function FactorFCS() {
    return (
        <section className='flex flex-col items-center'>
            {/* Imagen y título */}
            <figure className="relative h-96 w-full">
                <img
                    className="h-full w-full rounded-xl object-cover object-center"
                    src="/src/assets/image.png"
                    alt="nature image"
                />
                <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                    <div>
                        <Typography variant='h1' color='green' textGradient>Factor de Capitalización de la Serie (FCS)</Typography>
                        <Typography color="gray" className="mt-2 font-normal">
                            Ciclo VI - 2024
                        </Typography>
                    </div>
                    <Typography variant="h5" color="blue-gray">
                        Finanzas Corporativas
                    </Typography>
                </figcaption>
            </figure>

            {/* Espacio en blanco */}
            <div className='my-10'></div>

            {/* Sección de definición y fórmula */}
            <article className=''>
                <div className='grid grid-cols-2 gap-10 justify-center '>
                    {/* Definición */}
                    <div className='flex flex-col items-center gap-4 rounded-lg shadow-md py-8 px-2'>
                        <h2 className='text-3xl font-light'>Definición</h2>
                        <p>El <strong>Factor de Capitalización de la Serie (FC$)</strong> se utiliza para calcular el valor acumulado de una serie de pagos periódicos constantes, aplicando una tasa de interés constante durante un período de tiempo.</p>
                    </div>

                    {/* Fórmula */}
                    <div className='flex flex-col items-center gap-4 rounded-lg shadow-md w-max py-8 px-2'>
                        <h2 className='text-3xl font-light'>Fórmula</h2>
                        <div className='flex gap-4 items-center'>
                            <Formula />
                            <div className='text-4xl shadow-lg rounded-lg h-max  p-4 pr-8'>
                                <p className='font-semibold text-xl text-gray-800'>Donde:</p>
                                <ul className='text-lg w-full'>
                                    <li>
                                        <strong>R</strong> = Pago periódico constante
                                    </li>
                                    <li>
                                        <strong>S</strong> = Valor acumulado final
                                    </li>
                                    <li>
                                        <strong>i</strong> = Tasa de interés
                                    </li>
                                    <li>
                                        <strong>n</strong> = Número de periodos
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Espacio en blanco */}
                <div className='my-10'></div>

                {/* Sección de calculadora */}
                <div>
                    <h2 className='text-3xl font-light text-center'>Calculadora</h2>
                    <EvaluarFuncion />
                </div>
            </article>
        </section>
    )
}

export default FactorFCS;
