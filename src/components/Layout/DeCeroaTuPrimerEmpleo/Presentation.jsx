import React from 'react'
import pre from '../../../assets/decerotuprimerempleo/ingles.png'
import familia from '../../../assets/decerotuprimerempleo/pareja.png'

import wave from '../../../assets/wave.png'
import canva from '../../../assets/canva.png'
import mockups from '../../../assets/decerotuprimerempleo/mockup.png'

import {GiCheckMark} from 'react-icons/gi'
import {BsFillBalloonHeartFill} from 'react-icons/bs'


const Presentation = () => {

  const hotlink = () => {
    window.open("https://go.hotmart.com/L84292575H?ap=8e8d", "")
  }

  return (
    <div className='mt-20'>
      <h1 className="sm:text-5xl text-xl  uppercase text-center text-gray-900 font-bold p-3 font-sans leading-snug ">
        {" "}
        ¿Estás cansado de buscar trabajo y <strong className='font-extrabold'>no</strong> conseguirlo por no saber inglés? <br></br><strong className='font-extrabold'>¡No te preocupes más!</strong>
      </h1>
     

      {/* ocultada en mobile */}
      <div className=" w-screen px-20 py-5  hidden sm:block">
        <div className="flex rounded">
          <div className="bg-[#D1000A] w-2/4 flex flex-col justify-around rounded-l-lg ">
            <h1 className="text-5xl font-bold font-poppins p-10 leading-snug text-gray-200">
              El programa online con el que tu podrás  pasar de cero 
              a conseguir tu primer empleo en inglés.
             
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
            El programa online con el que tu podrás  pasar de cero 
              a conseguir tu primer empleo en inglés.
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
        Más de 2000 personas se han unido a esta CAPACITACIÓN y están cumpliendo
        sus metas.
      </p>

      <div className="text-center p-2">
        <a
          href="https://deceroatuprimerempleoeningles.club.hotmart.com/login"
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
              ¿Te gustaría aprender inglés, expresar tus ideas en el idioma y  trabajar en cualquier empresa a nivel global?
            </p>
          </div>
          <div className="sm:px-10 px-5 py-10 gap-4 flex flex-col ">
            <div className="flex font-poppins  gap-5  text-xl text-gray-200">
              <p>
              <strong>¡ESTÁ COMPROBADO!</strong> Las personas que ocupan los cargos mejor remunerados, dominan este idioma.
                <br></br><br></br>
                Con el programa, <strong>DE CERO A TU PRIMER EMPLEO EN INGLÉS</strong>, desarrolla las habilidades para trabajar en una multinacional o en una empresa, donde sea necesario hablar en inglés
                
                <br>
                </br>
                Potencia tu fluidez, tu capacidad de expresarte y tu gramática con un método, fácil, rápido y divertido.
<br></br><br></br>
                <p className='font-extrabold'>Comienza a construir un futuro exitoso en inglés!</p>
              </p>
            </div>
          </div>
          <div className="  block sm:hidden">
            <img src={familia} className=" " />
          </div>
          <div className="text-center pt-0">
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
            DESCUBRE LOS BENEFICIOS 
          </h1>
        </div>
        <div className="flex justify-center">
          {" "}
          <img src={mockups} className="" />
        </div>

        <div className="sm:px-72 px-5 flex-col flex gap-5">
          <div className="flex gap-2">
            <div>
              <GiCheckMark className="text-green-600" />{" "}
            </div>
            <p className="sm:text-xl font-bold sm:font-medium font-poppins text-gray-900">
            Dominarás los fundamentos del idioma inglés, incluyendo gramática, vocabulario, pronunciación y <strong>comprensión auditiva. </strong>
            </p>
          </div>
          <div className="flex gap-2">
            <div>
            <GiCheckMark className="text-green-600" />{" "}
            </div>
            <p className="sm:text-xl font-bold sm:font-medium font-poppins text-gray-900">
            Aprenderás a <strong>comunicarte efectivamente</strong> en inglés tanto de forma oral como escrita, adquiriendo fluidez y confianza en tus habilidades lingüísticas.
            </p>
          </div>
          <div className="flex gap-2">
            <div>
            <GiCheckMark className="text-green-600" />{" "}
            </div>
            <p className="sm:text-xl font-bold sm:font-medium font-poppins text-gray-900">
            Desarrollarás la capacidad de redactar y entender textos en inglés relacionados con el <strong>entorno laboral,</strong> como currículums, cartas de presentación y correos electrónicos profesionales. 
            </p>
          </div>
          <div className="flex gap-2">
            <div>
            <GiCheckMark className="text-green-600" />{" "}
            </div>
            <p className="sm:text-xl font-bold sm:font-medium font-poppins text-gray-900">
            Adquirirás habilidades de comprensión auditiva en inglés, lo que te permitirá entender y responder adecuadamente durante <strong>entrevistas de trabajo</strong> y conversaciones laborales. 
            </p>
          </div>
          <div className="flex gap-2">
            <div>
            <GiCheckMark className="text-green-600" />{" "}
            </div>
            <p className="sm:text-xl  font-bold sm:font-medium font-poppins text-gray-900">
            Aprenderás estrategias y técnicas para mejorar <strong>tu pronunciación y acento en inglés,</strong> lo que te ayudará a comunicarte de manera más clara y efectiva en un entorno laboral internacional. 
            </p>
          </div>
          <div className="flex gap-2">
            <div>
            <GiCheckMark className="text-green-600" />{" "}
            </div>
            <p className="sm:text-xl font-bold sm:font-medium font-poppins text-gray-900">
            Obtendrás conocimientos sobre la cultura laboral y los términos específicos utilizados en el ámbito profesional en inglés, lo cual te facilitará la adaptación a un <strong>entorno de trabajo de habla inglesa. </strong>
            </p>
          </div>
          <div className="flex gap-2">
            <div>
            <GiCheckMark className="text-green-600" />{" "}
            </div>
            <p className="sm:text-xl font-bold sm:font-medium font-poppins text-gray-900">
            Descubrirás recursos y herramientas útiles para seguir mejorando tu nivel de inglés incluso después de finalizar el curso, asegurando así un <strong>crecimiento continuo</strong> en tu dominio del idioma. 
            </p>
          </div> <div className="flex gap-2">
            <div>
            <GiCheckMark className="text-green-600" />{" "}
            </div>
            <p className="sm:text-xl font-bold sm:font-medium font-poppins text-gray-900">
            Aprenderás <strong>estrategias para buscar empleo en inglés,</strong> incluyendo la creación de perfiles profesionales en plataformas online, la búsqueda de oportunidades laborales y la participación en entrevistas de trabajo en inglés.             </p>
          </div>
          <div className="flex gap-2">
            <div>
            <GiCheckMark className="text-green-600" />{" "}
            </div>
            <p className="sm:text-xl font-bold sm:font-medium font-poppins text-gray-900">
            Obtendrás <strong>asesoramiento y orientación personalizada</strong> para la búsqueda de empleo en un entorno internacional, incluyendo consejos para adaptar tu currículum y carta de presentación a los estándares y expectativas de empleadores de habla inglesa.            </p>
          </div>
          <div className="flex gap-2">
            <div>
            <GiCheckMark className="text-green-600" />{" "}
            </div>
            <p className="sm:text-xl font-bold sm:font-medium font-poppins text-gray-900">
            Al finalizar el curso, contarás con las herramientas y conocimientos necesarios para postularte y competir por <strong>tu primer empleo en un entorno de habla inglesa,</strong> aumentando así tus oportunidades laborales y tu crecimiento profesional.            </p>
          </div>
          
          
         
          <div className="flex gap-2">
            <div>
            <GiCheckMark className="text-green-600" />{" "}
            </div>
            <p className="sm:text-xl font-bold sm:font-medium font-poppins text-gray-900">
            Acceder al <strong>certificado</strong> avalado por Hotmart y Seminarios Online.            </p>
          </div>

          <div className="flex gap-2 mb-5">
            <div>
            <GiCheckMark className="text-green-600" />{" "}
            </div>
            <p className="sm:text-xl font-bold sm:font-medium  font-poppins text-gray-900 flex gap-2">
            REGALO:    <img src={canva} className='w-10' /><div>  <strong>Canva PRO  </strong>  de por vida, <button className='underline hover:text-blue-500' onClick={() => window.open('https://walink.co/9a1401', '_blank')}>aqui.</button></div>   </p>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Presentation 