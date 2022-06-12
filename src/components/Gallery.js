import React, { useEffect } from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { data } from "../data";

const Gallery = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 200;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 200;
  };

  return (
    <>
    <div id="gallery">
      <h1 className="text-center text-[#fff] md-text-5xl sm:text-4xl text-3xl font-bold pt-20 pb-10 underline underline-offset-2 decoration-[#8a00ff] font-poppins">
        Gallery
      </h1>
      <div className="relative flex items-center">
        <CgChevronLeft
          size={40}
          onClick={slideLeft}
          className="text-[#fff] opacity-50 cursor-pointer hover:opacity-100"
        ></CgChevronLeft>
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll overflow-y-hidden scroll whitespace-nowrap scrollbar-hide"
        >
          {data.map((item) => {
            return (
              <img
                className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                src={item.img}
                alt="/"
              ></img>
            );
          })}
        </div>
        <CgChevronRight
          size={40}
          onClick={slideRight}
          className="text-[#fff] opacity-50 cursor-pointer hover:opacity-100"
        ></CgChevronRight>
      </div>
      <div className="relative flex items-center">
        <CgChevronLeft
          size={40}
          onClick={slideLeft}
          className="text-[#fff] opacity-50 cursor-pointer hover:opacity-100"
        ></CgChevronLeft>
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll overflow-y-hidden scroll whitespace-nowrap scrollbar-hide"
        >
          {data.map((item) => {
            return (
              <img
                className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                src={item.img}
                alt="/"
              ></img>
            );
          })}
        </div>
        <CgChevronRight
          size={40}
          onClick={slideRight}
          className="text-[#fff] opacity-50 cursor-pointer hover:opacity-100"
        ></CgChevronRight>
      </div>
      </div>
    </>
  );
};

export default Gallery;
