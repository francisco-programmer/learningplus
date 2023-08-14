import React from 'react'
import {FaCheck} from 'react-icons/fa'
import {BsFillCartCheckFill} from 'react-icons/bs'
import hotlink from './Hotlink'
import comprar from '../../../assets/comprar.png'
const Bonos = () => {
  return (
    <div>
      <p className="lg:px-36 text-3xl lg:text-5xl text-redventa font-poppins text-center">
        {" "}
        Y para terminar de llevar{" "}
        <strong>Tu fluidez del inglés máximo nivel..</strong>
      </p>
      <p className="lg:px-36 px-35 py-5 text-xl text-gray-900 font-poppins text-center">
        Queremos asegurarnos que tienes todo lo que necesitarás para alcanzar la
        fluidez del inglés en 9 meses, por eso al inscribirte{" "}
        <strong>AHORA</strong> en el programa, recibirás{" "}
        <strong>¡GRATIS!</strong> estos bonus:
      </p>
      {/* bono 1 */}
      <div className="lg:px-36 mb-2">
        <div className="bg-gray-200 p-5 border-4 border-redventa rounded-xl">
          <p className="bg-redventa text-center text-gray-200 font-poppins font-bold py-4 text-3xl">
            BONUS #1
          </p>

          <div className="grid lg:grid-cols-2  grid-cols-1 lg:p-5">
            <div className="flex flex-col gap-4">
              <p className="text-moradovivo lg:text-3xl text-xl font-poppins font-bold">
                Acceso al "International training english exam"{" "}
              </p>
              <p className="text-xl font-poppins font-bold text-gray-900">
                Un formación que te permitirá:
              </p>
              <div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Desarrollar habilidades del inglés para presentar el
                      examen del IELTS.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Aumentar las oportunidades de obtener un empleo en el
                      exterior.{" "}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Obtener un certificado de nivel valido en +115 paises.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Aumentar el valor percibido para las empresas e
                      incrementar tus oportunidades de obtener un empleo en el
                      extranjero.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <img
                src="https://rebelionbilingue.com/wp-content/uploads/2022/11/5-INTERNATIONAL-TRAINING-240x300.png"
                className="w-60"
              />
              <p className="font-poppins text-3xl">PRECIO</p>
              <p className="font-poppins text-redventa font-bold  text-3xl line-through ">
                $149 USD{" "}
              </p>
              <p className="font-poppins text-2xl text-center lg:p-0 p-5" >
                Al ser parte del "Método 3 en 9", lo tienes{" "}
                <strong>¡GRATIS!</strong>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* bono 2 */}
      <div className="lg:px-36 mb-2">
        <div className="bg-gray-200 p-5 border-4 border-redventa rounded-xl">
          <p className="bg-redventa text-center text-gray-200 font-poppins font-bold py-4 text-3xl">
            BONUS #2
          </p>

          <div className="grid lg:grid-cols-2  grid-cols-1 lg:p-5">
            <div className="flex flex-col gap-4">
              <p className="text-moradovivo lg:text-3xl text-xl font-poppins font-bold">
                Acceso al "Fifty days challenge"
              </p>
              <p className="text-xl font-poppins font-bold text-gray-900">
                Un reto de 50 días que te permitirá:
              </p>
              <div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Aprender las 1000 palabras mas importantes en el inglés.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Entender textos y frases coloquiales en inglés.{" "}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Capacidad de crear diálogos de manera superficial: como
                      resultado de la adquisición de nuevas palabras y frases.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Creara el habito de estudio del inglés, esto es realmente
                      lo mas dificil, este "challenge" te permitira crear el
                      habito de una vez por todas.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <img
                src="https://rebelionbilingue.com/wp-content/uploads/2022/11/4-FIFTY-DAYS-CHALLENGE-231x300.png"
                className="w-60"
              />
              <p className="font-poppins text-3xl">PRECIO</p>
              <p className="font-poppins text-redventa font-bold  text-3xl line-through ">
                $79 USD{" "}
              </p>
              <p className="font-poppins text-2xl text-center">
                Al ser parte del "Método 3 en 9", lo tienes{" "}
                <strong>¡GRATIS!</strong>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* bono 3 */}
      <div className="lg:px-36 mb-2">
        <div className="bg-gray-200 p-5 border-4 border-redventa rounded-xl">
          <p className="bg-redventa text-center text-gray-200 font-poppins font-bold py-4 text-3xl">
            BONUS #3
          </p>

          <div className="grid lg:grid-cols-2  grid-cols-1 lg:p-5">
            <div className="flex flex-col gap-4">
              <p className="text-moradovivo lg:text-3xl text-xl font-poppins font-bold">
                Acceso al "Job Interview Workshop"
              </p>
              <p className="text-xl font-poppins font-bold text-gray-900">
                Un formación que te permitirá:
              </p>
              <div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Conocer las preguntas mas frecuentes en una entrevista de
                      trabajo.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Crear respuestas optimas y que impacten al entrevistador.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Aprender la mejor técnica para cerrar una entrevista de
                      trabajo.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Causar una excelente primera impresión gracias a tu
                      excelente Inglés.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <img
                src="https://rebelionbilingue.com/wp-content/uploads/2022/11/6-JOB-INTERVIEW-WORKSHOP-247x300.png"
                className="w-60"
              />
              <p className="font-poppins text-3xl">PRECIO</p>
              <p className="font-poppins text-redventa font-bold  text-3xl line-through ">
                $135 USD{" "}
              </p>
              <p className="font-poppins text-2xl text-center">
                Al ser parte del "Método 3 en 9", lo tienes{" "}
                <strong>¡GRATIS!</strong>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* bono 4 */}
      <div className="lg:px-36 mb-2">
        <div className="bg-gray-200 p-5 border-4 border-redventa rounded-xl">
          <p className="bg-redventa text-center text-gray-200 font-poppins font-bold py-4 text-3xl">
            BONUS #4
          </p>

          <div className="grid lg:grid-cols-2  grid-cols-1 lg:p-5">
            <div className="flex flex-col gap-4">
              <p className="text-moradovivo lg:text-3xl text-xl font-poppins font-bold">
                Acceso al "Plan de Mineria avazanda"
              </p>
              <p className="text-xl font-poppins font-bold text-gray-900">
                Un formación que te permitirá:
              </p>
              <div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Crear el habito de lectura desde un punto critico y
                      analítico.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Incrementar tu vocabulario, podrás aprender nuevas
                      palabras y expresiones que te ayudarán a comunicarte de
                      manera más efectiva
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      La creación de frases basadas en palabras desconocidas
                      también te ayudará a incrementar tu capacidad de respuesta
                      en inglés.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <img
                src="https://rebelionbilingue.com/wp-content/uploads/2022/11/3-PLAN-DE-MINERIA-AVANZADA-245x300.png"
                className="w-60"
              />
              <p className="font-poppins text-3xl">PRECIO</p>
              <p className="font-poppins text-redventa font-bold  text-3xl line-through ">
                $350 USD{" "}
              </p>
              <p className="font-poppins text-2xl text-center">
                Al ser parte del "Método 3 en 9", lo tienes{" "}
                <strong>¡GRATIS!</strong>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* bono 5 */}
      <div className="lg:px-36 mb-2">
        <div className="bg-gray-200 p-5 border-4 border-redventa rounded-xl">
          <p className="bg-redventa text-center text-gray-200 font-poppins font-bold py-4 text-3xl">
            BONUS #5
          </p>

          <div className="grid lg:grid-cols-2  grid-cols-1 lg:p-5">
            <div className="flex flex-col gap-4">
              <p className="text-moradovivo lg:text-3xl text-xl font-poppins font-bold">
                Acceso al programa online "Drive listening de cero a pro"
              </p>
              <p className="text-xl font-poppins font-bold text-gray-900">
                Un formación que te permitirá:
              </p>
              <div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Mejorar tu habilidad de escucha en Inglés.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Desarrollar redes neuronales que te permitira identificar
                      palabras y frases en conversaciones.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Conocer frases y dichos populares en el idiomas inglés.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Mejorar tu "listening" a una velocidad 4 veces superior a
                      los métodos tradicionales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <img
                src="https://rebelionbilingue.com/wp-content/uploads/2022/11/2-DRIVE-LISTENING-DE-0-A-PRO-243x300.png"
                className="w-60"
              />
              <p className="font-poppins text-3xl">PRECIO</p>
              <p className="font-poppins text-redventa font-bold  text-3xl line-through ">
                $450 USD{" "}
              </p>
              <p className="font-poppins text-2xl text-center">
                Al ser parte del "Método 3 en 9", lo tienes{" "}
                <strong>¡GRATIS!</strong>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* bono 6 */}
      <div className="lg:px-36 mb-2">
        <div className="bg-gray-200 lg:p-5 border-4 border-redventa rounded-xl">
          <p className="bg-redventa text-center text-gray-200 font-poppins font-bold py-4 text-3xl">
            BONUS #6
          </p>

          <div className="grid lg:grid-cols-2  grid-cols-1 p-5">
            <div className="flex flex-col gap-4">
              <p className="text-moradovivo lg:text-3xl text-xl font-poppins font-bold">
                Acceso al "Gestor Educativo
              </p>
              <p className="text-xl font-poppins font-bold text-gray-900">
                Un bonus especial que te permitirá:
              </p>
              <div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Tener una persona que te guiara y no permitirá que te
                      rindas en el proceso.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Resolver todas las dudas respecto a las sesiones en vivo y
                      la plataforma educativa.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Aprendizaje efectivo: En general, tener acceso a una
                      persona de nuestro equipo de trabajo puede contribuir a un
                      aprendizaje más efectivo y completo, al contar con una
                      guía y apoyo personalizados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <img
                src="https://rebelionbilingue.com/wp-content/uploads/2022/11/7-GESTOR-EDUCATIVO-222x300.png"
                className="w-60"
              />
              <p className="font-poppins text-3xl">PRECIO</p>
              <p className="font-poppins text-redventa font-bold  text-3xl line-through ">
                $1,100 USD{" "}
              </p>
              <p className="font-poppins text-2xl text-center">
                Al ser parte del "Método 3 en 9", lo tienes{" "}
                <strong>¡GRATIS!</strong>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="lg:px-36 text-3xl lg:text-5xl text-redventa font-poppins text-center py-10">
        {" "}
        Estas a punto de{" "}
        <strong>
          llegar a la fluidez del inglés con nuestro método 3 en 9
        </strong>
      </p>
      <div className=" ">
        <p className="font-poppins text-center  text-green-900 text-2xl  font-bold ">
          Con la compra de nuestro programa de formación obtienes:
        </p>
      </div>

      {/* lo que obtienes */}

      <div className="lg:px-36 my-10">
        <div className="bg-gray-200 p-5 border-4 border-moradovivo rounded-xl">
          <p className=" text-center font-poppins text-moradovivo font-bold py-4 text-3xl">
            Programa "Método Inmersivo 3 en 9"
          </p>
          <div>
            <img
              src="https://rebelionbilingue.com/wp-content/uploads/2023/03/1-15-1024x738.png"
              alt=""
            />
          </div>

          <div className="grid lg:grid-cols-2  grid-cols-1 ">
            <div className="flex flex-col gap-4">
              <div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Acceso por 1 año al Método 3 en 9 (Sesiones en vivo +
                      metología única y comprobada)
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Acceso 24/7 al portal educativo desde cualquier
                      dispositivo.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Acceso a todas nuestro material descargable y con derecho
                      a usarlo para toda la vida.{" "}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Certificado de finalización de curso.{" "}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">Bonus: Fifty days challenge </p>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Bonus: Job Interview Workshop{" "}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Bonus: Drive listening de cero a pro{" "}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Bonus: Plan de minería avanzada.{" "}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">
                      Bonus: International trainings{" "}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-lg">
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                    <p className="font-poppins">Bonus: Gestor educativo </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <img
                src="https://rebelionbilingue.com/wp-content/uploads/2022/11/2-2-1.png"
                className=""
              />
              <p className="font-poppins text-3xl">PRECIO</p>
              <p className="font-poppins text-redventa font-bold  text-3xl line-through ">
              $697 USD {" "}
              </p>
              <p className="font-poppins text-2xl text-center">
              Solo hasta el <strong>viernes a medianoche:</strong>
              </p>
              <p className='font-poppins font-bold text-green-700 text-7xl'>$250</p>
              <div>

              <button  onClick={hotlink}><img src={comprar} /> </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bonos