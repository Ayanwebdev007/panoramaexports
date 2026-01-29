import React from 'react'
import Certifications from '../../components/Certifications';

function StandardOfPerfection() {
  return (
      <>
          <div className="text-[#01276a] md:mt-6 w-[90%] mx-auto lg:py-16 md:py-12 sm:py-10 py-5 px-2 sm:px-6 md:px-10 lg:px-20 rounded-t-md">
              <div className="flex items-center justify-start pt-2">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-semibold">
                      <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl py-3 px-4 font-semibold bg-blue-950 inline-block text-white">
                          STANDARD OF PERFECTION
                      </h1>
                      <div className="md:mt-10 mt-5 flex flex-col items-center">
                          <h1 className="text-lg md:text-2xl xl:text-3xl font-semibold text-blue-900">
                              Global Standards, Local Soul
                          </h1>
                          <p className="text-sm md:text-lg mt-3 text-gray-600 ml-1 font-thin lg:w-[50%] text-justify">
                              From ethical sourcing to flawless finishing, our
                              certifications speak of trust, transparency, and
                              excellence, every garment carries the seal of
                              global trust and credibility
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <Certifications />
      </>
  );
}

export default StandardOfPerfection