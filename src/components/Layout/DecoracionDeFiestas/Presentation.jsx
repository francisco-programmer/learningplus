import React from 'react'
import pre from '../../../assets/decoraciondefiestas/deco.jpg'
import familia from '../../../assets/decoraciondefiestas/cap2.png'
import { BsFillPersonCheckFill } from 'react-icons/bs'
import wave from '../../../assets/wave.png'

import mockups from '../../../assets/decoraciondefiestas/mokupss.png'
import {GiCheckMark} from 'react-icons/gi'
import {BsFillBalloonFill, BsFillBalloonHeartFill} from 'react-icons/bs'


const Presentation = () => {

  const hotlink = () => {
    window.open("https://go.hotmart.com/N84401792U?ap=fbf3", "")
  }

  return (
    <div className='mt-20'>
      <h1 className="sm:text-5xl text-xl  text-center text-gray-900 font-extrabold p-3 font-sans leading-snug ">
        {" "}
        APRENDE A CREAR UNA ATMÓSFERA ÚNICA Y ESPECIAL PARA CUALQUIER TIPO DE
        CELEBRACIÓN
      </h1>
      <p className="text-center sm:text-4xl text-xl font-poppins text-gray-900">
        Entrarás al lucrativo mundo de Decoración de fiestas!
      </p>

      {/* ocultada en mobile */}
      <div className=" w-screen px-20 py-5  hidden sm:block">
        <div className="flex rounded">
          <div className="bg-[#D1000A] w-2/4 flex flex-col justify-around rounded-l-lg ">
            <h1 className="text-5xl font-bold font-poppins p-10 leading-snug text-gray-200">
              El programa online que te transforma a un event planners.
              <p className="text-2xl text-center font">
                "Decorador de Fiestas"
              </p>
            </h1>

            <div className="px-10 flex justify-center">
              <button
                className="hover:bg-[#FBAD42] text-gray-200 font-bold p-4 hover:border border-black hover:text-black bg-black font-poppins rounded-lg"
                onClick={hotlink}
              >
                ¡HAZ CLICK AQUI PARA INSCRIBIRTE!
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
              El programa online que te transforma a un event planners.
              <p className="text-xl text-center font">"Decorador de Fiestas"</p>
            </h1>

            <div className="px-5 flex justify-center py-5">
              <button
                className="hover:bg-gray-900 text-white font-bold  py-2 px-2 bg-black font-poppins rounded-lg"
                onClick={hotlink}
              >
                ¡HAZ CLICK AQUI PARA  INSCRIBIRTE!
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center font-poppins text-lg px-3 sm:text-2xl">
        Más de 1500 personas se han unido a esta CAPACITACIÓN y están cumpliendo
        sus metas
      </p>

      <div className="text-center p-2">
        <a
          href="https://decoraciondefiestaspracticayev.club.hotmart.com/index"
          target="blank"
          className="text-sky-500 font-poppins text-xl sm:text-2xl underline font-bold text-center"
        >
          {" "}
          ESTUDIANTES REGULARES PUEDEN INGRESAR HACIENDO CLICK AQUÍ
        </a>
      </div>

      <div>
        <img src={wave} className="h-20 w-full rotate-180 z-10" />
      </div>
      {/* nuestros metodos son tan sencillos que no importa si */}
      <div className="bg-gray-900  sm:flex">
        <div className="w-2/4 pl-24 pt-10 hidden sm:block">
          <img src={familia} className="rounded-lg " />
        </div>
        <div className="sm:p-10  sm:w-2/4">
          <div>
            <p className="text-[#FBAD42] sm:text-4xl text-3xl px-5 text-center font-bold">
              ¿Te gustaría especializarte en el interesante mundo de la
              decoración de fiestas?
            </p>
          </div>
          <div className="sm:px-10 px-5 py-10 gap-4 flex flex-col ">
            <div className="flex font-poppins  gap-5  text-xl text-gray-200">
              <p>
                Con el MasterClass{" "}
                <strong>DECORACIÓN DE FIESTAS PRÁCTICO Y EVALUATIVO,</strong>{" "}
                perfeccionarás tus conocimientos en decoración de fiestas
                personalizadas, con una exclusiva prueba creada por
                profesionales.
              </p>
            </div>
          </div>
          <div className="  block sm:hidden">
            <img src={familia} className=" " />
          </div>
          <div className="text-center pt-5">
            <button
              className="bg-gray-900 text-[#FBAD42] font-bold p-4 border border-[#FBAD42] hover:bg-[#FBAD42] hover:text-gray-900 font-poppins rounded-lg"
              onClick={hotlink}
            >
              ¡HAZ CLICK AQUI PARA INSCRIBIRTE!
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={wave} className="h-20 w-full " />
      </div>
      <div>
        <div className="pb-5">
          <h1 className="text-[#D1000A] sm:text-5xl text-3xl text-center font-extrabold">
            ¿QUÉ VAS A LOGRAR CON ESTE PROGRAMA?
          </h1>
        </div>
        <div className="flex justify-center">
          {" "}
          <img src={mockups} className="" />
        </div>

        <div className="sm:px-40 px-5 flex-col flex gap-5">
          <div className="flex gap-2">
            <div>
              <BsFillBalloonFill className="text-[#FBAD42]" />{" "}
            </div>
            <p className="sm:text-2xl font-bold sm:font-medium font-poppins text-gray-900">
              Aprenderás a hacer una{" "}
              <strong>hermosa decoración personalizada</strong> donde el
              festejado es el tema principal de la decoración.
            </p>
          </div>
          <div className="flex gap-2">
            <div>
            <BsFillBalloonFill className="text-[#FBAD42]" />{" "}
            </div>
            <p className="sm:text-2xl font-bold sm:font-medium font-poppins text-gray-900">
              Aprenderás cuales son todos los <strong>materiales</strong> que
              necesitas para hacer una decoración personalizada.
            </p>
          </div>
          <div className="flex gap-2">
            <div>
            <BsFillBalloonFill className="text-[#FBAD42]" />{" "}
            </div>
            <p className="sm:text-2xl font-bold sm:font-medium font-poppins text-gray-900">
              Adquirirás contendido de valor por medio de la participación en
              las pruebas del saber formuladas en este programa, para evaluar y
              retroalimentar tus conocimientos con <strong>profesionales de la industria.</strong>
            </p>
          </div>
          <div className="flex gap-2">
            <div>
            <BsFillBalloonFill className="text-[#FBAD42]" />{" "}
            </div>
            <p className="sm:text-2xl font-bold sm:font-medium font-poppins text-gray-900">
              Tomarás nota de la información suministrada en las pruebas del
              <strong>saber de un decorador</strong> para que luego puedas aplicarlas.
            </p>
          </div>
          <div className="flex gap-2">
            <div>
            <BsFillBalloonFill className="text-[#FBAD42]" />{" "}
            </div>
            <p className="sm:text-2xl  font-bold sm:font-medium font-poppins text-gray-900">
              Crearás ambientes hermosos Identificando cada <strong>espacio idóneo a
              decorar.</strong>
            </p>
          </div>
          <div className="flex gap-2">
            <div>
            <BsFillBalloonFill className="text-[#FBAD42]" />{" "}
            </div>
            <p className="sm:text-2xl font-bold sm:font-medium font-poppins text-gray-900">
              Aprenderás técnica en <strong>relleno de globo cristal</strong> para hacer hermosas
              creaciones.
            </p>
          </div>
          <div className="flex gap-2">
            <div>
            <BsFillBalloonFill className="text-[#FBAD42]" />{" "}
            </div>
            <p className="sm:text-2xl font-bold sm:font-medium font-poppins text-gray-900">
              Crearás <strong>columnas con globos</strong> como un profesional.
            </p>
          </div> <div className="flex gap-2">
            <div>
            <BsFillBalloonFill className="text-[#FBAD42]" />{" "}
            </div>
            <p className="sm:text-2xl font-bold sm:font-medium font-poppins text-gray-900">
            Aprenderás a realizar <strong>armado de clúster en tendencia.</strong>
            </p>
          </div>
          <div className="flex gap-2">
            <div>
            <BsFillBalloonFill className="text-[#FBAD42]" />{" "}
            </div>
            <p className="sm:text-2xl font-bold sm:font-medium font-poppins text-gray-900">
            Manejarás combinaciones adecuadas aplicando la <strong>técnica doble staff.</strong>
            </p>
          </div>
          <div className="flex gap-2">
            <div>
            <BsFillBalloonFill className="text-[#FBAD42]" />{" "}
            </div>
            <p className="sm:text-2xl font-bold sm:font-medium font-poppins text-gray-900">
            Aprenderás a crear una hermosa <strong>pared en globos</strong> para tener espacios alegres y divertidos.
            </p>
          </div>
          <div className="flex gap-2">
            <div>
            <BsFillBalloonFill className="text-[#FBAD42]" />{" "}
            </div>
            <p className="sm:text-2xl font-bold sm:font-medium font-poppins text-gray-900">
            Aprenderás nuevas técnicas en <strong>arcos orgánicos</strong> con diferente relleno.            </p>
          </div>
          <div className="flex gap-2">
            <div>
            <BsFillBalloonFill className="text-[#FBAD42]" />{" "}
            </div>
            <p className="sm:text-2xl font-bold sm:font-medium font-poppins text-gray-900">
            Aprenderás relleno de <strong>número gigante</strong> con globos            </p>
          </div>
          <div className="flex gap-2">
            <div>
            <BsFillBalloonFill className="text-[#FBAD42]" />{" "}
            </div>
            <p className="sm:text-2xl font-bold sm:font-medium font-poppins text-gray-900">
            Aprenderás cómo <strong>inflar, calibrar, montar y amarrar</strong> correctamente los globos.            </p>
          </div>
          <div className="flex gap-2">
            <div>
            <BsFillBalloonFill className="text-[#FBAD42]" />{" "}
            </div>
            <p className="sm:text-2xl font-bold sm:font-medium font-poppins text-gray-900">
            Acceder al <strong>certificado</strong> avalado por Hotmart y Seminarios Online.            </p>
          </div>
          <div>
            <p className="text-2xl font-bold  font-poppins text-gray-900 underline text-center">
              ¡Todo desde la comodidad de tu casa, con o sin internet!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation 