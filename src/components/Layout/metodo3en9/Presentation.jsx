import React from 'react'
import pre from '../../../assets/englisnow/cover.png'
import familia from '../../../assets/englisnow/familia.webp'
import { BsCashCoin} from 'react-icons/bs'
import { GiBattery25 } from 'react-icons/gi'
import {LuTimerReset} from 'react-icons/lu'
import {TiTimes} from 'react-icons/ti'
import wave from '../../../assets/wave.png'
import Carousel from './Carousel'
import mockups from '../../../assets/englisnow/mockups.webp'
import {GiCheckMark} from 'react-icons/gi'
import Cindy from './Cindy'
import Beneficios from './Beneficios'
import Certificado from './Certificado'
import Metodo3en9 from './Metodo3en9'
import Matricula from './Matricula'
import ProgressBar from './ProgressBar'
import Satisfaccion from './Satisfaccion'
import Preguntas from './Preguntas'
import VideoPrincipal from './VideoPrincipal'
import hotlink from './Hotlink'

const Presentation = () => {

 

  return (
    <div className="mt-20">
      <h1 className="sm:text-5xl text-2xl  text-center text-gray-900 font-extrabold p-3 font-poppins leading-snug ">
        {" "}
        LOGRA LA FLUIDEZ DEL INGLÉS DESDE TU CASA Y EN LINEA EN SOLO 9 MESES CON
        EL "MÉTODO 3 EN 9"
      </h1>
      <p className="text-center sm:text-3xl text-xl font-poppins px-5 font-ligth text-gray-900">
        Estudiando menos de 60 minutos al día…
      </p>
      <div>
        <VideoPrincipal />
      </div>

      <p className="text-center font-poppins text-lg px-3 pb-5 sm:text-2xl">
        Alcanza la fluidez del Inglés{" "}
        <strong>
          mediante métodos enfocados en el cumplimiento de pequeñas misiones
          diariamente
        </strong>{" "}
        que permitirán desarrollar las habilidades de escritura, lectura, habla,
        escucha.
      </p>

      <div className="text-center p-2 ">
        <button
          className="bg-yellow-500 text-gray-900 hover:text-gray-200 font-bold px-10 py-4 text-2xl border border-gray-200 hover:bg-redventa font-poppins rounded-full"
          onClick={hotlink}
        >
          ¡QUIERO SER FLUIDO EN INGLES!
        </button>
      </div>
      <div className=' px-5 md:px-36 py-10'>
        <p className='text-center border-dashed border-2 border-green-900  bg-green-500/10 rounded-lg p-5 text-2xl text-green-900 font-poppins'>
          Saber inglés incrementa en una tercera parte el salario de una persona
          y <strong>aumenta en 50% sus probabilidades de conseguir un mejor
          trabajo.</strong> Además, evita en un <strong>80%</strong> los riesgos de que lo descarten en
          un proceso de selección.
        </p>
      </div>

      <div>
        <img src={wave} className="h-20 w-full rotate-180" />
      </div>
      {/* nuestros metodos son tan sencillos que no importa si */}
      <div className="bg-gray-900  sm:flex">
        <div className="sm:p-10  ">
          <div>
            <p className="text-yellow-500 sm:text-5xl text-3xl px-5 text-center font-bold py-5">
              Aun no ha pasado <strong>una semana del lanzamiento </strong> de
              este programa y <strong>esto es lo que dicen...</strong>
            </p>
          </div>
         <div className='sm:grid-cols-2 grid md:px-36 px-2 gap-2 '>
          <img src='https://rebelionbilingue.com/wp-content/uploads/2023/03/t5.png' />
          <img src='https://rebelionbilingue.com/wp-content/uploads/2023/03/T1.png' />
          <img src='https://rebelionbilingue.com/wp-content/uploads/2023/03/t2.png' />
          <img src='https://rebelionbilingue.com/wp-content/uploads/2023/03/t4.png' />
          <img src='https://rebelionbilingue.com/wp-content/uploads/2022/03/testimonio_4_OP.jpg' />
          <img src='https://rebelionbilingue.com/wp-content/uploads/2022/03/TESTIMONIO_3_OP.jpg' />
          <img src='https://rebelionbilingue.com/wp-content/uploads/2022/03/testimonio_5_OP.jpg' />

         </div>
        
          
        </div>
      </div>
      <div>
        <img src={wave} className="h-20 w-full " />
      </div>
      <div className=''>
        <div className="py-10 sm:px-36 text-center">
          <h1 className="text-moradovivo sm:text-5xl text-3xl text-center font-bold">
            Todo el mundo dice que es muy difícil aprender inglés desde el hogar y en latinoamerica <br></br>porque...
          </h1>
        </div>
        <div className='grid lg:grid-cols-4 grid-cols-1 sm:px-36 px-5 gap-5'>
          
          <div className='bg-gray-200 px-5 pb-10 pt-5 rounded-lg  flex  flex-col items-center gap-5 shadow-gray-500 shadow-lg'>
          <div>
            <LuTimerReset className='text-8xl text-moradovivo relative' />
          </div>
            <p className='font-poppins text-center text-lg'>
            <strong>Siempre han usado métodos sin sentido</strong> y en contra de la logica del estudio de idiomas.
            </p>
          </div>
          <div className='bg-gray-200 px-5 pb-10 pt-5 rounded-lg  flex  flex-col items-center gap-5 shadow-gray-500 shadow-lg'>
          <div>
            <GiBattery25 className='text-8xl text-moradovivo relative' />
          </div>
            <p className='font-poppins text-center text-lg'>
            <strong>Creen que la única manera de «dominar el inglés»</strong> es viajando a Australia o Estados Unidos.
            </p>
          </div>
          <div className='bg-gray-200 px-5 pb-10 pt-5 rounded-lg  flex  flex-col items-center gap-5 shadow-gray-500 shadow-lg'>
          <div>
            <BsCashCoin className='text-8xl text-moradovivo relative' />
          </div>
            <p className='font-poppins text-center text-lg'>
            <strong>Piensan que el Inglés es costoso</strong> porque la gran mayoría de academias realmente lo son.
            </p>
          </div>
          <div className='bg-gray-200 px-5 pb-10 pt-5 rounded-lg  flex  flex-col items-center gap-5 shadow-gray-500 shadow-lg'>
          <div>
            <TiTimes className='text-8xl text-moradovivo relative' />
          </div>
            <p className='font-poppins text-center text-lg'>
            <strong>Creen que deben invertir muchas horas al día </strong> estudiando gramática y pronunciación.
            </p>
          </div>
        </div>
        <p className='md:text-4xl text-2xl font-bold md:px-36 px-5 text-center sm:py-10  py-5'><strong>No puedes confiar en los métodos</strong> de estudio tradicionales diseñados en el siglo XIX Y XX…</p>
        <p className='md:text-2xl text-xl font-bold md:px-36 px-5 text-center pb-5 '>Necesitas <strong>un programa moderno y a la altura de tus necesidades,</strong>  con métodos innovadores que te permita tener resultados en los primeros 7 días.</p>

       

       
      </div>
      <Cindy />
     <Metodo3en9 />
    </div>
  );
}

export default Presentation 