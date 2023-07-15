import React from 'react'
import waverojo  from '../../../assets/waverojo.png'
import certificado  from '../../../assets/decerotuprimerempleo/certificado.png'

const Certificado = () => {
  return (
    <div >
       <img src={waverojo} className='-bottom-2 relative rotate-180 ' />
       <div className='bg-[#D1000A]'>
      
        <h1 className='text-poppins text-gray-200 sm:text-5xl  text-4xl text-center sm:p-10 p-5 font-extrabold'>Al finalizar obtén tu certificado</h1>
        <div className='flex justify-center'><img src={certificado} alt="" /></div>       
        <p className='text-gray-200 text-2xl font-poppins text-center p-5'>¡Además tendrás acceso a actualizaciones <strong className='text-white font-bold'>TODAS</strong> las semanas!</p> <br></br><br></br>
       </div>
       <div>
       <img src={waverojo} className='-top-2 relative ' />
       </div>
    </div>
  )
}

export default Certificado