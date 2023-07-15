import React, {useState} from 'react'
import {IoIosArrowDropdown} from 'react-icons/io'
import {BiRadioCircleMarked} from 'react-icons/bi'



const ContenidoDelCurso = () => {
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
    <div>
      <div className="bg-[#D1000A] p-6 text-center">
        <h1 className="font-poppins text-white font-extrabold text-xl sm:text-4xl">
          CONTENIDO DEL CURSO
        </h1>
      </div>
      <div className="sm:px-72 px-5 py-5 bg-gray-900 ">
        <div className="flex flex-col gap-5">
          {/* #1 */}
          <div
            className="bg-gray-900  cursor-pointer"
            onClick={() => setAcordion1(!acordion1)}
          >
            <div className="py-5 flex justify-between  sm:px-10 px-5 shadow-md shadow-black cursor-pointer">
              <div>
                <p className="font-poppins font-extrabold text-gray-200 sm:text-2xl text-lg ">
                  MODULO 1 - INTRODUCCIÓN
                </p>
                <div
                  className={`${
                    acordion1 ? "sm:h-[70px]" : " invisible h-0"
                  } transition-all ovrflow-y-hidden  sm:text-lg text-md font-poppins  `}
                >
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">Presentacion</p>
                  </div>

                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                      ¿Que vas a lograr?
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <IoIosArrowDropdown
                  className={`${
                    acordion1 ? "rotate-180" : ""
                  } transitions-all duration-300 text-2xl text-gray-200`}
                />
              </div>
            </div>

            <div></div>
          </div>
          {/* #2 */}

          <div
            className="bg-gray-900 cursor-pointer"
            onClick={() => setAcordion2(!acordion2)}
          >
            <div className="py-5 flex justify-between  sm:px-10 px-5 shadow-md shadow-black">
              <div>
                <p className="font-poppins font-bold text-gray-200 sm:text-2xl text-lg">
                  MODULO 2 - GRAMÁTICA Y ESTRUCTURA EN INGLÉS
                </p>
                <div
                  className={`${
                    acordion2 ? "sm:h-[250px]" : "h-0 "
                  } transition-all overflow-y-hidden  sm:text-lg text-md  font-poppins `}
                >
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">Términos gramaticales.</p>
                  </div>

                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    Pronombres y sus usos.
                    </p>
                  </div>
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">Verbo To Be (simplificado).</p>
                  </div>

                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    Tiempos simples.
                    </p>
                  </div>
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">Tiempos progresivos.</p>
                  </div>

                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    Expresa habilidades con los verbos modales.
                    </p>
                  </div>
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">Tener qué (Have to)</p>
                  </div>

                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    Pregunta de información (WH).
                    </p>
                  </div>
                 

                 
                </div>
              </div>
              <div>
                <IoIosArrowDropdown
                  className={` ${
                    acordion2 ? "rotate-180" : ""
                  }  text-2xl  transitions-all duration-300 text-gray-200`}
                />
              </div>
            </div>

            <div></div>
          </div>
          {/* #3 */}
          <div
            className="bg-gray-900  cursor-pointer"
            onClick={() => setAcordion3(!acordion3)}
          >
            <div className="py-5 flex justify-between  sm:px-10 px-5 shadow-md shadow-black cursor-pointer">
              <div>
                <p className="font-poppins font-extrabold text-gray-200 sm:text-2xl text-lg ">
                  MODULO 3 - VOCABULARIO ESPECÍFICO PARA EL TRABAJO
                </p>
                <div
                  className={`${
                    acordion3 ? "sm:h-[50px]" : " invisible h-0"
                  } transition-all ovrflow-y-hidden  sm:text-lg text-md font-poppins  `}
                >
                   <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    Términos y frases.
                    </p>
                  </div>
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                   Números y hora.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <IoIosArrowDropdown
                  className={`${
                    acordion3 ? "rotate-180" : ""
                  } transitions-all duration-300 text-2xl text-gray-200`}
                />
              </div>
            </div>

            <div></div>
          </div>

          {/* #4 */}

          <div
            className="bg-gray-900  cursor-pointer"
            onClick={() => setAcordion4(!acordion4)}
          >
            <div className="py-5 flex justify-between  sm:px-10 px-5 shadow-md shadow-black cursor-pointer">
              <div>
                <p className="font-poppins font-extrabold text-gray-200 sm:text-2xl text-lg ">
                  MODULO 4 - PREPARACIÓN PARA LA BÚSQUEDA DE EMPLEO EN INGLÉS
                </p>
                <div
                  className={`${
                    acordion4 ? "sm:h-[90px]" : " invisible h-0"
                  } transition-all ovrflow-y-hidden  sm:text-lg text-md font-poppins  `}
                >
                 <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    Cómo crear un CV Estadounidense
                    </p>
                  </div>
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    Carta de presentación..
                    </p>
                  </div>
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    Ejemplo de entrevista.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <IoIosArrowDropdown
                  className={`${
                    acordion4 ? "rotate-180" : ""
                  } transitions-all duration-300 text-2xl text-gray-200`}
                />
              </div>
            </div>

            <div></div>
          </div>

          {/* #5 */}
          <div
            className="bg-gray-900  cursor-pointer"
            onClick={() => setAcordion5(!acordion5)}
          >
            <div className="py-5 flex justify-between  sm:px-10 px-5 shadow-md shadow-black cursor-pointer">
              <div>
                <p className="font-poppins font-extrabold text-gray-200 sm:text-2xl text-lg ">
                  MODULO 5 - DESARROLLO DE HABILIDADES DE COMUNICACIÓN EN INGLÉS PROPIAS E INTERCULTURALES
                </p>
                <div
                  className={`${
                    acordion5 ? "sm:h-[50px]" : " invisible h-0"
                  } transition-all ovrflow-y-hidden  sm:text-lg text-md font-poppins  `}
                >
                <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    Saludos, despedidas y pedir disculpas.
                    </p>
                  </div>
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    Aprendiendo a hablar y escuchar en inglés.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <IoIosArrowDropdown
                  className={`${
                    acordion5 ? "rotate-180" : ""
                  } transitions-all duration-300 text-2xl text-gray-200`}
                />
              </div>
            </div>

            <div></div>
          </div>
          {/* #6 */}
          <div
            className="bg-gray-900  cursor-pointer"
            onClick={() => setAcordion6(!acordion6)}
          >
            <div className="py-5 flex justify-between  sm:px-10 px-5 shadow-md shadow-black cursor-pointer">
              <div>
                <p className="font-poppins font-extrabold text-gray-200 sm:text-2xl text-lg ">
                  MODULO 6 - TECNOLOGÍA Y BÚSQUEDA DE EMPLEO
                </p>
                <div
                  className={`${
                    acordion6 ? "sm:h-[20px]" : " invisible h-0"
                  } transition-all ovrflow-y-hidden  sm:text-lg text-md font-poppins  `}
                >
                 <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    Búsqueda de Empleo y optimización de RRHH.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <IoIosArrowDropdown
                  className={`${
                    acordion6 ? "rotate-180" : ""
                  } transitions-all duration-300 text-2xl text-gray-200`}
                />
              </div>
            </div>

            <div></div>
          </div>
          {/* #7 */}
          <div
            className="bg-gray-900  cursor-pointer"
            onClick={() => setAcordion7(!acordion7)}
          >
            <div className="py-5 flex justify-between  sm:px-10 px-5 shadow-md shadow-black cursor-pointer">
              <div>
                <p className="font-poppins font-extrabold text-gray-200 sm:text-2xl text-lg ">
                  MODULO 7 - INGLÉS PARA DIVERSOS SECTORES
                </p>
                <div
                  className={`${
                    acordion7 ? "sm:h-[150px]" : " invisible h-0"
                  } transition-all ovrflow-y-hidden  sm:text-lg text-md font-poppins  `}
                >
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    Frases hotelería y turismo.
                    </p>
                  </div>
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    Frases supermercado.
                    </p>
                  </div>
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    Frases oficina.
                    </p>
                  </div>
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    Frases ventas.
                    </p>
                  </div>
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    Frases trabajo remoto.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <IoIosArrowDropdown
                  className={`${
                    acordion7 ? "rotate-180" : ""
                  } transitions-all duration-300 text-2xl text-gray-200`}
                />
              </div>
            </div>

            <div></div>
          </div>
          {/* #8 */}
          <div
            className="bg-gray-900  cursor-pointer"
            onClick={() => setAcordion8(!acordion8)}
          >
            <div className="py-5 flex justify-between  sm:px-10 px-5 shadow-md shadow-black cursor-pointer">
              <div>
                <p className="font-poppins font-extrabold text-gray-200 sm:text-2xl text-lg ">
                  MODULO 8 - MATERIAL ADICIONAL (BONOS)
                </p>
                <div
                  className={`${
                    acordion8 ? "sm:h-90px]" : " invisible h-0"
                  } transition-all ovrflow-y-hidden  sm:text-lg text-md font-poppins  `}
                >
                 <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    Bono 1: Guía gramática, contextos, ejemplos y más
                    </p>
                  </div>
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    Bono 2: 70 Frases esenciales para triunfar en tu empleo en inglés.
                    </p>
                  </div>
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    Bono 3: CV Formato canadiense.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <IoIosArrowDropdown
                  className={`${
                    acordion8 ? "rotate-180" : ""
                  } transitions-all duration-300 text-2xl text-gray-200`}
                />
              </div>
            </div>

            <div></div>
          </div>
          {/* #9 */}
          <div
            className="bg-gray-900  cursor-pointer"
            onClick={() => setAcordion9(!acordion9)}
          >
            <div className="py-5 flex justify-between  sm:px-10 px-5 shadow-md shadow-black cursor-pointer">
              <div>
                <p className="font-poppins font-extrabold text-gray-200 sm:text-2xl text-lg ">
                  MODULO 9 - VIDEO RESPUESTAS
                </p>
                <div
                  className={`${
                    acordion9 ? "sm:h-[320px]" : " invisible h-0"
                  } transition-all ovrflow-y-hidden  sm:text-lg text-md font-poppins  `}
                >
                   <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    ¿Estaré Sólo?
                    </p>
                  </div>
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    ¿Cómo formar plurales?
                    </p>
                  </div>
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    Bono 3: CV Formato canadiense.
                    </p>
                  </div>
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    Diferencias entre inglés americano y británico                    </p>
                  </div>
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    ¿Cómo tener un inglés perfecto?                    </p>
                  </div>
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    ¿Cómo mejorar mi fluidez?
                    </p>
                  </div>
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    ¿Cómo saber si las preposiciones están colocadas de la forma correcta?                    </p>
                  </div>
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    ¿Cómo mejorar mi listening?
                    </p>
                  </div>
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    ¿Qué es lo más importante de la gramática?
                    </p>
                  </div>
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    ¿Cómo mejorar mi speaking?
                    </p>
                  </div>
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    ¿Cómo mejorar mi pronunciación?
                    </p>
                  </div>
                  <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    ¿Cómo expandir mi vocabulario?.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <IoIosArrowDropdown
                  className={`${
                    acordion9 ? "rotate-180" : ""
                  } transitions-all duration-300 text-2xl text-gray-200`}
                />
              </div>
            </div>

            <div></div>
          </div>
          {/* #10 */}
          <div
            className="bg-gray-900  cursor-pointer"
            onClick={() => setAcordion10(!acordion10)}
          >
            <div className="py-5 flex justify-between  sm:px-10 px-5 shadow-md shadow-black cursor-pointer">
              <div>
                <p className="font-poppins font-extrabold text-gray-200 sm:text-2xl text-lg ">
                  MODULO 10 - ¿CÓMO OBTENER TU CERTIFICADO?
                </p>
                <div
                  className={`${
                    acordion10 ? "sm:h-[20px]" : " invisible h-0"
                  } transition-all ovrflow-y-hidden  sm:text-lg text-md font-poppins  `}
                >
                 <div className="flex gap-2 justify-start items-center ">
                    <div>
                      <BiRadioCircleMarked className="text-green-600" />{" "}
                    </div>
                    <p className=" font-poppins text-gray-200">
                    ¿Cómo obtener tu certificado?
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <IoIosArrowDropdown
                  className={`${
                    acordion10 ? "rotate-180" : ""
                  } transitions-all duration-300 text-2xl text-gray-200`}
                />
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContenidoDelCurso