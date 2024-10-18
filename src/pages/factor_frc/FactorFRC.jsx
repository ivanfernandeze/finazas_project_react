import React from 'react'
import { Typography } from '@material-tailwind/react';
import Formula from './components/formula';
import EvaluarFuncion from './components/EvaluarFuncion';
import { Button } from "@material-tailwind/react";

function FactorFRC() {
    const [ejemplo, setEjemplo] = React.useState(null);
    const handleExample = () => {
        const ejemplo = {
            P: 100000,
            i: 0.06,
            n: 8,
            decimales: 2
        };
        setEjemplo(ejemplo);
    }
    return (
        <section className='flex flex-col items-center'>
            {/* <h1 className='text-5xl'>Factor de Recuperacion de Capital(FRC)</h1> */}
            <figure className="relative h-96 w-full">
                <img
                    className="h-full w-full rounded-xl object-cover object-center"
                    src="FRC/finanzas.webp"
                    alt="nature image"
                />
                <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                    <div>
                        <Typography variant='h1' color='green' textGradient>Factor de Recuperacion de Capital - FRC</Typography>
                        <Typography color="gray" className="mt-2 font-normal">
                            Ciclo VI - 2024
                        </Typography>
                    </div>
                    <Typography variant="h5" color="blue-gray">
                        Finanzas Corporativas
                    </Typography>
                </figcaption>
            </figure>
            <div className='my-10'></div>
            <article className=''>
                <div className='grid grid-cols-2 gap-10 justify-center '>
                    <div className='flex flex-col gap-4 rounded-lg shadow-md py-8 px-2'>
                        <h2 className='text-3xl font-bold text-start text-[#00b140]'>¿Qué es?</h2>
                        <p className=''>Métrica financiera que se utiliza para determinar la cantidad de ingresos anuales necesarios para recuperar la inversión inicial durante un período específico.</p>
                        <br />
                        <h3 className='text-xl font-bold text-start text-[#00b140]'>Ejemplo Practico</h3>
                        <p>Una empresa está considerando una inversión en infraestructura tecnológica para mejorar la eficiencia operativa y la seguridad de sus sistemas. El departamento de TI propone adquirir servidores nuevos, mejorar el almacenamiento en la nube y actualizar la red interna. El costo total del proyecto es de <strong>$100,000 (valor presente)</strong>.
                            La empresa espera financiar esta inversión a una tasa de interés del <strong>6% anual (tasa de interés)</strong>. El proyecto tiene una vida útil estimada de <strong> 8 años (número de periodos)</strong>.</p>
                        <div className='w-full flex justify-center'>
                            <Button onClick={handleExample}>Resolver</Button>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-4 rounded-lg shadow-md w-max py-8 px-2'>
                        <h2 className='text-3xl font-bold text-[#00b140]'>¿Cómo se Calcula?</h2>
                        <div className='flex gap-4 items-center'>
                            <Formula />
                            <div className='text-4xl shadow-lg rounded-lg h-max  p-4 pr-8 bg-[#F0F0F0]'>
                                <p className='font-semibold text-xl text-gray-800'>Donde:</p>
                                <ul className='text-lg w-full '>
                                    <li>
                                        <strong >R</strong> = Valor uniforme de pago
                                    </li>
                                    <li>
                                        <strong >P</strong> = Valor presente
                                    </li>
                                    <li>
                                        <strong >i</strong> = Tasa de interés
                                    </li>
                                    <li>
                                        <strong >n</strong> = Número de periodos
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-10'></div>

                <div>
                    <h2 className='text-3xl font-bold text-center text-[#00b140]'>Calculadora para el valor uniforme de pago</h2>
                    <EvaluarFuncion ejemplo={ejemplo}></EvaluarFuncion>
                </div>
            </article >

            {/* <CardDefault src="/FRC/finanzas.webp" title="hola" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non enim dignissimos, atque voluptate aliquid et in natus provident iste voluptatibus iusto velit esse ab saepe nesciunt, explicabo incidunt suscipit. A.
Voluptate similique velit, rerum veritatis ipsam odio excepturi, ipsum autem atque provident ex non odit! Veritatis voluptas, beatae culpa omnis, quo in placeat, qui consequuntur architecto iste quidem quae quaerat."></CardDefault> */}
        </section>
    )
}

export default FactorFRC