import React from 'react'
import lo from '../assets/lo.png'
import {BsCashCoin} from 'react-icons/bs'
import {ImWhatsapp} from 'react-icons/im'
import wave from '../assets/wave.png'

import {BsFillPatchCheckFill} from 'react-icons/bs'
import {AiOutlineDeliveredProcedure} from 'react-icons/ai'
import {IoMdOptions} from 'react-icons/io'
import {MdOutlineMoreTime, MdSecurity} from 'react-icons/md'
import {TbFileCertificate} from 'react-icons/tb'

const Banner = () => {
  return (
    <>
      <div className="   sm:flex justify-center bg-gray-900   pt-10 px-5  ">
        <div className="font-poppins text-gray-300 ">
          <h1 className="text-5xl py-2 font-bold  text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-[#5E17EB]">
            Cursos para ganar dinero!
          </h1>
          <img src={lo} className="rounded w-80 sm:px-0 px-5  sm:hidden " />
          <p className="text-xl py-5 sm:py-0">
            Desarrolla habilidades que realmente te van a servir para ganar{" "}
            <br></br>mucho dinero, el cielo es el limite!
          </p>
          <p className="text-sky-500 line-through text-3xl font-bold ">
            No mas cursos humo!
          </p>
          <p className="text-xl py-5 sm:py-0">
            Cada curso tiene el potencial para brindarte los conocimientos{" "}
            <br></br>necesarios para emprender un negocio en lo que mas te
            guste!
          </p>
          <div className="py-5">
            <button className="border border-green-500 hover:bg-green-500  text-green-500 hover:text-gray-900 p-3 rounded-full flex gap-2 items-center" onClick={() => window.open("https://walink.co/8d7c86", "_blank")}>
              Contáctame
              <ImWhatsapp />
            </button>
          </div>
        </div>
        <img src={lo} className="rounded w-80 sm:px-0 px-5 hidden sm:block " />
      </div>
      <div>
        <img src={wave} className="h-20 w-full" />
      </div>
      <div className="md:px-40  px-5">
        <h1 className="md:text-5xl font-extrabold  text-3xl text-gray-900 mb-5">
          Ofrecemos una serie de beneficios para nuestros estudiantes{" "}
        </h1>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-9">
          <div className="bg-gray-900  flex flex-col items-center  p-2 rounded-3xl drop-shadow-2xl">
            <button className="bg-gray-900  px-4 py-4 -top-7 relative  rounded-full font-bold text-sky-500">
              <AiOutlineDeliveredProcedure className='text-2xl' />
            </button>

            <p className="font-poppins text-sky-500 text-xl -top-7 relative px-5">
              <strong>Flexibilidad y acceso de por vida</strong>
            </p>
            <p className="font-poppins -top-4 relative text-gray-200 px-5">
              El aprendizaje en línea permite a los estudiantes aprender en su
              propio horario y ritmo, lo que puede ser especialmente útil para
              aquellos que tienen otros compromisos, como trabajo o familia.
            </p>
          </div>
          <div className="bg-gray-900  flex flex-col items-center  p-2 rounded-3xl drop-shadow-2xl ">
            <button className="bg-gray-900 py-4 px-4 -top-7 relative  rounded-full font-bold text-sky-500">
              <IoMdOptions className='text-2xl'/>
            </button>

            <p className="font-poppins text-sky-500 text-xl -top-7 relative px-5">
              <strong>Variedad de opciones</strong>
            </p>
            <p className="font-poppins  relative text-gray-200 px-5 pb-5">
              Se te ofrece una amplia variedad de opciones de cursos y
              programas, lo que significa que podrás elegir en que areas te
              quieres especializar Ej: Ingles, Marketing, emprendimiento.
            </p>
          </div>
          <div className="bg-gray-900  flex flex-col items-center  p-2 rounded-3xl shadow-lg ">
            <button className="bg-gray-900 py-4 px-4 -top-7 relative  rounded-full font-bold text-sky-500">
              <MdOutlineMoreTime className='text-2xl' />
            </button>

            <p className="font-poppins text-sky-500 text-xl -top-7 relative px-5">
              <strong>Ahorro de tiempo y dinero</strong>
            </p>
            <p className="font-poppins  relative text-gray-200 px-5 pb-5">
              El aprendizaje en línea puede ahorrar a los estudiantes tiempo y
              dinero al eliminar la necesidad de viajar y alojarse en otro lugar
              para asistir a clases.
            </p>
          </div>
          <div className="bg-gray-900  flex flex-col items-center  p-2 rounded-3xl drop-shadow-2xl ">
            <button className="bg-gray-900 py-4 px-4 -top-7 relative  rounded-full font-bold text-sky-500">
              <BsFillPatchCheckFill className='text-2xl'/>
            </button>

            <p className="font-poppins text-sky-500 text-xl -top-7 relative px-5 ">
              <strong>Aprendizaje Personalizado</strong>
            </p>
            <p className="font-poppins  relative text-gray-200 px-5 pb-5">
              Los estudiantes pueden aprender a su propio ritmo y tienen la
              capacidad de revisar el material tantas veces como sea necesario
              para comprender completamente el tema.
            </p>
          </div>
          <div className="bg-gray-900  flex flex-col items-center  p-2 rounded-3xl drop-shadow-2xl ">
            <button className="bg-gray-900 py-4 px-4 -top-7 relative  rounded-full font-bold text-sky-500">
              <TbFileCertificate className='text-2xl'/>
            </button>

            <p className="font-poppins text-sky-500 text-xl -top-7 relative px-5">
              <strong>Certificación</strong>
            </p>
            <p className="font-poppins  relative text-gray-200 px-5 pb-5">
              Una vez finalices tus estudios recibiras tu diploma, que certifica
              que terminaste el curso y cuentas con las habilidades necesarias
              para desempeñar tu labor.
              
            </p>
          </div>
          <div className="bg-gray-900  flex flex-col items-center  p-2 rounded-3xl drop-shadow-2xl  ">
            <button className="bg-gray-900 py-4 px-4 -top-7 relative  rounded-full font-bold text-sky-500">
              <MdSecurity className='text-2xl' />
            </button>

            <p className="font-poppins text-sky-500 text-xl -top-7 relative px-5 ">
              <strong>Seguridad y compromiso</strong>
            </p>
            <p className="font-poppins  relative text-gray-200 px-5 pb-5">
             Utilizamos la plataforma #1 a nivel mundial para alojar nuestros cursos y brindarte la mejor seguridad de pago,
             ademas si no te sientes a gusto, tienes 7 dias de garantia y el desembolso del 100%  del dinero.
              
            </p>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Banner