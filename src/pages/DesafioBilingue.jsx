import React from 'react'
import Captacion from '../components/Layout/desafiobilingue/Captacion'
import Informacion from '../components/Layout/desafiobilingue/Informacion'
import QuienesSomos from '../components/Layout/desafiobilingue/QuienesSomos'

const DesafioBilingue = () => {
  document.title = "Desafio Bilingue"
  const fechainicio =  '21 DE AGOSTO'
  const fechafin =  '25 DE AGOSTO'
  const WhatsApp = ''
  return (
    <div>
        <Captacion fechainicio={fechainicio}  fechafin={fechafin}/>
        <Informacion fechainicio={fechainicio}  fechafin={fechafin} />
        <QuienesSomos />

    </div>
  )
}

export default DesafioBilingue