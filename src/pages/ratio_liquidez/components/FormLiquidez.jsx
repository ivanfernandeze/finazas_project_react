import {
    Input,
    Button,
    Typography
} from "@material-tailwind/react";
import { useState } from "react";
import { streamChatCompletion } from "../../../services/api-ph1-microsoft";
   
export function FormLiquidez({ setInterpretacion, formula}) {

  const [utilidadNeta, setUtilidadNeta] = useState(0);
  const [ventasNetas, setVentasNetas] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcularResultado = async () => {
    if (ventasNetas !== 0) {
      const resultadoCalculado = (utilidadNeta / ventasNetas);
      setResultado(resultadoCalculado.toFixed(2));
      const message = [{ role: "user", content: `${formula.interpretacionName} ${resultadoCalculado}%`}]
      const result = await streamChatCompletion(message, 300);
      setInterpretacion(result);
    } else {
      setResultado("el " + formula.denominador + " no puede ser 0");
    }
  }

  return (
    <form className="mt-8 mb-2">
    <div className="mb-1 flex flex-col gap-6">
      <Typography variant="h6" color="blue-gray" className="-mb-3">
        {formula? formula.numerador : "Numerador"}
      </Typography>
      <Input
        size="lg"
        placeholder = {formula? formula.numerador : "Numerador"}
        onChange={(e) => setUtilidadNeta(Number(e.target.value))}
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
      <Typography variant="h6" color="blue-gray" className="-mb-3">
        {formula? formula.denominador : "Denominador"}  
      </Typography>
      <Input
        size="lg"
        placeholder={formula? formula.denominador : "Denominador"} 
        onChange={(e) => setVentasNetas(Number(e.target.value))}
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
    </div>
    <Button className="mt-6" fullWidth onClick={calcularResultado}>
      Calcular
    </Button>
    <div className="mt-2">
      <Typography color="blue-gray mt-3">
        {formula? formula.resultado:""}: {resultado}
      </Typography>
    </div>
  </form>
  );
}