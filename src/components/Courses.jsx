import React from 'react'
import wave from '../assets/wave.png'
import englisnow from '../assets/englisnow/pre.webp'
import {AiFillStar} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Courses = () => {
  return (
    <div className=''>
        <img src={wave} className="h-20 w-full rotate-180" />
        <div className='px-40 bg-gray-900'>
        <h1 className="text-5xl py-2 font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-[#5E17EB]">
           Algunos de Nuestros Cursos!
          </h1>
        </div>
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-9 px-36 bg-gray-900">
          {/* courso #1 */}

          <div className='hover:shadow-2xl hover:shadow-black'>
            <Link to="englishnow">
            <div className=' '>
              <img src={englisnow} className='rounded scale-90 hover:scale-100  duration-1000' />              
            </div> 
           
            <div className='flex gap-2 items-center p-3'>
              <p className='text-gray-500 font-bold font-poppins text-sm'>5.0 </p>
              <AiFillStar  className='text-yellow-500'/>
            </div>
            <div>
              <p className='text-gray-200 font-bold font-poppins text-sm'>English Now! (Aprende Ingles ya!)</p>
            </div>
            </Link>
          </div>
          {/* curso #2 */}
          <div className='hover:shadow-2xl hover:shadow-black'>
            <div className=' '>
              <img src={englisnow} className='rounded scale-90 hover:scale-100  duration-1000' />              
            </div> 
           
            <div className='flex gap-2 items-center p-3'>
              <p className='text-gray-500 font-bold font-poppins text-sm'>5.0 </p>
              <AiFillStar  className='text-yellow-500'/>
            </div>
            <div>
              <p className='text-gray-200 font-bold font-poppins text-sm'>Descubre cómo hacer crecer tu negocio en Estados Unidos"</p>
            </div>
             
          </div>
          
          
           

           
          
           

          </div>
         
        </div>
   
  )
}

export default Courses