import React from 'react'
import ScrollToTopMount from '../components/ScrollToTopMount'
import Contador from '../components/Contador'
import Presentation from '../components/Layout/DeCeroaTuPrimerEmpleo/Presentation'
import ContenidoDelCurso from '../components/Layout/DeCeroaTuPrimerEmpleo/ContenidoDelCurso'
import Instructoras from '../components/Layout/DeCeroaTuPrimerEmpleo/Instructoras'
import Certificado from '../components/Layout/DeCeroaTuPrimerEmpleo/Certificado'
import Matricula from '../components/Layout/DeCeroaTuPrimerEmpleo/Matricula'
import Satisfaccion from '../components/Layout/DeCeroaTuPrimerEmpleo/Satisfaccion'
import Preguntas from '../components/Layout/DeCeroaTuPrimerEmpleo/Preguntas'

const DeCeroTuPrimerEmpleo = () => {

  document.title = "Learning Plus - De cero a tu primer trabajo en ingles!"
  
  
  return (
    <div className='overflow-x-hidden'>
        <ScrollToTopMount />
        <Contador item='empleo' />
        <Presentation />
        <ContenidoDelCurso />
        <Instructoras />
        <Certificado />
        <Matricula />
        <Satisfaccion />
        <Preguntas />
    </div>
  )
}

export default DeCeroTuPrimerEmpleo