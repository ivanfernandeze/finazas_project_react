import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

import { FormRenta } from "./FormRenta"
import { useState } from "react";
   
export function CardRentabilidad({  title, definicion, formula }) {

    const [interpretacion, setInterpretacion] = useState('');
    return (
      <Card className="mt-6">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-5 text-center">
            <span className="border-b pb-2">{title}</span>
          </Typography>
          <div className="grid grid-cols-3 gap-5">
            <div className="">
                <Typography variant="h6" color="blue-gray" className="mb-4 text-center border-b">
                    Definicion
                </Typography>
                <Typography color="blue-gray">
                  {definicion}
                </Typography>
            </div>
            <div className="">
                <Typography variant="h6" color="blue-gray" className="mb-4 text-center border-b">
                    Fórmula
                </Typography>
                <Typography color="blue-gray">
                    {formula.formula}
                </Typography>
                < FormRenta setInterpretacion={setInterpretacion} formula={formula} />
            </div>
            <div className="">
                <Typography variant="h6" color="blue-gray" className="mb-4 text-center border-b">
                    Interpretación
                </Typography>
                <Typography color="blue-gray">
                    {interpretacion? interpretacion : "Aun no se calculo nada ..."}

                </Typography>
            </div>
          </div>
        </CardBody>
      </Card>
    );
}