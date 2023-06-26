import React, {useState} from 'react'
import {IoIosArrowDropdown} from 'react-icons/io'


const Preguntas = () => {
  const [acordion1, setAcordion1] = useState(false) 
  const [acordion2, setAcordion2] = useState(false)
  const [acordion3, setAcordion3] = useState(false)
  const [acordion4, setAcordion4] = useState(false)
  const [acordion5, setAcordion5] = useState(false)
 


 

  return (
    <div className="sm:px-72 px-5 ">
      <p className="text-center p-10 font-poppins font-extrabold sm:text-5xl text-3xl text-gray-900">
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
                ¿Esta capacitación es presencial?
              </p>
              <p
                className={`${
                  acordion1 ? "sm:h-[150px]" : " invisible h-0"
                } transition-all ovrflow-y-hidden  sm:text-lg text-md font-poppins `}
              >
                No, esta capacitación es 100% en línea. Lo hemos diseñado así
                para que tengas la ventaja de acceder desde y donde quieras.
                Recuerda que tendrás acompañamiento tanto en la plataforma y te
                resolveremos todas tus dudas. Además podrás participar en
                actividades extra con todos los estudiantes.
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
                ¿No tengo conocimientos en Inglés, igual puedo aprender desde
                cero?
              </p>
              <p
                className={`${
                  acordion2 ? "sm:h-[90px]" : "h-0 "
                } transition-all overflow-y-hidden  sm:text-lg text-md  font-poppins `}
              >
                Claro el programa está diseñado para iniciar desde lo más básico
                a lo más avanzado.
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
                ¿Cómo accedo a la capacitación?
              </p>
              <p
                className={`${
                  acordion3 ? "sm:h-[90px]" : "h-0 "
                } transition-all overflow-y-hidden  sm:text-lg text-md  font-poppins `}
              >
                Una vez que realizas tu pago, se te enviará un correo
                electrónico con un enlace donde podrás acceder inmediatamente.s.
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
                ¿Cuándo inician las clases?
              </p>
              <p
                className={`${
                  acordion4 ? "sm:h-[90px]" : "h-0 "
                } transition-all overflow-y-hidden sm:text-lg text-md  font-poppins  `}
              >
                Al ser una capacitación con videoclases grabadas podrás acceder
                cuando quieras, e ir avanzando a tu propio ritmo.
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
                ¿Cómo funciona la garantía?
              </p>
              <p
                className={`${
                  acordion5 ? "sm:h-[90px]" : "h-0 "
                } transition-all overflow-y-hidden sm:text-lg text-md  font-poppins `}
              >
                Sabemos que nuestra capacitación es de calidad, y si por alguna
                razón deseas que se te reintegre el dinero, simplemente en tu
                cuenta de Hotmart pides el reembolso y se te tramitará sin
                ninguna pregunta.
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
      </div>
      <p className='pt-20 sm:text-xl text-lg pb-5 text-gray-900 font-poppins '>
        Copyright © 2023 Learning Plus | Curso English Now (Inglés ya!) . |Todos
        los derechos reservados Este sitio no forma parte del sitio de Facebook
        o Facebook Inc. Además, este sitio NO está respaldado por Facebook de
        ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.{" "}
      </p>
    </div>
  );
}

export default Preguntas