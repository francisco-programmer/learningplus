import React from 'react'
import Video from './Video';
import buton from '../../../assets/button.png'

const Captacion = (props) => {
    

  return (
    <div>
        {/* barra presentacion */}
      <div className=" w-full">
        <div className=" bg-redventa  text-white font-poppins sm:p-5 sm:flex justify-center items-center gap-5 ">
          <div className="flex items-center justify-center">
            {" "}
            <div></div>
          </div>

          <p className="font-poppins  text-center lg:text-4xl text-xl lg:px-36 p-5 ">
            <strong>
              EVENTO DISPONIBLE POR UNICA VEZ DEL {props.fechainicio} AL {props.fechafin}
            </strong>
          </p>
        </div>
      </div>

      <div className="w-full bg-[url('https://img.freepik.com/free-photo/flag-united-states-america_1401-253.jpg?w=740&t=st=1691951779~exp=1691952379~hmac=0a53706bb21b5ac48c6506c0abd6803a63dc67db92a5b9ce44a51b6697a8ecb3')]  bg-cover bg-center  ">
       <div className='backdrop-opacity-10 backdrop-invert bg-purple-900/90'>

       
        <div className='lg:px-40 px-2 flex flex-col gap-5 py-5'>
          <p className='text-white  lg:text-3xl text-2xl text-center font-bold font-poppins'>¿Necesitas aprender Inglés en los proximos meses?</p>
          <p className='text-white lg:text-3xl text-2xl text-center font-bold font-poppins'>
            Aplicando este Método vas a hablar el <strong className='bg-redventa'>Inglés de 3 años en 9 meses </strong>
            tan fácil como si volvieras a nacer
          </p>
          <p className='text-white lg:text-3xl text-2xl text-center font-poppins'>Sólo te falta <strong>1 PASO</strong> para asegurar tu cupo...</p>
        </div>
        {/* video */}
       <Video />
       <p className='text-white lg:text-3xl text-2xl text-center px-2 font-poppins'>Asegura tu cupo tocando el botón verde:</p>
       <div className='lg:py-10 flex justify-center'>
         <button> <img src={buton} alt="" /></button>
       </div>
      </div>
      </div>
    </div>
  );
}

export default Captacion