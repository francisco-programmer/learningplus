import React from 'react'
import Contador from '../components/Contador'
import Presentation from '../components/Layout/DecoracionDeFiestas/Presentation'
import Beneficios from '../components/Layout/DecoracionDeFiestas/Beneficios'
import Instructoras from '../components/Layout/DecoracionDeFiestas/Instructoras'
import Certificado from '../components/Layout/DecoracionDeFiestas/Certificado'
import Matricula from '../components/Layout/DecoracionDeFiestas/Matricula'
import Satisfaccion from '../components/Layout/DecoracionDeFiestas/Satisfaccion'
import Preguntas from '../components/Layout/DecoracionDeFiestas/Preguntas'
import ScrollToTopMount from '../components/ScrollToTopMount'

const DecoracionDeFiestas = () => {
  return (
    <div className='overflow-x-hidden'>
      <ScrollToTopMount />
        <Contador item='time'/>
        <Presentation />
        <Beneficios />
        <Instructoras />
        <Certificado />
        <Matricula />
        <Satisfaccion />
        <Preguntas />
        

    </div>
  )
}

export default DecoracionDeFiestas