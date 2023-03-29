import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div className="mt-8 pt-[95px] lg:flex lg:flex-row flex-col justify-center lg:justify-between item-center mx-20">
      {/*  Image*/}
      <img
        className="w-full lg:w-[50%] lg:hidden "
        src="web_banner_restrox.png"
        alt="RestroX QR Scan and Digital Menu"
      />
      <div className="flex flex-col text-center justify-start item-center w-full lg:text-left  lg:w-[50%]">
        <h3 className="font-medium text-5xl  mb-5">
          <span className="opacity-70">
            Stop waiting. <br /> Grow Your.
          </span>

          <br />
          <span className="text-red-600 ">
            <TypeAnimation
              sequence={["resturant.", 2000, "Cafe.", 3000, "bar.", 3000]}
              repeat={Infinity}
              style={{ display: "inline-block" }}
            />
          </span>
        </h3>
        <p className="opacity-60 text-lg">
          Perform all the operations of your restaurant just
          <br />
          by using a single app in RestroX.
        </p>
        <button className="w-fit m-auto lg:mx-0 px-10 rounded-md my-5 py-4 border-2 text-white bg-red-600 hover:text-red-600 hover:bg-white  hover:border-solid hover:border-2 hover:border-red-600">
          Get Started
        </button>
        <p className="opacity-60 text-base">Free Forever, No Credit Card</p>
      </div>{" "}
      {/*  Image*/}
      <img
        className="w-[50%] hidden lg:block"
        src="web_banner_restrox.png"
        alt="RestroX QR Scan and Digital Menu"
      />
    </div>
  );
};

export default HeroSection;
