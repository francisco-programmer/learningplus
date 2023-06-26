import React from 'react'
import {LuInfinity} from 'react-icons/lu'
import {RiUserVoiceFill} from 'react-icons/ri'
import {GoTasklist} from 'react-icons/go'
import {RiMovie2Fill} from 'react-icons/ri'
import {FaFilePdf} from 'react-icons/fa'
import {HiUserGroup} from 'react-icons/hi'


const Beneficios = () => {
  return (
    <div>
      <div className="bg-[#D1000A] p-6 text-center">
        <h1 className="font-poppins text-white font-extrabold text-xl sm:text-4xl">
          Beneficios que obtendrás con English Now:
        </h1>
      </div>
      <div className="bg-gray-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-20 sm:px-20  gap-10">
        {/* #1 */}
        <div className="flex flex-col  items-center px-5 gap-5 hover:shadow-2xl">
          <LuInfinity className="text-purple-600 text-7xl text-center" />
          <p className="text-gray-200 font-poppins font-bold text-center text-xl">
            ACCESO DE POR VIDA<br></br> (UN SÓLO PAGO)
          </p>
          <p className="text-poppins text-gray-200 font-bold text-lg text-center">
            Una vez que compras el<br></br> programa nunca más pagarás <br></br>
            y tendrás acceso a todas las actualizaciones futuras
          </p>
        </div>
        {/* #2 */}
        <div className="flex flex-col  items-center px-5 gap-5 hover:shadow-2xl">
          <RiUserVoiceFill className="text-purple-600 text-7xl text-center" />
          <p className="text-gray-200 font-poppins font-bold text-center text-xl">
            EJERCICIOS<br></br> RECONOCIMIENTO DE VOZ
          </p>
          <p className="text-poppins text-gray-200 font-bold text-lg text-center">
            Accederás a prácticas de<br></br> pronunciación con <br></br>
            evaluación automática
          </p>
        </div>
        {/* #3 */}
        <div className="flex flex-col  items-center px-5 gap-5 hover:shadow-2xl">
          <GoTasklist className="text-purple-600 text-7xl text-center" />
          <p className="text-gray-200 font-poppins font-bold text-center text-xl">
            PRÁCTICAS Y EVALUACIONES DIGITALES
          </p>
          <p className="text-poppins text-gray-200 font-bold text-lg text-center">
            "Lo que no se mide no se mejora" <br></br> Todas las clases cuentan
            con prácticas para evaluar lo aprendido
          </p>
        </div>
        {/* #4 */}
        <div className="flex flex-col  items-center px-5 gap-5 hover:shadow-2xl">
          <RiMovie2Fill className="text-purple-600 text-7xl text-center" />
          <p className="text-gray-200 font-poppins font-bold text-center text-xl">
            CLIPS DE PELÍCULAS EN LAS <br></br>CLASES
          </p>
          <p className="text-poppins text-gray-200 font-bold text-lg text-center">
            Durante las clases podrás mejorar tus habilidades con clips de
            películas y extractos de cancionesuras
          </p>
        </div>
        {/* #5 */}
        <div className="flex flex-col  items-center px-5 gap-5 hover:shadow-2xl">
          <FaFilePdf className="text-purple-600 text-7xl text-center" />
          <p className="text-gray-200 font-poppins font-bold text-center text-xl">
          RECURSOS DESCARGABLES EN TODAS LAS LECCIONES
          </p>
          <p className="text-poppins text-gray-200 font-bold text-lg text-center">
          Tendrás mini ebooks <br></br>con el contenido de <br></br>lo aprendido en clase
          </p>
        </div>
        {/* #6 */}
        <div className="flex flex-col  items-center px-5 gap-5 hover:shadow-2xl">
          <HiUserGroup className="text-purple-600 text-7xl text-center" />
          <p className="text-gray-200 font-poppins font-bold text-center text-xl">
           COMUNIDAD DE APOYO<br></br> PRIVADA
          </p>
          <p className="text-poppins text-gray-200 font-bold text-lg text-center">
          Accederás al grupo de <br></br>estudiantes donde contarás<br></br> con actividades extra y acompañamiento de la instructora
          </p>
        </div>
      </div>
    </div>
  );
}

export default Beneficios