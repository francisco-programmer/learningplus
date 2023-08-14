import React from 'react'
import back from '../../../assets/wave.png'
const Ofrecemos = () => {
  return (
    <div className="">
      <div>
        <img src={back} className="h-20 w-full rotate-180" />
      </div>
      <div className="bg-gray-900 sm:px-36 px-5">
        <h1 className="text-yellow-500 sm:text-5xl text-3xl font-poppins font-bold text-center">
          Si crees que un curso online no funciona, te explico lo que te
          ofrecemos:{" "}
        </h1>
        <div className="flex flex-col gap-10 py-5">
          <div>
            <h1 className="text-purple-600 text-3xl font-bold font-poppins">
              Asesorías en vivo TODAS las semanas
            </h1>
            <p className="text-gray-200 font-poppins text-xl sm:text-2xl">
              Podrás hacer preguntas y recibir orientación en tiempo real.
            </p>
          </div>
          <div>
            <h1 className="text-purple-600 text-3xl font-bold font-poppins">
              Comunidad activa
            </h1>

            <p className="text-gray-200 font-poppins text-xl sm:text-2xl">
              Nuestra comunidad privada y el foro de nuestra plataforma son
              espacios donde puedes interactuar con otros estudiantes del curso
            </p>
          </div>
          <div>
            <h1 className="text-purple-600 text-3xl font-bold font-poppins">
              Soporte personalizado
            </h1>
            <p className="text-gray-200 font-poppins text-xl sm:text-2xl">
              Cuentas con línea de servicio al cliente por Whatsapp así como
              mensajes directos a la instructora a través de Telegram.
            </p>
          </div>
          <div>
            <h1 className="text-purple-600 text-3xl font-bold font-poppins">
              Contenido de calidad
            </h1>
            <p className="text-gray-200 font-poppins text-xl sm:text-2xl">
              Plan de estudios sólido y estructurado que abarca todas las
              habilidades necesarias para aprender inglés.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ofrecemos