import React from 'react'
import live from '../../../assets/metodo3en9/live.png'
import practi from '../../../assets/metodo3en9/practi.png'
import diplo from '../../../assets/metodo3en9/diplo.png'
import wavemorado from '../../../assets/wavemorado.png'
import hotlink from './Hotlink'

const Metodologia = () => {
  return (
    <>
      <div className="bg-moradovivo">
        <h1 className="lg:text-5xl text-gray-200 lg:px-60 px-5 text-center font-poppins  py-10 font-bold">
          Nuestra metodología de formacion basada en tres pilares
        </h1>
        {/* 1 */}
        <div className="lg:px-60 px-5 flex lg:flex-row flex-col justify-center items-center py-10">
          <div>
            <img src={live} className="w-72" />
          </div>
          <div className="w-11/12  gap-5">
            <p className="text-5xl font-poppins font-bold text-cian text-center lg:text-start">
              01
            </p>
            <p className="text-3xl  font-bold text-gray-200 font-poppins">
              ACOMPAÑAMIENTO EN VIVO
            </p>
            <p className="font-poppins text-gray-200 text-xl">
              Todo el contenido se imparte en directo y en mentorías grupales
              (Coaching calls) donde te llevamos de la mano paso a paso para que
              alcances la fluidez del Inglés en solo 9 meses.
            </p>
          </div>
        </div>
        {/* 2 */}

        <div className="lg:px-60 px-5 flex lg:flex-row flex-col justify-center items-center py-10">
          <div>
            <img src={practi} className="w-72" />
          </div>
          <div className="w-11/12  gap-5">
            <p className="text-5xl font-poppins font-bold text-cian lg:text-start text-center">
              02
            </p>
            <p className="text-3xl font-bold text-gray-200 font-poppins ">
              EJERCICIOS PRÁCTICOS
            </p>
            <p className="font-poppins text-gray-200 text-xl">
              Después de cada sesión podrás aterrizar los conceptos aprendidos y
              ponerlos en práctica mediante el cumplimiento de las misiones
              diarias.
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="lg:px-60 px-5 flex lg:flex-row flex-col justify-center items-center py-10">
          <div>
            <img src={diplo} className="w-72" />
          </div>
          <div className="w-11/12  gap-5">
            <p className="text-5xl font-poppins font-bold text-cian lg:text-start text-center">
              03
            </p>
            <p className="text-3xl font-bold text-gray-200 font-poppins">
              PROFESORES EXPERTOS
            </p>
            <p className="font-poppins text-gray-200 text-xl">
              Tus instructores llevan más de 30 años de experiencia en conjunto.
            </p>
          </div>
        </div>

        <div className="flex justify-center py-10">
          <button
            className="bg-redventa hover:animate-bounce duration-[3000] text-gray-200 py-2 font-bold  rounded-full px-5  text-xl lg:text-3xl hover:bg-yellow-500 hover:text-gray-900 shadow-sm shadow-gray-700"
            onClick={hotlink}
          >
            Quiero Aprender con este Metodo!{" "}
          </button>
        </div>

        <h1 className="lg:text-5xl text-3xl text-gray-200 lg:px-36 px-5 text-center font-poppins  py-10 font-bold">
          Si quieres llegar lejos ve acompañado.
        </h1>
        <p className="font-poppins text-gray-200 text-xl lg:px-36 px-5 text-center ">
          Sumérgete en el poder del colectivo y abraza la sabiduría que surge de
          la colaboración.
        </p>
        {/* 1 */}
        <div className="flex lg:flex-row flex-col  lg:px-36 lg:gap-20 py-10 ">
          <div className="flex justify-center">
            <img
              src="https://rebelionbilingue.com/wp-content/uploads/2023/03/11.-COMUNIDAD-1-768x407.png"
              className=""
            />
          </div>

          <div className="flex flex-col gap-10 lg:w-4/6">
            <h1 className="text-cian font-poppins   lg:text-start text-center text-3xl font-bold ">
              Comunidad
            </h1>
            <p className="font-poppins text-xl px-5 text-gray-200">
              Rodéate de personas que, como tú, requieren aprender Inglés de una
              manera eficaz. Interactúa, resuelve tus dudas, y comparte tus
              éxitos con ellos.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="flex lg:flex-row flex-col  lg:px-36 pb-20   ">
          <div className=" justify-center lg:hidden flex">
            <img
              src="https://rebelionbilingue.com/wp-content/uploads/2023/03/12.-ACOMPANAMIENTO-1024x594.png"
              className=""
            />
          </div>
          <div className="flex flex-col gap-10 lg:w-4/6">
            <h1 className="text-cian font-poppins   lg:text-start text-center text-3xl font-bold ">
              Acompañamiento
            </h1>

            <p className="font-poppins text-xl px-5 text-gray-200">
              Sesiones en vivo todas las semanas con nuestros instructores de
              Inglés, en estas sesiones podrás interactuar con el instructor y
              resolver tus dudas.
            </p>
            <ul className="font-poppins text-xl px-5">
              <li className="flex items-center font-bold text-gray-200">
                {" "}
                Para que ninguna duda te pare.
              </li>
            </ul>
          </div>
          <div className=" justify-center lg:block hidden">
            <img
              src="https://rebelionbilingue.com/wp-content/uploads/2023/03/12.-ACOMPANAMIENTO-1024x594.png"
              className=""
            />
          </div>
        </div>
      </div>

      <img src={wavemorado} className="rotate-180 h-10 w-full" />
    </>
  );
}

export default Metodologia