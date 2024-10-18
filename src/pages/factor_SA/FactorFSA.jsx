
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import FactorSimpleImage from "../../assets/factor_simple.jpg"
import FormFSA from './components/FormFSA'


import React from 'react'

function FactorFSA() {
  return (
    <section>
      <figure className="relative h-96 w-full">
                <img
                    className="h-full w-full object-cover object-center"
                    src={FactorSimpleImage}
                    alt="nature image"
                />
                <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-sm border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                    <div>
                        <Typography variant='h1' color='green' textGradient>Factor simple de actualizacion (FSA)</Typography>
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
                    Transformacion de un stock final en un stock inicial
                    </Typography>
                    <Typography className='mb-4'>
                        El factor de actualización se define como el número de veces que una cantidad determinada de un bien ha visto crecer su valor, en un determinado periodo de tiempo, debido a la inflación.
                    </Typography>
                    < FormFSA />
                </CardBody>
            </Card>
        </div>
    </section>
  )
}

export default FactorFSA
