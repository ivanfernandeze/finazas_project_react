import React from 'react'
import ImageLiquidez from '../../assets/liquidez-image.jpg'
import { DrawerLiquidez } from './components/DrawerLiquidez'
import { CardLiquidez } from './components/CardLiquidez'

const drawerLiquidezData = {
  nombreRatio: 'Ratios de Liquidez',
  descripciones: [
    "Los ratios de liquidez miden la capacidad de una empresa para cumplir con sus obligaciones a corto plazo. Esto permite a los inversores, analistas y gerentes evaluar si la empresa tiene suficientes recursos líquidos para pagar sus deudas en el corto plazo.",
    "Los ratios de liquidez son importantes para determinar la estabilidad financiera de una empresa, y se utilizan para comparar su capacidad de cumplir con las deudas con otras empresas de la industria. Un ratio de liquidez adecuado puede indicar que la empresa es solvente y está bien gestionada."
  ]
}

const liquidezGeneral = {
  title: "Liquidez General",
  definicion: "La Liquidez General, también conocida como ratio corriente, es un indicador financiero que mide la capacidad de una empresa para cubrir sus obligaciones a corto plazo con sus activos corrientes. Un ratio de liquidez general alto indica que la empresa tiene suficientes recursos para pagar sus deudas a corto plazo, mientras que un ratio bajo puede sugerir problemas de solvencia.",
  formula: {
    formula: "Liquidez General = Activo Corriente / Pasivo Corriente",
    numerador: "Activo Corriente",
    denominador: "Pasivo Corriente",
    resultado: "La liquidez de la empresa es",
    interpretacionName: "Interpreta el resultado del ratio de liquidez general, que refleja la capacidad de la empresa para cumplir con sus obligaciones a corto plazo con un valor de"
  },
}

const pruebaAcida = {
  title: "Ratio de Prueba Ácida",
  definicion: "El Ratio de Prueba Ácida, también conocido como Ratio de Liquidez Inmediata, mide la capacidad de una empresa para cubrir sus obligaciones a corto plazo sin depender de la venta de inventarios. Este indicador es fundamental para evaluar la liquidez de una empresa, ya que proporciona una visión más precisa de su situación financiera.",
  formula: {
    formula: "Ratio de Prueba Ácida = (Activo Corriente - Inventario) / Pasivo Corriente",
    numerador: "Activo Corriente - Inventario",
    denominador: "Pasivo Corriente",
    resultado: "La capacidad de la empresa para cubrir sus deudas a corto plazo es",
    interpretacionName: "Interpreta el resultado del ratio de prueba ácida, que indica la proporción de activos líquidos disponibles para cubrir las obligaciones a corto plazo con un valor de"
  },
}

const liquidezCaja = {
  title: "Ratio de Liquidez-Caja (Tesorería)",
  definicion: "El Ratio de Liquidez-Caja, también conocido como Ratio de Tesorería, mide la capacidad de una empresa para cubrir sus obligaciones a corto plazo utilizando solo sus activos más líquidos, es decir, el efectivo y equivalentes de efectivo. Este ratio proporciona una visión clara de la solvencia inmediata de la empresa.",
  formula: {
    formula: "Liquidez-Caja = Efectivo y Equivalentes de Efectivo / Pasivo Corriente",
    numerador: "Efectivo y Equivalentes de Efectivo",
    denominador: "Pasivo Corriente",
    resultado: "La capacidad inmediata de la empresa para cumplir con sus obligaciones es",
    interpretacionName: "Interpreta el resultado del ratio de liquidez-caja, que indica la proporción de activos líquidos disponibles para cubrir las deudas a corto plazo con un valor de"
  },
}

function RatioLiquidez() {
  return (
    
    <section >
      <div style={{backgroundImage: `url(${ImageLiquidez})`}} className='h-[30svh] bg-cover bg-no-repeat'></div>
      <DrawerLiquidez {...drawerLiquidezData}/>
      <section className='p-4 space-y-10'>
        <CardLiquidez {...liquidezGeneral}/>
        <CardLiquidez {...pruebaAcida}/>
        <CardLiquidez {...liquidezCaja}/>
      </section>
    </section>
  )
}

export default RatioLiquidez
