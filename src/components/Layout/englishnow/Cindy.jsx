import React from 'react'
import cindy from '../../../assets/englisnow/cindy.webp'
import wavegris from '../../../assets/wavegris.svg'

const Cindy = () => {
  return (
    <div>
      <img src={wavegris} />
      <div className="bg-gray-200 justify-center flex flex-col text-center sm:px-36 gap-3">
        <h1 className="sm:text-6xl text-3xl font-poppins font-bold text-gray-900">
          Cindy Bolaqui.
        </h1>
        <p className="text-2xl font-bold font-poppins text-[#D1000A]">
          Instructora de English Now!
        </p>
        <div className="flex justify-center px-5">
          <img
            src={cindy}
            className="rounded-full border border-white shadow-md  shadow-white"
          />
        </div>
        <p className="font-poppins sm:text-xl text-lg pb-5 px-5">
          ¡Hola! Soy Cindy Bolaqui. Instructura de English Now Tengo más de 10
          años de experiencia en docencia y certificada como profesora de Inglés
          como segunda lengua. He creado un método muy completo para que mis
          estudiantes aprendan a dominar el idioma Inglés desde el día uno,
          incorporando técnicas ya probadas y que dan excelentes resultados.
          Parte de mis objetivos que es que entiendan que aprender Inglés es
          fácil y posible.
        </p>
      </div>
    </div>
  );
}

export default Cindy