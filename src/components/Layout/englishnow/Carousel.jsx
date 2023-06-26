import React, {useState, useEffect} from 'react'
import testimonio1 from '../../../assets/englisnow/testimonio1.webp'
import testimonio2 from '../../../assets/englisnow/natalia.webp'
import testimonio3 from '../../../assets/englisnow/katia.webp'
import "./style.css"
import {AiFillStar} from 'react-icons/ai'




const Carousel = () => {
  
  
  
  return (
    <div>
      <div>
        <h1 className="text-center sm:text-5xl text-3xl text-[#D1000A] font-poppins font-bold py-5">
          ¿Qué dicen nuestros estudiantes?
        </h1>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 px-5 gap-5">
        {/* testimonio 1 */}
        <div className="bg-gray-200  flex flex-col items-center px-10 py-10 gap-5 rounded-lg shadow-md shadow-gray-900">
          <img
            src={testimonio1}
            className="rounded-full w-40 border border-white"
          />
          <p className="text-[#D1000A] font-poppins font-bold text-center text-2xl ">
            Nicolás Lerma
          </p>
          <p className="font-poppins text-center">
            Vivo en una zona alejada de <br></br>Argentina y trabajo en redes
            <br></br>
            Informáticas desde mi casa.<br></br> Estaba preocupado porque{" "}
            <br></br> aunque tengo bases en Inglés<br></br> no me sentía seguro.{" "}
            <br></br> Entré a este programa y ahora<br></br>
            puedo hacer llamadas a los <br></br> clientes con mucha confianza.
            <br></br> <strong>Excelente programa, lo recomiendo.</strong>
          </p>
          <div className="flex text-yellow-500">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </div>
        </div>
        {/* testimonio 2*/}
        <div className="bg-gray-200  flex flex-col items-center px-10 py-10 gap-5 rounded-lg shadow-md shadow-gray-900">
          <img
            src={testimonio2}
            className="rounded-full w-40 border border-white"
          />
          <p className="text-[#D1000A] font-poppins font-bold text-center text-2xl ">
            Natalia Barrera
          </p>
          <p className="font-poppins text-center">
            He estudiado en varios cursos de Inglés y he aprendido algunas
            cosas, sin embargo cuando trataba de hablar no podía decir lo que
            pensaba exactamente o al ver una película casi nunca entendía. En
            este programa tengo algunas semanas y he podido corregir muchos
            errores que cometía al hablar. Ahora ya entiendo algunas canciones
            que me gustan. Me siento muy motivada.
          </p>
          <div className="flex text-yellow-500">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </div>
        </div>
        {/* testimonio 3*/}
        <div className="bg-gray-200  flex flex-col items-center px-10 py-10 gap-5 rounded-lg shadow-md shadow-gray-900">
          <img
            src={testimonio3}
            className="rounded-full w-40 border border-white"
          />
          <p className="text-[#D1000A] font-poppins font-bold text-center text-2xl ">
          Kattia Chen
          </p>
          <p className="font-poppins text-center">
            Soy madre y trabajo a tiempo completo. Estoy en la búsqueda de
            mejores oportunidades laborales pero no cuento con mucho tiempo.
            Tengo 2 niños y más la jornada laboral se me hacía imposible. Entré
            a English Now y me encontré con la flexiblidad que necesito para ir
            a mi propio ritmo, y estoy dando pasos para hablar este bello
            Idioma. Súper recomendado
          </p>
          <div className="flex text-yellow-500">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel