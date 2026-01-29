import React from 'react'
import Image1 from "../../assets/LookBook/Tabloid1.webp";
import Image2 from "../../assets/LookBook/Lookbook2.webp";
import Image3 from "../../assets/LookBook/Lookbook3.webp";
import Image4 from "../../assets/LookBook/Lookbook4.webp";

function LookBook() {

  console.log("Developed By: Gs3 Solutions Pvt Ltd");
  console.log("Developer: sudiptasamanta917@gmail.com");
  
  return (
      <div>
          <div className="w-full h-10 md:h-12 lg:h-20 bg-gray-900"></div>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-0'>
              <img src={Image1} alt="lookbook" className="w-full" />
              <img src={Image2} alt="lookbook" className="w-full" />
              <img src={Image3} alt="lookbook" className="w-full" />
              <img src={Image4} alt="lookbook" className="w-full" />
          </div>
      </div>
  );
}

export default LookBook