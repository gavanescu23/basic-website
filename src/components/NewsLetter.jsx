import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] grid lg:grid-cols-3 mx-auto">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4x sm:text-3xl text-2xl font-bold py-2">
            Want to keep in touch with my latest work?
          </h1>
          <p>Sign up to my newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input className="flex rounded-md w-full my-1 mx-auto p-3" type="email" placeholder="Enter your email"></input>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 ml-4 px-6 py-3 text-black">Subscribe</button>
          </div>
          <p>For info regarding GDPR click on the <span className="text-[#00df9a]"><a rel="noreferrer" target="_blank" href="https://www.consilium.europa.eu/en/policies/data-protection/data-protection-regulation/#:~:text=The%20GDPR%20establishes%20the%20general,data%20processing%20operations%20they%20perform."><u>GDPR Privacy Policy</u></a></span></p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
