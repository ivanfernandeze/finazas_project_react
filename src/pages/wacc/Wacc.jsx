import React, { useEffect, useRef } from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    IconButton,
    MenuList,
    Menu,
    MenuItem,
    MenuHandler,
} from "@material-tailwind/react";
import { streamChatCompletion } from '../../services/api-ph1-microsoft';
import { ModalInfo } from './components/ModalInfo';



function Wacc() {
  const TASA_DE_IMPUESTO = 0.295;
  const rmRef = useRef(undefined);
  const rfRef = useRef(undefined);
  const betaRef = useRef(undefined);
  const riesgoPaisRef = useRef(undefined);
  const pasivosCortoRef = useRef(undefined);
  const pasivosLargoRef = useRef(undefined);
  const totalActivosRef = useRef(undefined);

  const currencies = ["TEA", "TEM"];
  const [tipoPasivoCorto, setTipoPasivoCorto] = React.useState("TEA");
  const [valorTasaCorto, setValorTasaCorto] = React.useState(undefined);

  const [tipoPasivoLargo, setTipoPasivoLargo] = React.useState("TEA");
  const [valorTasaLargo, setValorTasaLargo] = React.useState(undefined);

  const [wacc, setWacc] = React.useState(undefined);
  const [tasaq, setTasaq] = React.useState(undefined);
  const [tasad, setTasad] = React.useState(undefined);

  const [message, setMessage] = React.useState(undefined);
  const [loadingMessage, setLoadingMessage] = React.useState(false);


  const handleCurrencyChange = (type, currency) => {
    if (type === "corto") {
      setTipoPasivoCorto(currency);
    } else {
      setTipoPasivoLargo(currency);
    }
  };

  
  const fromTEMtoTEA = (TEM) => {
    return Math.pow(1 + (parseFloat(TEM)/100), 12) - 1;
  }


  const handleCalcularWacc = (e) => {
    e.preventDefault();
/* 
    console.log("Rm", rmRef.current);
    console.log("Rf", rfRef.current);
    console.log("Beta", betaRef.current);
    console.log("Riesgo Pais", riesgoPaisRef.current);
    console.log("Pasivos C/P", pasivosCortoRef.current);
    console.log("Pasivos L/P", pasivosLargoRef.current);
    console.log("Total Activos", totalActivosRef.current); */

    console.log("valor tasa corto", tipoPasivoCorto);
    console.log("valor tasa largo", tipoPasivoLargo);

    if (!rmRef.current || !rfRef.current || !betaRef.current || !riesgoPaisRef.current || !pasivosCortoRef.current || !pasivosLargoRef.current || !totalActivosRef.current) {
      alert("Por favor, llena todos los campos");
      return;
    }

    let valorTasaC = tipoPasivoCorto === "TEA" ? parseFloat(valorTasaCorto)/100 : fromTEMtoTEA(parseFloat(valorTasaCorto));
    let valorTasaL = tipoPasivoLargo === "TEA" ? parseFloat(valorTasaLargo)/100 : fromTEMtoTEA(parseFloat(valorTasaLargo));


    let deudaTotal = parseFloat(pasivosCortoRef.current) + parseFloat(pasivosLargoRef.current);
    let rf = parseFloat(rfRef.current) / 100;
    let rm = parseFloat(rmRef.current) / 100;
    let riesgoPais = parseFloat(riesgoPaisRef.current) / 100;

    let wd = deudaTotal / parseFloat(totalActivosRef.current);
    let we = 1 - wd;
    
    let betaApalancado = parseFloat(betaRef.current) * (1 + (1 - TASA_DE_IMPUESTO) * wd);

    let tasaq = rf + riesgoPais + betaApalancado * (rm - rf);
    
    let tasad = valorTasaC*(parseFloat(pasivosCortoRef.current)/deudaTotal) + valorTasaL*(parseFloat(pasivosLargoRef.current)/deudaTotal);

    let wacc = wd * tasad * (1 - TASA_DE_IMPUESTO) + we * tasaq;

    setWacc(wacc);
    setTasaq(tasaq);
    setTasad(tasad);
    
    console.log("wd ", wd)
    console.log("we ", we)

    console.log("Beta: ", betaApalancado)

    console.log("Costo de patrimonio", tasaq);
    console.log("Costo de deuda", tasad);
    console.log("valor del wacc", wacc)
    console.log("Patrimonio", we);
    console.log("Deuda", wd);


  }

  useEffect(() => {
    preguntarInterpretacionWacc();
  }, [wacc])    

  const preguntarInterpretacionWacc = async () => {
    setLoadingMessage(true);
    const messages = [{role: "user", content: `interpreta este resultado financiero llamado WACC (Costo Promedio Ponderado de Capital) ${wacc} 
        dame una interpretacion en 20 palabras maximo
    `}];
    console.log(message)
    const fullMessage = await streamChatCompletion(messages);
    setMessage(fullMessage);
    setLoadingMessage(false);
    console.log(fullMessage);
  }

  return (
    <section className='space-y-2'>
        <div className='my-10 flex justify-center gap-4 items-center flex-col'>
            <h1 className='font-semibold '>Calculadora WACC!</h1>
            <ModalInfo/>
        </div>
        <div className='flex gap-8'>
        {/* FORMULARIO PARA CALCULAR EL WACC */}
        <form className='w-[40%]'>
            <div className='flex flex-col gap-4 '>
                {/* PASIVOS A CORTO PLAZO */}
                <div className='flex justify-center gap-3 items-center'>
                    <div className=' basis-[70%]'>
                        <Typography variant="h10" color="blue-gray" className="mb-3">
                            Pasivos a Corto Plazo
                        </Typography>
                        <Input 
                            placeholder='Pasivos C/P' 
                            size="lg"
                            type='number'
                            onChange={(e) => {pasivosCortoRef.current = e.target.value}}
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 placeholder:text-blue-gray-300  placeholder:opacity-100"
                            labelProps={{
                            className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <div className='flex-1'>
                        <Typography variant="h10" color="blue-gray" className="mb-3">
                            Tasa
                        </Typography>
                        <div className="flex">
                            <Input
                                type="number"
                                placeholder="%"
                                className="appearance-none rounded-r-none !border-t-blue-gray-200 placeholder:text-blue-gray-300  placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                containerProps={{
                                    className: "min-w-0",
                                }}
                                value={valorTasaCorto}
                                onChange={(e) => setValorTasaCorto(e.target.value)}
                            />
                            <Menu placement="bottom-start">
                                <MenuHandler>
                                    <Button
                                    ripple={false}
                                    variant="text"
                                    color="blue-gray"
                                    className="h-10 w-14 shrink-0 rounded-l-none border border-l-0 border-blue-gray-200 bg-transparent px-3"
                                    >
                                    {tipoPasivoCorto}
                                    </Button>
                                </MenuHandler>
                                <MenuList className="max-h-[20rem] max-w-[18rem]">
                                    {currencies.map((currency, index) => {
                                    return (
                                        <MenuItem
                                        key={currency}
                                        value={currency}
                                        onClick={() => handleCurrencyChange("corto", currency)}
                                        >
                                        {currency}
                                        </MenuItem>
                                    );
                                    })}
                                </MenuList>
                            </Menu>
                        </div>
                    </div>
                </div>

                {/* PASIVOS A LARGO PLAZO */}
                <div className='flex justify-center gap-3 items-center'>
                    <div className=' basis-[70%]'>
                        <Typography variant="h10" color="blue-gray" className="mb-3">
                            Pasivos a Largo Plazo
                        </Typography>
                        <Input 
                            placeholder='Pasivos L/P' 
                            size="lg"
                            type='number'
                            onChange={(e) => {pasivosLargoRef.current = e.target.value}}
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 placeholder:text-blue-gray-300  placeholder:opacity-100"
                            labelProps={{
                            className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <div className='flex-1'>
                        <Typography variant="h10" color="blue-gray" className="mb-3">
                            Tasa
                        </Typography>
                        <div className="flex">
                            <Input
                                type="number"
                                placeholder="%"
                                className="appearance-none rounded-r-none !border-t-blue-gray-200 placeholder:text-blue-gray-300  placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                containerProps={{
                                    className: "min-w-0",
                                }}
                                value={valorTasaLargo}
                                onChange={(e) => setValorTasaLargo(e.target.value)}
                            />
                            <Menu placement="bottom-start">
                                <MenuHandler>
                                    <Button
                                    ripple={false}
                                    variant="text"
                                    color="blue-gray"
                                    className="h-10 w-14 shrink-0 rounded-l-none border border-l-0 border-blue-gray-200 bg-transparent px-3"
                                    >
                                    {tipoPasivoLargo}
                                    </Button>
                                </MenuHandler>
                                <MenuList className="max-h-[20rem] max-w-[18rem]">
                                    {currencies.map((currency, index) => {
                                    return (
                                        <MenuItem
                                        key={currency}
                                        value={currency}
                                        onClick={() => handleCurrencyChange("largo", currency)}
                                        >
                                        {currency}
                                        </MenuItem>
                                    );
                                    })}
                                </MenuList>
                            </Menu>
                        </div>
                    </div>
                </div>

                {/* TOTAL DE ACTIVOS */}
                <div >
                    <Typography variant="h10" color="blue-gray" className="mb-3">
                        Total de Activos
                    </Typography>
                    <Input 
                        placeholder='Activos' 
                        size="lg"
                        type='number'
                        onChange={(e) => {totalActivosRef.current = e.target.value}}
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 placeholder:opacity-100"
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />
                </div>

                {/* TASA LIBRE DE RIESGO */}
                <div className='flex gap-3'>
                <div className='flex-1'>
                    <Typography variant="h10" color="blue-gray" className="mb-3">
                        Tasa libre de riesgo (Rf) %
                    </Typography>
                    <Input 
                        placeholder='Rf' 
                        size="lg"
                        type='number'
                        onChange={(e) => {rfRef.current = e.target.value}}
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 placeholder:opacity-100"
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />
                </div>
                {/* RF */}
                <div className='flex-1'>
                    <Typography variant="h10" color="blue-gray" className="mb-3">
                        S&P500 (Rm) %
                    </Typography>
                    <Input 
                        placeholder='Rm' 
                        size="lg"
                        type='number'
                        onChange={(e) => {rmRef.current = e.target.value}}                  
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 placeholder:opacity-100"
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />
                </div>
                </div>
                {/* BETA APALANCAMIENTO */}
                <div className='flex gap-3'>
                <div className='flex-1'>
                    <Typography variant="h10" color="blue-gray" className="mb-3">
                        Beta sin apalancamiento
                    </Typography>
                    <Input 
                        placeholder='Rf' 
                        size="lg"
                        onChange={(e) => {betaRef.current = e.target.value}}
                        type='number'                        
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 placeholder:opacity-100"
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />
                </div>
                <div className='flex-1'>
                    <Typography variant="h10" color="blue-gray" className="mb-3">
                        Riesgo del Pais %
                    </Typography>
                    <Input 
                        placeholder='Riesgo Pais' 
                        size="lg"
                        onChange={(e) => {riesgoPaisRef.current = e.target.value}}
                        type='number'                        
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 placeholder:opacity-100"
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />
                </div>
                </div>
            </div>
            <Button className='my-4' onClick={handleCalcularWacc}>Calcular Wacc!</Button>
        </form>
        <div className='w-[60%]'>
            <Typography  className='text-center border-b mb-10' variant="h5" color="blue-gray">Resultados</Typography >
            {
                wacc? (
                    <div className='space-y-4'>
                        <div>
                            <Typography  className='' variant="h6" color="blue-gray">Valores</Typography >
                            <Typography>WACC: {wacc*100}%</Typography>
                            <Typography>Costo de patrimonio: {tasaq}</Typography>
                            <Typography>Costo de deuda: {tasad}</Typography>
                        </div>
                        <div>
                            <Typography  className='' variant="h6" color="blue-gray">Interpretación</Typography >
                            {
                                !loadingMessage? (
                                    <Typography>{message}</Typography>
                                ):(
                                    <div className="max-w-full animate-pulse">
                                        <Typography
                                            as="div"
                                            variant="paragraph"
                                            className="mb-2 h-2 w-72 rounded-full bg-gray-300"
                                        >
                                            &nbsp;
                                        </Typography>
                                        <Typography
                                            as="div"
                                            variant="paragraph"
                                            className="mb-2 h-2 w-72 rounded-full bg-gray-300"
                                        >
                                            &nbsp;
                                        </Typography>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                ):(
                    <div className="max-w-full animate-pulse">
                        <Typography
                            as="div"
                            variant="h1"
                            className="mb-4 h-3 w-56 rounded-full bg-gray-300"
                        >
                            &nbsp;
                        </Typography>
                        <Typography
                            as="div"
                            variant="paragraph"
                            className="mb-2 h-2 rounded-full bg-gray-300"
                        >
                            &nbsp;
                        </Typography>
                        <Typography
                            as="div"
                            variant="paragraph"
                            className="mb-2 h-2 rounded-full bg-gray-300"
                        >
                            &nbsp;
                        </Typography>
                        <Typography
                            as="div"
                            variant="paragraph"
                            className="mb-2 h-2 rounded-full bg-gray-300"
                        >
                            &nbsp;
                        </Typography>
                        <Typography
                            as="div"
                            variant="paragraph"
                            className="mb-2 h-2 rounded-full bg-gray-300"
                        >
                            &nbsp;
                        </Typography>
                    </div>
                )
            }
        </div>
        </div>
    </section>
  )
}

export default Wacc


