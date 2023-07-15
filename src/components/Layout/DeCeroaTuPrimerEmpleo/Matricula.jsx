import React from 'react'
import cover from '../../../assets/decerotuprimerempleo/ingles.png'
import pagos from '../../../assets/englisnow/pagos.webp'
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'

import {BsFillPatchCheckFill} from 'react-icons/bs'

const Matricula = () => {
  const hotlink = () => {
    window.open("https://go.hotmart.com/L84292575H?ap=8e8d", "")
  }
  return (
    <div>
      <div className="bg- ">
        <h1 className="text-[#D1000A] font-extrabold font-sans text-center  py-5 text-5xl sm:text-6xl">
          ¡MATRÍCULA ABIERTA!
        </h1>
      </div>
      <div className="py-6 flex flex-col gap-6">
        <p className="sm:text-4xl text-3xl font-bold text-center">
          INSCRÍBETE HOY Y OBTÉN 
        </p>
       <div className='flex justify-center items-center'>
<AiOutlineArrowRight className='animate-ping' />
        <p className="text-2xl text-center sm:text-4xl font-extrabold px-2 text-green-700 ">
          72% DE DESCUENTO
        </p>
        <AiOutlineArrowLeft className='animate-ping' />
       </div>
        <p className="sm:text-4xl  text-3xl font-extrabold text-center">
          UN ÚNICO PAGO Y ACCESO DE POR VIDA
        </p>
        <p className="text-3xl font-extrabold text-center  text-gray-900 md:hidden block">
          Al inscribirte obtienes:
        </p>
      </div>
      <div className="lg:flex sm:px-36 sm:gap-4 gap-5">
        <div>
          <img src={cover} className=' w-96 rounded sm:px-0 ' />
        </div>
        <div className="flex flex-col gap-1 font-poppins px-5">
        <p className="text-3xl font-extrabold text-center  text-gray-900 md:block hidden">
          Al inscribirte obtienes:
        </p>
          <div className="flex gap-2 items-center ">
            
              <div>
              <BsFillPatchCheckFill />{" "}
              </div>
             
            <p>Acceso a todas las clases y módulos del programa</p>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <BsFillPatchCheckFill />{" "}
              </div>
            <p>Acceso a las clases extra (todas las semanas)</p>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <BsFillPatchCheckFill />{" "}
              </div>
            <p>Acceso a todas las prácticas y actividades de la plataforma</p>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <BsFillPatchCheckFill />{" "}
              </div>
            <p>Acceso al grupo exclusivo de estudiantes</p>
          </div>
          <div className="flex gap-2 items-center">
            <BsFillPatchCheckFill /> <p>Materiales y recursos descargables</p>
          </div>
          <div className="flex gap-2 items-center">
            <BsFillPatchCheckFill />
            <p>Actividades digitales</p>
          </div>
        
          <div className="flex gap-2 items-center">
            <BsFillPatchCheckFill />
            <p>Asesorías</p>
          </div>
          <div className="flex gap-2 items-center">
            <BsFillPatchCheckFill />
            <p>Acompañamiento</p>
          </div>
          <div className="flex gap-2 items-center">
            <BsFillPatchCheckFill />
            <p>Aclaración de dudas</p>
          </div>
          <div className="flex gap-2 items-center">
            <BsFillPatchCheckFill />
            <p>Retroalimentación</p>
          </div>
          <div className="flex gap-2 items-center">
            <BsFillPatchCheckFill />
            <p>Certificado de conclusión</p>
          </div>
          <div className="flex gap-2 items-center">
            <BsFillPatchCheckFill />
            <p>Acceso a canvas pro de por vida.</p>
          </div>
         
        </div>
      </div>
      <div className="md:px-36 py-10">
        <p className=" font-poppins md:text-4xl text-2xl text-center font-bold">
          El valor de nuestro programa es de $179 (dólares), sin embargo , ofrecemos un descuento exclusivo del <strong className="text-[#D1000A]">  72%</strong> por
          tiempo y cupos limitados.
        </p>
        <p className="text-3xl text-center py-2 ">
          Precio regular:{" "}
          <strong className="line-through">$179 (dólares)</strong>
        </p>
        <p className="text-center text-red-500 font-poppins font-extrabold md:text-4xl text-2xl">
          HOY POR SOLO:
        </p>
        <p className="text-center text-green-600 font-poppins  font-black  md:text-8xl text-6xl py-5">
          $49.99 US$
        </p>
        <p className="text-center font-poppins  md:text-3xl text-2xl py-5">
          ¡¡Descuentos disponibles hasta que se terminen los cupos!!
        </p>
        <p className="text-center font-poppins   md:text-3xl text-md py-5">
          Para matricular da click en el botón 👇
        </p>

        <div className='flex justify-center'>
          <button className='bg-yellow-400 font-poppins  font-black py-3 sm:px-16 px-5 shadow-lg hover:shadow-xl hover:bg-yellow-500  hover:text-yellow-4 rounded-full md:text-3xl  text-xl' onClick={hotlink}>INSCRIBIRME AL PROGRAMA</button>
        </div>
        <div className='p-8 flex justify-center'>
          <img src={pagos} alt="" />
        </div>
      
      </div>{" "}
    </div>
  );
}

export default Matricula 