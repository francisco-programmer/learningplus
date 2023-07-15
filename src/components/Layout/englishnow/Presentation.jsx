import React from 'react'
import pre from '../../../assets/englisnow/cover.png'
import familia from '../../../assets/englisnow/familia.webp'
import { BsFillPersonCheckFill } from 'react-icons/bs'
import wave from '../../../assets/wave.png'
import Carousel from './Carousel'
import mockups from '../../../assets/englisnow/mockups.webp'
import {GiCheckMark} from 'react-icons/gi'
import Cindy from './Cindy'
import Beneficios from './Beneficios'
import Certificado from './Certificado'
import Ofrecemos from './Ofrecemos'
import Matricula from './Matricula'
import ProgressBar from './ProgressBar'
import Satisfaccion from './Satisfaccion'
import Preguntas from './Preguntas'

const Presentation = () => {

  const hotlink = () => {
    window.open("https://go.hotmart.com/F82923352C?ap=acab", "")
  }

  return (
    <div className='mt-20'>
      <h1 className="sm:text-5xl text-xl  text-center text-gray-900 font-extrabold p-3 font-sans leading-snug ">
        {" "}
        APRENDE INGLÉS RÁPIDAMENTE CON UN MÉTODO ALTAMENTE EFECTIVO Y A TU
        PROPIO RITMO
      </h1>
      <p className="text-center sm:text-4xl text-xl font-poppins text-gray-900">
        Ya no pierdas más oportunidades por no saber Inglés
      </p>

      {/* ocultada en mobile */}
      <div className=" w-screen px-20 py-5  hidden sm:block">
        <div className="flex rounded">
          <div className="bg-[#D1000A] w-2/4 flex flex-col justify-around rounded-l-lg ">
            <h1 className="text-5xl font-bold font-poppins p-10 leading-snug text-gray-200">
              El programa online que te transforma a una persona bilingüe.
            </h1>
            <div className="px-10">
              <button
                className="hover:bg-gray-900 text-gray-200 font-bold p-4  bg-black font-poppins rounded-lg"
                onClick={hotlink}
              >
                ¡HAZ CLICK AQUI PARA COMENZAR!
              </button>
            </div>
          </div>
          <div className="w-2/4 ">
            <img src={pre} className="rounded-r-lg" />
          </div>
        </div>
      </div>

      {/* ocultada en pc */}
      <div className=" w-screen  py-5  sm:hidden block">
        <div className=" rounded">
          <div className="">
            <img src={pre} className="w-full" />
          </div>
          <div className="bg-[#D1000A]  flex flex-col justify-around  ">
            <h1 className="text-3xl font-extrabold font-poppins px-5 py-5 text-center leading-snug text-white">
              El programa online que te transforma a una persona bilingüe.
            </h1>
            <div className="px-5 flex justify-center py-5">
              <button
                className="hover:bg-gray-900 text-white font-bold  py-2 px-2 bg-black font-poppins rounded-lg"
                onClick={hotlink}
              >
                ¡HAZ CLICK AQUI PARA COMENZAR!
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center font-poppins text-lg px-3 sm:text-2xl">
        Más de 3500 personas se han unido a esta CAPACITACIÓN y están cumpliendo
        sus metas
      </p>

      <div className="text-center p-2">
        <a
          href="https://englishnow-0511.club.hotmart.com/login"
          target="blank"
          className="text-sky-500 font-poppins text-xl sm:text-2xl underline font-bold text-center"
        >
          {" "}
          ESTUDIANTES REGULARES PUEDEN INGRESAR HACIENDO CLICK AQUÍ
        </a>
      </div>

      <div>
        <img src={wave} className="h-20 w-full rotate-180" />
      </div>
      {/* nuestros metodos son tan sencillos que no importa si */}
      <div className="bg-gray-900  sm:flex">
        <div className="w-2/4 pl-24 pt-10 hidden sm:block">
          <img src={familia} className="rounded-lg " />
        </div>
        <div className="sm:p-10  sm:w-2/4">
          <div>
            <p className="text-purple-500 sm:text-6xl text-3xl px-5 text-center font-bold">
              Nuestro método es tan sencillo que no importa si:
            </p>
          </div>
          <div className="sm:px-10 px-5 py-10 gap-4 flex flex-col ">
            <div className="flex font-poppins  gap-5  text-xl text-gray-200">
              <div><BsFillPersonCheckFill /></div>
              <p>No tienes conocimiento</p>
            </div>
            <div className="flex font-poppins  gap-5  text-xl text-gray-200">
             <div> <BsFillPersonCheckFill /></div>
              <p clas>Eres adolescente, adulto joven o persona mayor.</p>
            </div>
            <div className="flex font-poppins  gap-5  text-xl text-gray-200">
             <div> <BsFillPersonCheckFill /></div>
              <p>Si no tienes mucho tiempo al día para aprender</p>
            </div>
            <div className="flex font-poppins  gap-5  text-xl text-gray-200">
              <div>
                <BsFillPersonCheckFill className=" " />
                </div>
              <p>Si en tu proceso de aprendizaje no has tenido resultados</p>
            </div>
          </div>
          <div className="  block sm:hidden">
            <img src={familia} className=" " />
          </div>
          <div className="text-center pt-5">
            <button
              className="bg-gray-900 text-gray-200 font-bold p-4 border border-gray-200 hover:bg-purple-600 font-poppins rounded-lg"
              onClick={hotlink}
            >
              ¡HAZ CLICK AQUI PARA COMENZAR!
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={wave} className="h-20 w-full " />
      </div>
      <div>
        <div className="pb-5">
          <h1 className="text-[#D1000A] sm:text-5xl text-3xl text-center font-bold">
            ¿Qué lograrás con este programa?
          </h1>
        </div>
        <div className="flex justify-center">
          {" "}
          <img src={mockups} className="" />
        </div>

        <div className="sm:px-40 px-5 flex-col flex gap-3">
          <div className="flex gap-2">
            <div>
              <GiCheckMark className="text-green-500" />{" "}
            </div>
            <p className="sm:text-2xl font-bold font-poppins text-gray-900">
              Podrás entablar conversaciones de la manera adecuada.
            </p>
          </div>
          <div className="flex gap-2">
            <div>
              <GiCheckMark className="text-green-500" />{" "}
            </div>
            <p className="sm:text-2xl font-bold font-poppins text-gray-900">
              Ganarás confianza para expresarte.
            </p>
          </div>
          <div className="flex gap-2">
            <div>
              <GiCheckMark className="text-green-500" />{" "}
            </div>
            <p className="sm:text-2xl font-bold font-poppins text-gray-900">
              Aprenderás modismos que utilizan los nativos.
            </p>
          </div>
          <div className="flex gap-2">
            <div>
              <GiCheckMark className="text-green-500" />{" "}
            </div>
            <p className="sm:text-2xl font-bold font-poppins text-gray-900">
              Descubrirás cómo dejar de traducir.
            </p>
          </div>
          <div className="flex gap-2">
            <div>
              <GiCheckMark className="text-green-500" />{" "}
            </div>
            <p className="sm:text-2xl font-extrabold font-poppins text-gray-900">
              Desarrollarás habilidades en todas las áreas del Inglés: habla,
              escucha, escritura y lectura.
            </p>
          </div>
          <div className="flex gap-2">
            <div>
              <GiCheckMark className="text-green-500" />{" "}
            </div>
            <p className="sm:text-2xl font-bold font-poppins text-gray-900">
              Obtendrás fluidez y excelente pronunciación.
            </p>
          </div>
          <div className="flex gap-2">
            <div>
              <GiCheckMark className="text-green-500" />{" "}
            </div>
            <p className="sm:text-2xl font-bold font-poppins text-gray-900">
              Aprenderás gramática de una manera divertida.
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold font-poppins text-purple-800 underline text-center">
              ¡Todo desde la comodidad de tu casa, con o sin internet!
            </p>
          </div>
        </div>
      </div>
      <Cindy />
      <Beneficios />
      <Certificado />
      <Carousel />
      <Ofrecemos />
      <Matricula />
      <ProgressBar />
      <Satisfaccion />
      <Preguntas />
    </div>
  );
}

export default Presentation 