import React from 'react'
import wavegris from '../../../assets/wavegris.svg'
import player from '../../../assets/englisnow/player.webp'
import siete from '../../../assets/englisnow/7.png'
import cien from '../../../assets/englisnow/100.png'

const Satisfaccion = () => {
  const hotlink = () => {
    window.open("https://go.hotmart.com/F82923352C?ap=acab", "")
  }
  return (
    <div>
      <img src={wavegris} alt="" />
      <div className="bg-gray-200 flex  sm:flex-row  flex-col  sm:px-40">

        <div className="flex sm:w-2/4 sm:pl-10">
        
<div>

          <img src={player} alt="" />
</div>

          <div className="flex flex-col justify-around">
            <img src={siete} className="w-28 relative -left-10" />
            <img src={cien} className="w-32 -left-10 relative" />
          </div>
         
        </div>
        <div className="sm:w-2/4">
          <p className="sm:pt-20 pb-10 px-5 text-lg font-poppins font-bold text-justify">
            Estamos tan seguros de que esta capacitación te dará los resultados
            que quieres que si por alguna razón después de ver el curso en su
            totalidad y de ponerlo a prueba no quedas 100% satisfecho, tienes 7
            días para escribirnos y solicitar la devolución total de tu dinero.
            Sin preguntas. Esto te lo garantiza HOTMART.
          </p>
          <div className="flex justify-center mb-10">
            <button className="bg-yellow-400 font-poppins font-bold py-3 px-16 shadow-lg hover:shadow-xl hover:bg-sky-500 rounded-full sm:text-3xl text-lg" onClick={hotlink}>
              MATRICULAR PROGRAMA
            </button>
          </div>
        </div>
      </div>
      <img src={wavegris} className="rotate-180 relative -top-2" />
    </div>
  );
}

export default Satisfaccion