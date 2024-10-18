import React from 'react'
import ImageRentabilidad from '../../assets/rentabilidad-image.jpg'
import { DrawerRentabilidad } from './components/DrawerRentabilidad'
import { CardRentabilidad } from './components/CardRentabilidad'
const DrawerVentas = {
  nombreRatio: 'Rentabilidad Sobre Ventas',
  descripciones: [
    "Los ratios de rentabilidad permiten a los inversores, analistas financieros y gerentes evaluar el rendimiento y la salud financiera de una empresa en un período determinado. Esto ayuda a comprender cómo una empresa está utilizando sus recursos y generando ganancias.",
    "Los ratios de rentabilidad se utilizan para comparar el desempeño de una empresa con el de sus competidores en la misma industria. Esto puede revelar fortalezas y debilidades relativas y ayudar a identificar oportunidades de mejora."
  ]
}

const rentabilidadVentas = {
  title: "Rentabilidad Sobre Ventas",
  definicion: "La rentabilidad sobre ventas es un indicador que mide la eficiencia de la empresa en la generación de utilidades a partir de sus ventas.",
  formula: {
    formula: "Rentabilidad Sobre Ventas = (Utilidad Neta / Ventas Netas) x 100",
    numerador: "Utilidad Neta",
    denominador: "Ventas Netas",
    resultado: "El margen de utilidad",
    interpretacionName: "Interpreta el resultado de la rentabilidad que se calculo con la utilidad neta sobre las ventas dando como resultado un ratio de"
  },

}

const rentabilidadActivo = {
  title: "Rentabilidad Sobre Activos (ROA)",
  definicion: "La Rentabilidad Sobre Activos o ROA por sus siglas en inglés, es un indicador de cómo las empresas manejan los activos existentes mientras generan ganancias. Si la Rentabilidad Sobre Activos es baja, la gerencia quizás sea deficiente mientras que si es alta demuestra que la empresa está funcionando eficientemente.",
  formula: {
    formula: "Rentabilidad Sobre Activos = (Utilidad Neta / Total de Activos) x 100",
    numerador: "Utilidad Neta",
    denominador: "Total de Activos",
    resultado: "El margen de utilidad",
    interpretacionName: "Interpreta el resultado de la rentabilidad que se calculo con la utilidad neta sobre los activos dando como resultado un ratio de"
  },
}

const rentabilidadPatrimonio = {
  title: "Rentabilidad Sobre Patrimonio (ROE)",
  definicion: "La Rentabilidad Sobre Patrimonio o ROE por sus siglas en inglés, es un indicador de cómo las empresas manejan los activos existentes mientras generan ganancias. Si la Rentabilidad Sobre Patrimonio es baja, la gerencia quizás sea deficiente mientras que si es alta demuestra que la empresa está funcionando eficientemente.",
  formula: {
    formula: "Rentabilidad Sobre Patrimonio = (Utilidad Neta / Patrimonio) x 100",
    numerador: "Utilidad Neta",
    denominador: "Patrimonio",
    resultado: "El margen de utilidad",
    interpretacionName: "Interpreta el resultado de la rentabilidad que se calculo con la utilidad neta sobre el patrimonio dando como resultado un ratio de"
  },
}
function RatioRentabilidad() {
  return (
    
    <section >
      <div style={{backgroundImage: `url(${ImageRentabilidad})`}} className='h-[30svh] bg-cover bg-no-repeat'></div>
      <section className='p-4 space-y-10'>
        <DrawerRentabilidad {...DrawerVentas}/>
        <CardRentabilidad {...rentabilidadVentas}/>
        <CardRentabilidad {...rentabilidadActivo}/>
        <CardRentabilidad {...rentabilidadPatrimonio}/>
      </section>
    </section>
  )
}

export default RatioRentabilidad
