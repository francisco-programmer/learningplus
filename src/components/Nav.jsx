import React, {useState} from 'react'
import {Link } from 'react-router-dom'

import {RiCloseLine, RiMenu3Line } from  "react-icons/ri"
import {FaFacebookSquare} from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { ImLinkedin } from 'react-icons/im'
import {ImWhatsapp} from 'react-icons/im'

import logo from "../assets/englisnow/logoblanco.png"



const Nav = () => {
    const [bg, SetBg] = useState(true)
      const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <div className="">
        <div className="flex justify-between  px-5  sm:px-36 w-screen bg-gray-900 ">
          <div className="flex justify-center">
            <Link to="/" className='flex items-center  '>
              <img src={logo} className="w-60" />
            </Link>
          </div>
          <ul className=" gap-10 lg:flex hidden">
           
            <li className="font-poppins p-2 rounded text-gray-200   ">
              <Link to="/">Home</Link>
            </li>


            <li className="font-poppins p-2 rounded text-gray-200 ">
              <Link to="contact">Cursos</Link>
            </li>
            <li className="font-poppins p-2 rounded text-gray-200 ">
              <Link to="jobs">Contacto</Link>
            </li>
          </ul>
        </div>
        <div
          className={`lg:hidden bg-gray-900 fixed lg:static w-full h-full top-0 bg-secondary-100 text-center p-4 flex flex-col justify-between z-50 transition-all ease-linear ${
            showMenu ? "right-0 " : " -right-full"
          } transition-all duration-300`}
        >
          <header className=" flex flex-col lg:flex-row  gap-4 justify-between">
          <img src={logo} className="w-60" />

            <ul className="flex gap-5 lg:flex-row flex-col text-gray-200 font-poppins">
              <li>
                <Link to="/" onClick={() => setShowMenu(!showMenu)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="contact" onClick={() => setShowMenu(!showMenu)}>
                  Cursos
                </Link>
              </li>
              
              <li>
                <Link to="jobs" onClick={() => setShowMenu(!showMenu)}>
                  Contacto
                </Link>{" "}
              </li>
            </ul>
            <hr className="border-gray-600 border-[1px]"></hr>
            <p className="font-poppins text-gray-200">Siguenos en</p>
            <div className="flex place-content-center gap-5 text-xl text-gray-200">
              <FaFacebookSquare className="hover:text-blue-500 cursor-pointer" onClick={() => window.open('https://www.facebook.com/agency.axios', '_blank')} />
              <BsInstagram className="hover:text-pink-500 cursor-pointer" onClick={() => window.open('https://www.instagram.com/axios.agency/', '_blank')}/>
              <ImLinkedin className="hover:text-blue-800 cursor-pointer" />
              <ImWhatsapp className="hover:text-green-500 cursor-pointer" onClick={() => window.open("https://walink.co/8d7c86", "_blank")}/>
            </div>
          </header>
          {/* button menu lateral */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={`lg:hidden fixed visible right-4  ${
              showMenu ? "text-gray-200 qqqaq2344" : "text-[#5E17EB]"
            } text-2xl p-3 rounded-full z-50  `}
          >
            {showMenu ? (
              <RiCloseLine className="hover:rotate-180 duration-300 transition-all hover:text-red-500" />
            ) : (
              <RiMenu3Line className="hover:rotate-180 duration-300 transition-all" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Nav