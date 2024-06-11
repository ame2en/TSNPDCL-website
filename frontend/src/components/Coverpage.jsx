import React from 'react';

import image1 from "../assets/image1.png";


const Coverpage = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${image1})`, animation: 'scroll 30s linear infinite' }}>
          <div className="relative z-1 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <h1 className="text-white text-4xl md:text-6xl font-bold">WELCOME TO TGNPDCL</h1>
          </div>
          </div>
        </div>
      );
}

export default Coverpage;



