import React from 'react'
import cindy from '../../../assets/englisnow/cindy.webp'
import wavegris from '../../../assets/wavegris.svg'
import {TiTimes} from 'react-icons/ti'
import wavemorado from '../../../assets/wavemorado.png'

const Cindy = () => {
  return (
    <div>
      <img src={wavegris} />
      <div className="bg-gray-200 justify-center flex flex-col text-center sm:px-36 gap-3">
        <h1 className="sm:text-6xl text-3xl  font-bold text-gray-900 mb-10">
          Tu puedes alcanzar la fluidez del inglés desde tu hogar y en linea
        </h1>
        <p className="text-2xl font-bold font-poppins text-[#D1000A] mb-10">
          ¿Como puedes lograrlo?
        </p>

        <p className="font-poppins sm:text-3xl text-lg pb-5 md:px-36">
          Con nuestra metodología de formacion{" "}
          <strong className="bg-yellow-500 rounded-full md:px-5 ">
            enfocada en resultados
          </strong>
        </p>

        <div className="lg:px-60 px-5 px pb-10">
          <p className="text-green-900 lg:text-4xl text-2xl bg-cian lg:py-10 py-5 rounded-lg shadow-xl border-2   border-dashed border-green-700 font-poppins">
            y <strong>si,</strong> te va servir aunque...{" "}
          </p>
        </div>
        <div>
          <div className="lg:px-60 px-2 flex  flex-col gap-5 pb-16">
            <div className="flex  items-center  ">
              <TiTimes className="text-4xl text-redventa" />
              <p className="font-poppins md:text-2xl">
                Estes trabajando un sin fin de horas
              </p>
            </div>
            <div className="flex items-center ">
              <TiTimes className="text-4xl text-redventa" />
              <p className="font-poppins md:text-2xl ">
                Pienses que el inglés no es lo tuyo
              </p>
            </div>
            <div className="flex items-center   ">
              <TiTimes className="text-4xl text-redventa" />
              <p className="font-poppins md:text-2xl ">
                Tu nivel de inglés sea muy basico
              </p>
            </div>
            <div className="flex items-center   ">
              <TiTimes className="text-4xl text-redventa" />
              <p className="font-poppins md:text-2xl  ">
                Tu nivel de inglés sea muy avanzado{" "}
              </p>
            </div>
            
            
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Cindy