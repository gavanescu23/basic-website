import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-1">
          &#62;MY MINIMALISTIC PORTFOLIO&#60;
        </p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-3">
          Grow by creating.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold">
            Always be positive and
          </p>
          <Typed
            className="md:text-3xl sm:text-2xl text-xl font-bold md:pl-1 pl-1"
            loop
            backSpeed={50}
            typeSpeed={40}
            strings={["learn", "work", "read", "test", "research"]}
          ></Typed>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">Check your progress by constantly facing challenges.</p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
