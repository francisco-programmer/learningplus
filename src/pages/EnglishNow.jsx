import React from 'react'
import Presentation from '../components/Layout/englishnow/Presentation'
import ScrollToTopMount from '../components/ScrollToTopMount'
import Contador from '../components/Contador'

const EnglishNow = () => {
    document.title = "Learning Plus -  English Now!"
  return (
    <div className='overflow-x-hidden'>
      <ScrollToTopMount />
      <Contador item='item' />
        <Presentation />
    </div>
  )
}

export default EnglishNow