import React from 'react'

const QuienesSomos = () => {
  return (
    <div>
        <div className=" w-full">
        <div className=" bg-redventa  text-white font-poppins sm:p-5 sm:flex justify-center items-center gap-5 ">
          <div className="flex items-center justify-center">
            {" "}
            <div></div>
          </div>

          <p className="font-poppins  text-center lg:text-4xl text-xl lg:px-36  py-2 ">
            <strong>
              #SOYFLUIDO
            </strong>
          </p>
        </div>
      </div>
      <p className=' font-poppins bg-black text-center lg:text-5xl text-2xl font-bold lg:px-36 px-5 py-10 text-yellow-500'>¿QUIÉNES SOMOS Y POR QUÉ PODEMOS AYUDARTE A HABLAR INGLÉS?</p>
      <div className='bg-black flex
      justify-center'>
      

      <img src="https://rebelionbilingue.com/wp-content/uploads/2023/01/2-8.png" />
      </div>
      <div className='bg-black text-white text-center lg:px-36 px-5 flex flex-col gap-3 py-5 '>
        <p className='font-bold font-poppins'>Learning Plus  Desafio Bilingue</p>
        <p className='font-poppins text-xs'>© 2023 | Todos los Derechos Reservados</p>
        <p className='text-gray-400 text-center font-poppins text-xs '>DESCARGOS DE RESPONSABILIDAD IMPORTANTES: Este sitio no es parte del sitio web de Facebook o Facebook, Inc. Además, este sitio no está respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.</p>
      </div>
    </div>
  )
}

export default QuienesSomos