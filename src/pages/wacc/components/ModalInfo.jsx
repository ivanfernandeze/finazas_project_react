import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
 
export function ModalInfo() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button onClick={handleOpen} className="">Que es el WACC?</Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>WACC</DialogHeader>
        <DialogBody className="overflow-scroll">
          <Typography className="font-normal">
            El WACC es la tasa de rendimiento que una empresa necesita alcanzar para cubrir los costes de financiación de sus inversiones.
            <br />
            <br />
            Esto incluye el dinero que la compañía ha tomado prestado y el que han aportado los accionistas.
            <br /> <br />
            En resumen, se trata del rendimiento mínimo que los inversores esperan obtener para compensar el riesgo de invertir en la empresa.
            <br /> <br />
            Un indicador básico para la toma de decisiones de inversión y financiación, ya que proporciona una tasa de descuento apropiada para calcular el valor presente neto de un proyecto o empresa.
            <br /> <br />
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            cancel
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}