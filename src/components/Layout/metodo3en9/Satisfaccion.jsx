import React from 'react'
import wavegris from '../../../assets/wavegris.svg'
import player from '../../../assets/englisnow/player.webp'
import siete from '../../../assets/englisnow/7.png'
import cien from '../../../assets/englisnow/100.png'
import Preguntas from './Preguntas'
import hotlink from './Hotlink'

const Satisfaccion = () => {
  
  return (
    <div>
      <div className="bg-redventa">
        <p className="text-gray-200 lg:text-5xl text-3xl font-poppins lg:px-36 px-2 font-bold py-8 leading-tight">
          Tu fluidez se encuenta respaldada por la garantia de satisfacción del{" "}
          <strong>"Metodo 3 en 9"</strong>
        </p>
      </div>

      <div className="bg-gray-900 flex  sm:flex-row  flex-col  sm:px-40">
        <div className="flex sm:w-2/4 sm:pl-10">
          <div className="flex items-center justify-center  ">
            <img
              src="https://rebelionbilingue.com/wp-content/uploads/2022/11/1-2-1.png"
              className=" "
            />
          </div>
        </div>
        <div className="sm:w-2/4">
          <p className="sm:pt-20 pb-10 px-5 text-lg font-poppins text-justify text-gray-200">
            Confiamos tanto en nuestra metodología que al adquirir el programa
            'Método Inmersivo 3 en 9' te ofrecemos una{" "}
            <strong>Garantía de Satisfacción de 9 Meses,</strong> es decir, si
            después de aplicar nuestra metodología paso a paso durante 9 Meses
            no logras obtener los resultados esperados, puedes solicitar la{" "}
            <strong>devolución del 100% de tu dinero.</strong> (Aplica
            condiciones)
          </p>
          <div className="flex justify-center mb-10">
            <button
              className="bg-yellow-400 font-poppins  text-gray-900 font-bold py-3 lg:px-10 px-5 shadow-lg hover:shadow-xl hover:bg-redventa hover:text-gray-200 rounded-full sm:text-2xl text-lg"
              onClick={hotlink}
            >
              ¡Quiero inscribirme sin riesgo!
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-gray-900">
        <div className='px-72'>
          <hr className="border-1 border-gray-200 "></hr>
        </div>

       <Preguntas />
      </div>
    </div>
  );
}

export default Satisfaccion