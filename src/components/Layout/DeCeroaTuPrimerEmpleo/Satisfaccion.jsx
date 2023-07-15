import React from 'react'
import wavegris from '../../../assets/wavegris.svg'
import mockups2 from '../../../assets/decerotuprimerempleo/iphone.png'
import siete from '../../../assets/englisnow/7.png'
import cien from '../../../assets/englisnow/100.png'

const Satisfaccion = () => {
  const hotlink = () => {
    window.open("https://go.hotmart.com/L84292575H?ap=8e8d", "")
  }
  return (
    <div>
      <img src={wavegris} alt="" />
      <div className="bg-gray-200 flex  sm:flex-row  flex-col  sm:px-40">

        <div className="flex sm:w-2/4 sm:pl-10">
        
<div>

          <img src={mockups2} alt="" className='rounded  w-full  ' />
</div>

          <div className="flex flex-col justify-around ">
            <img src={siete} className=" w-40 z-40 sm:relative -left-10 -top-4 sm:-top-0" />
            <img src={cien} className=" w-40 z-40 -left-10 -top-10 sm:relative" />
          </div>
         
        </div>
        <div className="sm:w-2/4">
          <p className="  pb-10 px-5 text-lg font-poppins font-bold text-justify">
            Estamos tan seguros de que esta capacitación te dará los resultados
            que quieres que si por alguna razón después de ver el curso en su
            totalidad y de ponerlo a prueba no quedas 100% satisfecho, tienes 7
            días para escribirnos y solicitar la devolución total de tu dinero.
            Sin preguntas. Esto te lo garantiza HOTMART.
          </p>
          <div className="flex justify-center mb-10">
            <button className="bg-yellow-400 font-poppins font-bold py-3 px-3 shadow-lg hover:shadow-xl hover:bg-yellow-500 rounded-full sm:text-3xl text-lg" onClick={hotlink}>
              INSCRIBIRME AL PROGRAMA
            </button>
          </div>
        </div>
      </div>
      <img src={wavegris} className="rotate-180 relative -top-2" />
    </div>
  );
}

export default Satisfaccion