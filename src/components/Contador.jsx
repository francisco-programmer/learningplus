import React, { useState, useEffect } from 'react';
import {RxLapTimer} from 'react-icons/rx'

const Contador = (props) => {
  const [seconds, setSeconds] = useState(parseInt(localStorage.getItem(props.item)) || 900);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  useEffect(() => {
    localStorage.setItem(props.item, seconds);
  }, [seconds]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  }

  const displayTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${formatTime(minutes)}:${formatTime(remainingSeconds)}`;
  }

  return (
    <div className="fixed w-full 	opacity-90 z-50">
      <div className="mb-4 bg-redventa  text-white font-poppins sm:p-4 sm:flex justify-center items-center gap-5 ">
        <div className='flex items-center justify-center'>
          {" "}
          <p className="text-4xl font-bold items-center top-5 ">00:{displayTime()}</p>
          <div>
          <RxLapTimer className="text-4xl" />
        </div>
        </div> 
        
        <p className="font-poppins sm:text-left text-center ">
          ¡APROVECHA EL DESCUENTO HASTA<br></br> <strong>HOY!</strong>
        </p>
      </div>
    </div>
  );
}

export default Contador;