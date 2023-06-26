import React from 'react'
import Presentation from '../components/Layout/englishnow/Presentation'
import ScrollToTopMount from '../components/ScrollToTopMount'

const EnglishNow = () => {
    document.title = "Learning Plus -  English Now!"
  return (
    <div className='overflow-x-hidden'>
      <ScrollToTopMount />
        <Presentation />
    </div>
  )
}

export default EnglishNow