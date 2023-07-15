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
          JOSEPH ANDRADE
        </h1>
        <p className="text-2xl font-bold font-poppins text-[#D1000A]">
          Instructor del programa
        </p>
        <p className="font-poppins text-gray-900 sm:text-xl text-lg  px-5">
          <strong>Joseth Andrade,</strong> profesor de inglés altamente
          competente y dinámico con 5 años de experiencia en la enseñanza de
          inglés como lengua extranjera.
        </p>
       
        <p className="font-poppins  text-gray-900  sm:text-xl text-lg pb-5 px-5">
        Con una <strong>pasión innata</strong> por la educación y una sólida base de
        conocimientos lingüísticos, este profesor ha logrado brindar una
        instrucción de calidad a estudiantes de diversos orígenes culturales y
        niveles de competencia en el idioma. Sus habilidades excepcionales para
        comunicarse y adaptarse a diferentes entornos han sido forjadas a través
        de su residencia en <strong>tres países angloparlantes,</strong> lo que le ha
        proporcionado una comprensión profunda de las sutilezas y las
        variaciones del idioma inglés. Actualmente.{" "}
        Gracias al dominio del idioma se encuentra laborando actualmente con una empresa canadiense.
        </p>
      </div>
    </div>
  );
}

export default Instructoras;