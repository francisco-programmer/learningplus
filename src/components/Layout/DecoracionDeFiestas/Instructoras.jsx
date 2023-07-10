import React from 'react'
import cindy from '../../../assets/englisnow/cindy.webp'
import wavegris from '../../../assets/wavegris.svg'
import wave from '../../../assets/wave.png'


const Instructoras = () => {
  return (
    <div>
      <img src={wave} className="h-20 w-full " />
      <div className=" justify-center flex flex-col text-center sm:px-36 gap-3">
        <h1 className="sm:text-6xl text-3xl font-poppins font-bold text-gray-900">
          Greysi González & Kelly Eusse
        </h1>
        <p className="text-2xl font-bold font-poppins text-[#D1000A]">
          Instructoras & Productoras
        </p>

        <p className="font-poppins text-gray-900 sm:text-xl text-lg pb-5 px-5">
          <strong>Greysi González,</strong> profesional en decoración y técnicas de alto nivel en
          globos, con más de 8 años de experiencia en el negocio, actualmente
          dirige su propia empresa Dulce Fiesta, es profesora reconocida
          internacionalmente.
        </p><p className="font-poppins  text-gray-900  sm:text-xl text-lg pb-5 px-5">
        <strong>Kelly Eusse,</strong> especialista en decoración de fiestas, experta en el arte de la porcelana fría, con experiencia de más de 10 años en el negocio de la decoración, creadora de la empresa Mia Eventos, acreditada por su profesionalismo y excelencia en esta industria.
        </p>
      </div>
    </div>
  );
}

export default Instructoras;