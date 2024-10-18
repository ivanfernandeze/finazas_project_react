import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { streamChatCompletion } from "/src/services/api-ph1-microsoft.js"; // Importa la función de la API

export default function DialogDefault({ open, handleOpen, interpretationText, setInterpretationText, messages }) {
  const [loading, setLoading] = useState(false);

  const fetchInterpretation = async () => {
    setLoading(true);
    try {
      const respuesta = await streamChatCompletion(messages); // Envía los mensajes a la API
      setInterpretationText(respuesta); // Actualiza el texto de la interpretación
    } catch (error) {
      console.error("Error fetching interpretation:", error);
      setInterpretationText("Error al obtener la interpretación.");
    } finally {
      setLoading(false); // Detenemos la carga
    }
  };

  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Interpretación del Ratio</DialogHeader>
        <DialogBody>
          {loading ? "Cargando interpretación..." : interpretationText}
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
            <span>Cerrar</span>
          </Button>
          <Button variant="gradient" color="green" onClick={fetchInterpretation}>
            <span>{loading ? "Cargando..." : "Interpreta"}</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
