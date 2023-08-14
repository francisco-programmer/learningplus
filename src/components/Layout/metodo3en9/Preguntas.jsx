import React, {useState} from 'react'
import {IoIosArrowDropdown} from 'react-icons/io'
import {BsWhatsapp} from 'react-icons/bs'


const Preguntas = () => {
  const [acordion1, setAcordion1] = useState(false) 
  const [acordion2, setAcordion2] = useState(false)
  const [acordion3, setAcordion3] = useState(false)
  const [acordion4, setAcordion4] = useState(false)
  const [acordion5, setAcordion5] = useState(false)
  const [acordion6, setAcordion6] = useState(false) 
  const [acordion7, setAcordion7] = useState(false)
  const [acordion8, setAcordion8] = useState(false)
  const [acordion9, setAcordion9] = useState(false)
  const [acordion10, setAcordion10] = useState(false)
 


 

  return (
    <div className="sm:px-72 px-5 ">
      <p className="text-center p-10 font-poppins font-extrabold sm:text-5xl text-3xl text-gray-200">
        Preguntas más frecuentes
      </p>
      <div className="flex flex-col gap-5">
        {/* #1 */}
        <div
          className="bg-gray-200 cursor pointer"
          onClick={() => setAcordion1(!acordion1)}
        >
          <div className="py-5 flex justify-between  sm:px-10 px-5 shadow-md hover:shadow-gray-900 cursor-pointer">
            <div>
              <p className="font-poppins font-extrabold text-gray-900 sm:text-2xl text-lg">
              NO HABLO NADA DE INGLÉS, PERO REALMENTE QUIERO APRENDER. ¿ESTE MÉTODO ME SIRVE?
              </p>
              <p
                className={`${
                  acordion1 ? "sm:h-[150px]" : " invisible h-0"
                } transition-all ovrflow-y-hidden  sm:text-lg text-md font-poppins `}
              >
               El método 3 en 9 fue desarrollado para cualquier persona en cualquier nivel de inglés, contamos con clases muy básicas y también con clases avanzadas, si tu nivel de inglés es cero este método es ideal para ti. Si ya tienes conocimientos básicos de igual forma este programa te va ayudar a mejorar mucho más.
              </p>
            </div>
            <div>
              <IoIosArrowDropdown
                className={`${
                  acordion1 ? "rotate-180" : ""
                } transitions-all duration-300 text-2xl`}
              />
            </div>
          </div>

          <div></div>
        </div>
        {/* #2 */}

        <div
          className="bg-gray-200 cursor-pointer"
          onClick={() => setAcordion2(!acordion2)}
        >
          <div className="py-5 flex justify-between  sm:px-10 px-5 shadow-md hover:shadow-gray-900">
            <div>
              <p className="font-poppins font-bold text-gray-900 sm:text-2xl text-lg">
              ¿CUÁNTAS VECES PUEDO ASISTIR A CLASES?
              </p>
              <p
                className={`${
                  acordion2 ? "sm:h-[90px]" : "h-0 "
                } transition-all overflow-y-hidden  sm:text-lg text-md  font-poppins `}
              >
                Todas las veces que necesites asistir, no hay límite en las clases a las que asistas.
              </p>
            </div>
            <div>
              <IoIosArrowDropdown
                className={` ${
                  acordion2 ? "rotate-180" : ""
                }  text-2xl  transitions-all duration-300`}
              />
            </div>
          </div>

          <div></div>
        </div>
        {/* #3 */}
        <div
          className="bg-gray-200 cursor-pointer "
          onClick={() => setAcordion3(!acordion3)}
        >
          <div className="py-5 flex justify-between  sm:px-10 px-5 shadow-md hover:shadow-gray-900">
            <div>
              <p className="font-poppins font-bold text-gray-900 sm:text-2xl text-lg">
              ¿DÓNDE ACCEDO A LAS CLASES?
              </p>
              <p
                className={`${
                  acordion3 ? "sm:h-[90px]" : "h-0 "
                } transition-all overflow-y-hidden  sm:text-lg text-md  font-poppins `}
              >
               El programa educativo está alojado en la plataforma de estudio de Hotmart, después de realizar la compra recibirás en tu correo electrónico un enlace para ingresar a la plataforma, donde podrás crear tu contraseña y acceder de inmediato.
              </p>
            </div>
            <div>
              <IoIosArrowDropdown
                className={` ${
                  acordion3 ? "rotate-180" : ""
                }  text-2xl  transitions-all duration-300`}
              />
            </div>
          </div>
        </div>

        {/* #4 */}
        <div
          className="bg-gray-200 cursor-pointer"
          onClick={() => setAcordion4(!acordion4)}
        >
          <div className="py-5 flex justify-between  sm:px-10 px-5 shadow-md hover:shadow-gray-900">
            <div>
              <p className="font-poppins font-bold text-gray-900 sm:text-2xl text-lg">
              ¿CÓMO ACCEDO A LAS CLASES EN VIVO?
              </p>
              <p
                className={`${
                  acordion4 ? "sm:h-[90px]" : "h-0 "
                } transition-all overflow-y-hidden sm:text-lg text-md  font-poppins  `}
              >
             Dentro de tu plataforma educativa encontrarás un módulo exclusivo para las clases en vivo, donde se publica el link para que puedas ingresar a las clases privadas.
              </p>
            </div>
            <div>
              <IoIosArrowDropdown
                className={` ${
                  acordion4 ? "rotate-180" : ""
                }  text-2xl  transitions-all duration-300`}
              />
            </div>
          </div>
        </div>
        {/* #5 */}
        <div className="bg-gray-200 " onClick={() => setAcordion5(!acordion5)}>
          <div className="py-5 flex justify-between  sm:px-10 px-5 shadow-md hover:shadow-gray-900">
            <div>
              <p className="font-poppins font-bold text-gray-900 sm:text-2xl text-lg">
              ¿TENGO QUE PAGAR MENSUALIDADES?
              </p>
              <p
                className={`${
                  acordion5 ? "sm:h-[90px]" : "h-0 "
                } transition-all overflow-y-hidden sm:text-lg text-md  font-poppins `}
              >
                NO, no tienes que pagar mensualidades. El pago que vas a realizar es un único pago de $250 dólares con acceso al curso y con clases en vivo por 12 Meses. 
              </p>
            </div>
            <div>
              <IoIosArrowDropdown
                className={` ${
                  acordion5 ? "rotate-180" : ""
                }  text-2xl  transitions-all duration-300`}
              />
            </div>
          </div>
        </div>
        {/* #6 */}
        <div className="bg-gray-200 " onClick={() => setAcordion6(!acordion6)}>
          <div className="py-5 flex justify-between  sm:px-10 px-5 shadow-md hover:shadow-gray-900">
            <div>
              <p className="font-poppins font-bold text-gray-900 sm:text-2xl text-lg">
              ¿TENDRÉ CLASES EN VIVO?
              </p>
              <p
                className={`${
                  acordion6 ? "sm:h-[90px]" : "h-0 "
                } transition-all overflow-y-hidden sm:text-lg text-md  font-poppins `}
              >
Sí, tendrás clases en vivo todos los días lunes, miércoles y viernes con profesionales expertos en la enseñanza del idioma que te ayudarán en tu proceso de aprendizaje.              </p>
            </div>
            <div>
              <IoIosArrowDropdown
                className={` ${
                  acordion6 ? "rotate-180" : ""
                }  text-2xl  transitions-all duration-300`}
              />
            </div>
          </div>
        </div>
        {/* #7 */}
        <div className="bg-gray-200 " onClick={() => setAcordion7(!acordion7)}>
          <div className="py-5 flex justify-between  sm:px-10 px-5 shadow-md hover:shadow-gray-900">
            <div>
              <p className="font-poppins font-bold text-gray-900 sm:text-2xl text-lg">
              ¿CUÁNTO DURA EL CURSO?
              </p>
              <p
                className={`${
                  acordion7 ? "sm:h-[90px]" : "h-0 "
                } transition-all overflow-y-hidden sm:text-lg text-md  font-poppins `}
              >
Nuestro método inmersivo 3 en 9 está diseñado para que lo culmines en 9 Meses, sin embargo, tendrás acceso al curso por 12 Meses para que puedas reforzar tus conocimientos y perfeccionar tus habilidades lingüisticas.               </p>
            </div>
            <div>
              <IoIosArrowDropdown
                className={` ${
                  acordion7 ? "rotate-180" : ""
                }  text-2xl  transitions-all duration-300`}
              />
            </div>
          </div>
        </div>
        {/* #8 */}
        <div className="bg-gray-200 " onClick={() => setAcordion8(!acordion8)}>
          <div className="py-5 flex justify-between  sm:px-10 px-5 shadow-md hover:shadow-gray-900">
            <div>
              <p className="font-poppins font-bold text-gray-900 sm:text-2xl text-lg">
              ¿QUÉ PASA SI TENGO PREGUNTAS DURANTE EL CURSO?
              </p>
              <p
                className={`${
                  acordion8 ? "sm:h-[90px]" : "h-0 "
                } transition-all overflow-y-hidden sm:text-lg text-md  font-poppins `}
              >
Puedes hacer todas tus preguntas en la sección de comentarios y nuestros docentes calificados te responderán en la mayor brevedad posible. También puedes llevar tus dudas a las clases en vivo.              </p>
            </div>
            <div>
              <IoIosArrowDropdown
                className={` ${
                  acordion8 ? "rotate-180" : ""
                }  text-2xl  transitions-all duration-300`}
              />
            </div>
          </div>
        </div>
        {/* #9 */}
        <div className="bg-gray-200 " onClick={() => setAcordion9(!acordion9)}>
          <div className="py-5 flex justify-between  sm:px-10 px-5 shadow-md hover:shadow-gray-900">
            <div>
              <p className="font-poppins font-bold text-gray-900 sm:text-2xl text-lg">
              ¿EL PROGRAMA TIENE UN CERTIFICADO?
              </p>
              <p
                className={`${
                  acordion9 ? "sm:h-[90px]" : "h-0 "
                } transition-all overflow-y-hidden sm:text-lg text-md  font-poppins `}
              >
Sí, al finalizar todo el programa Método Inmersivo 3 en 9 podrás solicitar tu Certificado de Finalización del Curso desde tu plataforma educativa.              </p>
            </div>
            <div>
              <IoIosArrowDropdown
                className={` ${
                  acordion9 ? "rotate-180" : ""
                }  text-2xl  transitions-all duration-300`}
              />
            </div>
          </div>
        </div>
        {/* #10 */}
        <div className="bg-gray-200 " onClick={() => setAcordion10(!acordion10)}>
          <div className="py-5 flex justify-between  sm:px-10 px-5 shadow-md hover:shadow-gray-900">
            <div>
              <p className="font-poppins font-bold text-gray-900 sm:text-2xl text-lg">
              SOY NIVEL INTERMEDIO-AVANZADO ¿ESTE CURSO ME SIRVE?
              </p>
              <p
                className={`${
                  acordion10 ? "sm:h-[90px]" : "h-0 "
                } transition-all overflow-y-hidden sm:text-lg text-md  font-poppins `}
              >
Sí, este curso te sirve para reforzar tus conocimientos y practicar tu Speaking mediante nuestro Club Privado con estudiantes en Nivel Intermedio-Avanzado.              </p>
            </div>
            <div>
              <IoIosArrowDropdown
                className={` ${
                  acordion10 ? "rotate-180" : ""
                }  text-2xl  transitions-all duration-300`}
              />
            </div>
          </div>
        </div>
      </div>
                <p className='font-poppins font-bold  text-center lg:text-5xl text-yellow-500 text-3xl py-10' >¿Necesitas ayuda para inscribirte? Escribenos...</p>
<div>
  <button className='bg-[#09C800] text-white font-bold rounded-lg text-3xl p-5 flex items-center' onClick={() => window.open('https://wa.link/u3razr', '')}><div><BsWhatsapp/></div>¡Toca aqui  para contactar soporte  por Whatsapp!</button>
</div>
      <p className='pt-20 sm:text-xl text-lg pb-5 text-gray-200 font-poppins '>
        Copyright © 2023 Learning Plus | Desafio Bilingue Metodo 3 en 9 . |Todos
        los derechos reservados Este sitio no forma parte del sitio de Facebook
        o Facebook Inc. Además, este sitio NO está respaldado por Facebook de
        ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.{" "}
      </p>
    </div>
  );
}

export default Preguntas