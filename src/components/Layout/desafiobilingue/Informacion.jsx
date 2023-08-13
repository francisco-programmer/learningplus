import React from 'react'
import buton from '../../../assets/button.png'

const Informacion = (props) => {
  return (
    <div>

      <div className='bg-black text-gray-200 py-10' >
        <p className='lg:text-4xl text-2xl font-poppins text-yellow-500 lg:px-72 px-2 text-center font-bold py-10'>EVENTO DISPONIBLE POR UNICA VEZ DEL {props.fechainicio} AL {props.fechafin}</p>
        <div className='lg:px-72 px-5 font-poppins flex flex-col gap-8'>
          <p>Tenemos un gran desafío y es avisarte en <strong>tiempo real</strong> cuando se estrenen cada uno de los enlaces de las clases para que ingreses y no te las pierdas.</p>
          <p>Por tal motivo hemos creado un <strong>grupo de WhatsApp,</strong> en donde te enviaremos el <strong>link de cada entrenamiento</strong> unos minutos antes de su estreno, además te enviaremos contenido e información muy importante, en este grupo sólo escribirá el administrador y no vas a recibir spam.</p>
          <p>Para no perderte ninguna de nuestras clases, sólo debes dar clic en el <strong>BOTÓN verde y unirte al Grupo de WhatsApp.</strong></p>
        </div>

      </div>
     
      <div className="w-full bg-[url('https://img.freepik.com/free-photo/flag-united-states-america_1401-253.jpg?w=740&t=st=1691951779~exp=1691952379~hmac=0a53706bb21b5ac48c6506c0abd6803a63dc67db92a5b9ce44a51b6697a8ecb3')]  bg-cover bg-center  ">
      <div className='backdrop-opacity-10 backdrop-invert bg-purple-900/90'>
      <p className='text-4xl font-poppins text-yellow-500 lg:px-72 px-5 text-center font-bold py-10 italic'>PARA QUIEN ES ESTE EVENTO:</p>

<ol className='flex justify-start flex-col  gap-2 lg:px-72  px-5 font-poppins text-white pb-10' start="1">
        <li><strong>1.</strong> Personas que requieren con urgencia aprender inglés por alguna razón.</li>
        <li><strong>2.</strong> Personas que han intentando aprender Ingles de diferentes maneras pero por alguna razón no han logrado la fluidez del idioma</li>
        <li><strong>3.</strong> Personas que saben o sienten que le método tradicional de aprendizaje no funciona.</li>
        <li><strong>4. </strong> Personas que se han sentido frustradas y cansadas de tanto intentarlo sin ningún resultado</li>
        <li><strong>5. </strong> Inmigrantes de habla hispana en busca de mejores oportunidades laborales que requieren hablar inglés con fluidez.</li>
        <li><strong>6. </strong> Estudiantes universitarios latinos que necesitan mejorar su inglés para obtener mejores calificaciones y su titulo profesional.</li>
        <li><strong>7. </strong> Profesionales que buscan ascender en sus carreras y/o empresas y saben que el inglés es esencial para alcanzar sus metas.</li>
        <li><strong>8. </strong> Personas que desean viajar a los Estados Unidos o al extranjero y requieren inglés para comunicarse.</li>
        <li><strong>9. </strong> Personas que se sienten excluidas socialmente debido a su falta de habilidades en este idioma.</li>
        <li><strong>10. </strong> Personas que buscan mejores oportunidades de empleo y/o buscan mejores oportunidades de negocios .</li>
        <li><strong>11 .</strong> Personas que se sienten desanimadas por no haber logrado aprender inglés con los métodos tradicionales y buscan nuevas técnicas de estudio.</li>
      
      </ol>
      <div className='pb-10 flex justify-center'>
         <button> <img src={buton} alt="" /></button>
       </div>
      </div>
      </div>
    </div>
  )
}

export default Informacion