
import React, { useState, useEffect } from "react";


const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const wid = 500

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 1);
    }, 30);

    if (progress >= 450) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [progress]);

  return (
    <div className="flex justify-center px-5">
    <div className={`w-${wid}px h-4 bg-gray-300 rounded-full overflow-hidden`}>
      <div
        className="h-full bg-[#D1000A] transition-all duration-1000 ease-linear"
        style={{ width: `${progress}px` }}
      />
    </div>
    </div>
  );
};

export default ProgressBar;