import React from "react";
import { SelectComponent } from "./NavBar";

export const SideNav = ({ setSideNav }) => {
  return (
    <div className="w-full h-full z-20 fixed top-0 bottom-0 right-0 ">
      <div
        className=" bg-black opacity-60 absolute top-0 left-0 bottom-0 right-0"
        onClick={() => setSideNav((prevVal) => !prevVal)}
      ></div>{" "}
      <div className="w-[40%] fixed bg-white z-40 top-0 bottom-0 right-0 ">
        <ul className="text-xl font-medium pl-5">
          <li className="w-full hover:cursor-pointer border-b-2 py-3">
            <a href="">Home</a>
          </li>
          <li className="w-full hover:cursor-pointer border-b-2 py-3">
            <a href="">Features</a>
          </li>
          <li className="w-full hover:cursor-pointer border-b-2 py-3">
            <a href="">Pricing</a>
          </li>
          <li className="w-full hover:cursor-pointer border-b-2 py-3">
            <a href="">Support</a>
          </li>
          <li className="w-full hover:cursor-pointer mr-5 border-b-2 py-3">
            Get Started
          </li>
          <SelectComponent dtClass={"bottom-[175px] "} />
        </ul>
      </div>
    </div>
  );
};
