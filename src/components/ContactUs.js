import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { GrMail } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";

import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div
      id="contact"
      className="flex w-full justify-center items-center pb-10 pt-0"
    >
      <div className="flex flex-col md:flex-row md:space-x-10 md:space-y-0 space-y-6 w-full max-w-4xl p-8 rounded-xl shadow">
        <div className="flex flex-col space-y-10 justify-between">
          <div>
            <h1 className="font-poppins text-white font-bold text-4xl tracking-wide underline underline-offset-2 decoration-[#8a00ff]">
              Contact Us
            </h1>
            <p className="pt-2 text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              ullam ab possimus.{" "}
            </p>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="inline-flex space-x-2 items-center">
              <IoCallSharp className="text-[#8a00ff] text-xl"></IoCallSharp>
              <span className="text-white">+91 6305006978</span>
            </div>

            <div className="inline-flex space-x-2 items-center">
              <GrMail className="text-[#8a00ff] text-xl"></GrMail>
              <span className="text-white">contact@purplefeather.com</span>
            </div>

            <div className="inline-flex space-x-2 items-center">
              <MdLocationPin className="text-[#8a00ff] text-xl"></MdLocationPin>
              <span className="text-white">
                U 70 3rd Floor, Laxmi Nagar Crossing , Delhi - 110092
              </span>
            </div>
          </div>

          <div className="flex space-x-6 text-4xl text-[#8a00ff]">
            <a href="">
              <FaFacebook></FaFacebook>
            </a>
            <a href="">
              <FaInstagram></FaInstagram>
            </a>
            <a href="">
              <FaLinkedin></FaLinkedin>
            </a>
            <a href="">
              <FaYoutube></FaYoutube>
            </a>
          </div>
        </div>

        <div>
          <div className="bg-white rounded shadow-lg p-8">
            <form action="" className="flex flex-col space-y-4 md:w-80">
              <div>
                <label className="font-poppins" htmlFor="">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-3 focus:ring-[#8a00ff]"
                />
              </div>

              <div>
                <label className="font-poppins" htmlFor="">
                  Your Email
                </label>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-3 focus:ring-[#8a00ff]"
                />
              </div>

              <div>
                <label className="font-poppins" htmlFor="">
                  Your Query
                </label>
                <textarea
                  rows="4"
                  type="text"
                  placeholder="Your Message"
                  className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-3 focus:ring-[#8a00ff]"
                />
              </div>

              <button className="inline-block self-end bg-[#8a00ff] text-white font-bold font-poppins rounded-lg px-6 py-2 uppercase text-sm">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
