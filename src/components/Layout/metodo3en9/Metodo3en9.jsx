import React from 'react'
import wavemorado from '../../../assets/wavemorado.png'
import {MdComputer} from 'react-icons/md'
import {BsFillJournalBookmarkFill, BsBuildingsFill} from 'react-icons/bs'
import {BiRun} from 'react-icons/bi'
import wavegris from '../../../assets/wavegris.svg'
import hotlink from './Hotlink'


import {BiUserCheck} from 'react-icons/bi'
const metodo3en9 = () => {



  return (
    <div>
    <div className="bg-moradovivo lg:pb-48 pb-20 ">
      <div className="md:px-36 px-5 py-16 flex flex-col gap-10">
        <p className="font-poppins lg:text-5xl  text-3xl font-bold text-gray-200 text-center">
          Llegar a la fluidez del inglés en 9 meses es posible, ¿Sabes por qué?
        </p>
        <button className="bg-yellow-500 lg:text-4xl text-xl p-5 font-bold rounded-lg">
          <strong>NO</strong> necesitas viajar a Estados Unidos o pagar cursos de miles de
          dolares, ni pagar clases personalizadas...
        </button>
        <p className="lg:text-4xl text-xl font-poppins text-gray-200">
          Necesitas que cada hora de estudio sea mas eficiente{" "}
          <strong> usando métodos que realmente funcionen.</strong>
        </p>
        <p className="lg:text-4xl text-2xl font-poppins text-gray-200 underline font-bold">
          {" "}
          ¿Cómo lograrlo?
        </p>
        <p className="lg:text-3xl text-lg font-poppins text-gray-200  ">
          {" "}
          Con el uso de técnicas especiales de estudio, podrás implantar el
          inglés en tu memoria de largo plazo y mejorar tanto tu comprensión
          auditiva como lectora. Estas técnicas se basan en métodos efectivos
          que te permitirán consolidar el conocimiento de manera más eficiente y
          duradera, lo que te llevará a un mayor dominio del idioma.
        </p>
      </div>

      <div className="md:px-60  px-5">
        <hr></hr>
      </div>

    <div className='lg:px-36 pb-30 '>
        <p className='text-3xl font-poppins text-gray-200 font-bold  text-center py-10'>Te presentamos</p>
   
        <p className='lg:text-5xl text-3xl font-poppins font-bold  text-center py-20 text-cian'>EL «MÉTODO INMERSIVO 3 EN 9»</p>

        <p className='lg:text-3xl text-xl font-poppins text-gray-200 px-5 lg:px-0 text-center py-10'>Un programa formativo de <strong className='text-cian'>meses 9 </strong> que te permitirá desarrollar las habilidades lingüísticas del Inglés mediante <strong className='underline'>misiones diarias, ejercicios prácticos y sesiones en vivo</strong></p>
    </div> 
    </div>
  
<div className='lg:px-36 bg-gray-200  '>
  <img src="https://rebelionbilingue.com/wp-content/uploads/2022/11/2-2-1.png" alt="" className='relative xl:-top-60  -top-20' />
  <div className=' grid lg:grid-cols-2 grid-cols-1 -top-20 relative lg-px-36 px-5 gap-5'>
  <div className='flex gap-4'>
    <div>
      <BiUserCheck className='text-3xl text-moradovivo' />
    </div>
    <div>
      <p className='font-poppins lg:text-2xl text-xl '><strong>Instructores de primera clase</strong> expertos en la enseñanza del inglés.</p>
    </div>
  </div>
  <div className='flex gap-4'>
    <div>
      <BsFillJournalBookmarkFill className='text-3xl text-moradovivo' />
    </div>
    <div>
      <p className='font-poppins lg:text-2xl text-xl'>Más de<strong> 330 misiones diarias</strong> para que desarrolles las habilidades del Inglés.</p>
    </div>
  </div>
  <div className='flex gap-4'>
    <div>
      <BsBuildingsFill className='text-3xl text-moradovivo' />
    </div>
    <div>
      <p className='font-poppins lg:text-2xl text-xl'>
Acceso<strong> inmediato y por un año</strong> al programa.</p>
    </div>
  </div>
  <div className='flex gap-4'>
    <div>
      <MdComputer className='text-3xl text-moradovivo' />
    </div>
    <div>
      <p className='font-poppins lg:text-2xl text-xl'><strong>Modalidad 100% </strong> virtual para que estudies a tu ritmo.</p>
    </div>
  </div>


</div>

    <p className='lg:text-3xl text-xl font-poppins italic lg:px-36 px-5 text-center'>Este programa te permitirá <strong>desarrollar</strong> y<strong> potenciar</strong> tus habilidades del inglés</p>
    <p className='lg:text-3xl text-xl font-poppins italic lg:px-36 px-5 text-center mt-10'>En tan solo ¡9 meses!</p>

    <div className="flex  justify-center py-10 px-2 ">
        <button
          className="hover:bg-yellow-500 lg:text-3xl text-xl hover:text-gray-900  flex  text-gray-200 font-bold p-4 bg-redventa font-poppins rounded-full    shadow-xl shadow-gray-400 "
          onClick={hotlink}
        >
          ¡Quiero comprometerme con mi ingles  HOY MISMO <div><BiRun className='text-center' /></div>
        </button>
      </div>
</div>


<img src={wavegris} className='rotate-180' />
    </div>
  );
}

export default metodo3en9