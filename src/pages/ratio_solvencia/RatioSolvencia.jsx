import React from 'react'
import ImageSolvencia from '../../assets/solvencia-image.jpg'
import { DrawerSolvencia } from './components/DrawerSolvencia'
import { CardSolvencia } from './components/CardSolvencia'

const drawerSolvenciaData = {
    nombreRatio: 'Ratios de Solvencia',
    descripciones: [
      "Los ratios de solvencia miden la capacidad de una empresa para cumplir con sus obligaciones a largo plazo. Estos ratios permiten a los inversores y analistas evaluar si la empresa tiene suficientes activos para cubrir sus deudas a largo plazo y continuar operando en el futuro.",
      "Los ratios de solvencia son fundamentales para entender la estabilidad financiera a largo plazo de una empresa. Un ratio de solvencia adecuado indica que la empresa está bien posicionada para gestionar su deuda a largo plazo y mantenerse solvente incluso en tiempos de crisis financiera."
    ]
  }
  

  const coberturaGastoInteres = {
    title: "Cobertura de Gasto de Interés",
    definicion: "El ratio de Cobertura de Gasto de Interés es un indicador financiero que mide la capacidad de una empresa para cumplir con sus obligaciones relacionadas con el pago de intereses sobre su deuda. Un ratio de cobertura alto indica que la empresa genera suficientes ingresos operativos para cubrir sus gastos financieros, lo que refleja una mayor solvencia. Un ratio bajo sugiere que la empresa puede tener dificultades para cubrir sus pagos de intereses, lo que podría poner en riesgo su estabilidad financiera.",
    formula: {
      formula: "Cobertura de Gasto de Interés = Utilidad Operativa / Gastos Financieros",
      numerador: "Utilidad Operativa",
      denominador: "Gastos Financieros",
      resultado: "La cobertura de los gastos de interés de la empresa es",
      interpretacionName: "Interpreta el resultado del ratio de cobertura de gasto de interés, que refleja cuántas veces la empresa puede cubrir sus gastos financieros con su utilidad operativa, con un valor de"
    },
  }

  const coberturaInteresesFlujoCaja = {
    title: "Cobertura de Intereses con el Flujo de Caja",
    definicion: "El ratio de Cobertura de Intereses con el Flujo de Caja, calculado utilizando el EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization), mide la capacidad de una empresa para cubrir sus gastos financieros utilizando su flujo de caja operativo. Un ratio alto indica que la empresa genera suficiente efectivo antes de pagos de intereses y otros gastos no operativos para cubrir sus obligaciones financieras, mientras que un ratio bajo puede sugerir problemas para hacer frente a estos pagos.",
    formula: {
      formula: "Cobertura de Intereses con el Flujo de Caja = EBITDA / Gasto Financiero",
      numerador: "EBITDA",
      denominador: "Gasto Financiero",
      resultado: "La cobertura de intereses de la empresa, según su flujo de caja, es",
      interpretacionName: "Interpreta el resultado del ratio de cobertura de intereses con el flujo de caja, que refleja cuántas veces la empresa puede cubrir sus gastos financieros a partir de su EBITDA, con un valor de"
    },
  }
  
  const coberturaActivoNoCorriente = {
    title: "Cobertura del Activo No Corriente",
    definicion: "El ratio de Cobertura del Activo No Corriente es un indicador financiero que mide la proporción del patrimonio de una empresa en relación con sus activos no corrientes. Este ratio refleja qué parte de los activos a largo plazo está financiada por los recursos propios de la empresa, lo cual es importante para evaluar la estabilidad financiera a largo plazo. Un ratio alto indica que una mayor parte de los activos no corrientes está respaldada por el patrimonio, lo que sugiere una menor dependencia de la deuda. Un ratio bajo puede señalar una mayor dependencia de financiación externa.",
    formula: {
      formula: "Cobertura del Activo No Corriente = Patrimonio / Activo No Corriente",
      numerador: "Patrimonio",
      denominador: "Activo No Corriente",
      resultado: "La cobertura del activo no corriente de la empresa es",
      interpretacionName: "Interpreta el resultado del ratio de cobertura del activo no corriente, que refleja la proporción de los activos no corrientes financiada por el patrimonio, con un valor de"
    },
  }  

function RatioSolvencia() {
  return (
    
    <section >
      <div style={{backgroundImage: `url(${ImageSolvencia})`}} className='h-[30svh] bg-cover bg-no-repeat'></div>
      <section className='p-4 space-y-10'>
        <DrawerSolvencia {...drawerSolvenciaData}/>
        <CardSolvencia {...coberturaGastoInteres}/>
        <CardSolvencia {...coberturaInteresesFlujoCaja}/>
        <CardSolvencia {...coberturaActivoNoCorriente}/>
      </section>
    </section>
  )
}

export default RatioSolvencia
