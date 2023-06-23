import React from 'react'
import pre from '../../../assets/englisnow/pre.webp'
import familia from '../../../assets/englisnow/familia.webp'
const Presentation = () => {

  const hotlink = () => {
    window.open("https://go.hotmart.com/F82923352C?ap=acab", "")
  }

  return (
    <div>
      <h1 className="text-5xl  text-center text-gray-900 font-extrabold p-3 font-sans leading-snug ">
        {" "}
        APRENDE INGLÉS RÁPIDAMENTE CON UN MÉTODO ALTAMENTE EFECTIVO Y A TU
        PROPIO RITMO
      </h1>
      <p className="text-center text-4xl font-poppins text-gray-900">
        Ya no pierdas más oportunidades por no saber Inglés
      </p>
      <div className=" w-screen px-20 py-5  ">
        <div className="flex rounded">
          <div className="bg-[#D1000A] w-2/4 flex flex-col justify-around rounded-l-lg ">
            <h1 className="text-5xl font-bold font-poppins p-10 leading-snug text-gray-200">
              El programa online que te transforma a una persona bilingüe.
            </h1>
            <div className="px-10">
              <button
                className="hover:bg-gray-900 text-gray-200 font-bold p-4  bg-black font-poppins rounded-lg"
                onClick={hotlink}
              >
                ¡HAZ CLICK AQUI PARA COMENZAR!
              </button>
            </div>
          </div>
          <div className="w-2/4 ">
            <img src={pre} className="rounded-r-lg" />
          </div>
        </div>
      </div>
      <p className="text-center font-poppins text-2xl">
        Más de 3500 personas se han unido a esta CAPACITACIÓN y están cumpliendo
        sus metas
      </p>
      <div className='text-center p-2'>

     <a href='https://englishnow-0511.club.hotmart.com/login' target='blank' className='text-sky-500 font-poppins text-2xl underline font-bold text-center'> ESTUDIANTES REGULARES PUEDEN INGRESAR HACIENDO CLICK AQUÍ</a> 
      </div>
      <div className='bg-gray-900  flex'>
        <div className='w-2/4 pl-24 pt-10'><img src={familia} className='rounded-lg' /></div>
        <div className='p-10 w-2/4'>
          <div><p className='text-purple-500 text-5xl font-bold'>Nuestro método es tan sencillo que no importa si:</p></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Presentation 