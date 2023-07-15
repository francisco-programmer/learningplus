import React from 'react'
import wave from '../assets/wave.png'
import englisnow from '../assets/englisnow/cover.png'
import decoraciondefiestas from '../assets/decoraciondefiestas/deco.jpg'
import empleoingles from '../assets/decerotuprimerempleo/ingles.png'
import {AiFillStar} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Contador from './Contador'

const Courses = () => {
  return (
    <div className=''>
        <img src={wave} className="h-20 w-full rotate-180 relative -bottom-2" />
        <div className='md:px-40 px-5 bg-gray-900'>
        <h1 className="md:text-5xl text-3xl py-2 font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-[#5E17EB]">
           Algunos de Nuestros Cursos!
          </h1>
        </div>
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-9 md:px-36 bg-gray-900">
          {/* courso #1 */}

          <div className='hover:shadow-2xl hover:shadow-black'>
            <Link to="englishnow">
            <div className=''>
              <img src={englisnow} className='rounded scale-90 hover:scale-100  duration-1000  w-full ' />              
            </div> 
           
            <div className='flex gap-2 items-center p-3'>
              <p className='text-gray-500 font-bold font-poppins text-sm'>5.0 </p>
              <AiFillStar  className='text-yellow-500'/>
            </div>
            <div>
              <p className='text-gray-200 font-bold font-poppins text-sm px-3'>English Now! (Aprende Ingles ya!)</p>
            </div>
            </Link>
          </div>
          {/* curso #2 */}
          <div className='hover:shadow-2xl hover:shadow-black'>
            <Link to="decoracion-de-fiestas">
            <div className=''>
              <img src={decoraciondefiestas} className='rounded scale-90 hover:scale-100  duration-1000 ' />              
            </div> 
           
            <div className='flex gap-2 items-center p-3'>
              <p className='text-gray-500 font-bold font-poppins text-sm'>5.0 </p>
              <AiFillStar  className='text-yellow-500'/>
            </div>
            <div>
              <p className='text-gray-200 font-bold font-poppins text-sm px-3'>Decoración de fiesta, Practico y Evaluativo</p>
            </div>
            </Link>
          </div>
          {/* curso 3 */}
          <div className='hover:shadow-2xl hover:shadow-black'>
            <Link to="de-cero-a-tu-primer-empleo-en-ingles">
            <div className=''>
              <img src={empleoingles} className='rounded scale-90 hover:scale-100  duration-1000 ' />              
            </div> 
           
            <div className='flex gap-2 items-center p-3'>
              <p className='text-gray-500 font-bold font-poppins text-sm'>5.0 </p>
              <AiFillStar  className='text-yellow-500'/>
            </div>
            <div>
              <p className='text-gray-200 font-bold font-poppins text-sm px-3'>De cero a tu Primer Trabajo en Inglés</p>
            </div>
            </Link>
          </div>
          {/* curso 4 */}
          
           

           
          
           

          </div>
         
        </div>
   
  )
}

export default Courses