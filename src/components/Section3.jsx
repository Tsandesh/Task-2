import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const Section3 = ({ setModal }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <div className="font-medium text-3xl text-center pt-[100px]">
          {" "}
          <h1>
            <span className=" opacity-60">
              Let Your Restaurant Be More Than <br /> Just A
            </span>

            <span className="text-red-600"> Restaurant</span>
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center relative">
        <img src="restrox-youtube.png" alt="" />{" "}
        <AiFillPlayCircle
          className=""
          style={{
            color: "red",
            height: "120px",
            width: "120px",
            position: "absolute",
          }}
          onClick={() => setModal((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default Section3;
