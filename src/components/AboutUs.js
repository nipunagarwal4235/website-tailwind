import React from "react";
import Feather from "../assets/Asset 2.svg";

const AboutUs = () => {
  return (
    <>
      <div id="about" className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="w-[500px] mx-auto my-4"
            src={Feather}
            alt="purple feather"
          />
          <div className="flex flex-col justify-center">
            <p className="text-[#8a00ff] font-bold font-poppins">
              Let's get to know each other
            </p>
            <h1 className="md-text-4xl sm:text-3xl text-2xl font-bold py-2 font-poppins">
              ABOUT US
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              itaque? Dolorum quos libero molestiae odit consequuntur ipsa
              commodi. Officiis sunt nemo dolor suscipit vitae dolore deserunt,
              rem voluptatibus quam quasi. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Placeat iusto ut veritatis eius
              deleniti! Praesentium, fuga? Libero neque error nihil accusamus.
              Iusto, tempora fugiat delectus eum sunt optio! Atque, alias!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
