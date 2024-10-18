import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import FactorSimpleImage from "../../assets/factor_simple.jpg"
import FormFactorSimple from './components/FormFactorSimple'

function FactorSimple() {
  return (
    <section>
      <figure className="relative h-96 w-full">
                <img
                    className="h-full w-full  object-cover object-center"
                    src={FactorSimpleImage}
                    alt="nature image"
                />
                <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-sm border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                    <div>
                        <Typography variant='h1' color='green' textGradient>Factor simple de capitalizacion (FSC)</Typography>
                        <Typography color="gray" className="mt-2 font-normal">
                            Ciclo VI - 2024
                        </Typography>
                    </div>
                    <Typography variant="h5" color="blue-gray">
                        Finanzas Corporativas
                    </Typography>
                </figcaption>
        </figure>

        <div className="grid grid-cols-2 mt-10">
            <Card>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                     Transformacion de un Stock Inicial en un Stock Final
                    </Typography>
                    <Typography className='mb-4'>
                        Es el proceso mediante el cual los intereses producidos por un valor presente se adicionan a éste, al final de cada período, conformando un nuevo capital para el siguiente período y repitiéndose el proceso hasta el final del plazo.
                    </Typography>
                    <Typography className='mb-4'>
                        FSC = P(1 + i)^n
                    </Typography>
                    < FormFactorSimple />
                </CardBody>
            </Card>            
        </div>
    </section>
  )
}

export default FactorSimple
