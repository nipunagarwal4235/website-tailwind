import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <>
      <div className="text-white">
        <div className="max-w-[1240px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#8100ff] font-bold p-2 font-poppins">
            ORGANIZE WITH THE BEST
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 font-poppins ">
            Purple Feather
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 font-poppins">
              Make the best memories on your
            </p>
            <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#8100ff] font-poppins"
              strings={["WEDDINGS", "FESTS" , "TRIPS" , "EVENTS" ,]}
              typeSpeed={120}
              backSpeed={140}
              loop
            ></Typed>
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-400 font-poppins">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          <button className="bg-[#8a00ff] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black font-poppins">Contact Us</button>
        </div>
      </div>
    </>
  );
};
export default Hero;
