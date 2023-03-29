import React from "react";
import { findFlag, getList } from "country-list-with-dial-code-and-flag";
import { BiMenuAltLeft } from "react-icons/bi";

const NavBar = ({ setSideNav }) => {
  return (
    <nav className="w-full flex justify-between py-6 px-4 lg:px-32 sticky top-0 bg-white z-10 shadow-md p-[20px]">
      <div className="pl-0 ">
        <img
          src="RestroXLogo.png"
          alt="logo"
          className="max-w-[80%] max-h-[38px]"
        />
      </div>
      <div className="hidden lg:block">
        <ul className=" hidden justify-center lg:flex">
          <li className="hover:cursor-pointer font-medium py-15 my-0 mx-7 opacity-80">
            <a href="">Home</a>
          </li>
          <li className="hover:cursor-pointer font-medium py-15 my-0 mx-7 opacity-80">
            <a href="">Features</a>
          </li>
          <li className="hover:cursor-pointer font-medium py-15 my-0 mx-7 opacity-80">
            <a href="">Pricing</a>
          </li>
          <li className="hover:cursor-pointer font-medium py-15 my-0 mx-7 opacity-80">
            <a href="">Support</a>
          </li>
        </ul>
      </div>
      <ul className="hidden lg:flex justify-center items-center ">
        <li className="hover:cursor-pointer mr-5">Get Started</li>
        <SelectComponent dtClass={"top-16 "} />
      </ul>
      <div className=" lg:hidden">
        <BiMenuAltLeft
          size={42}
          style={{ opacity: "60%" }}
          onClick={() => setSideNav((prevVal) => !prevVal)}
        />
      </div>
    </nav>
  );
};

export default NavBar;

export const SelectComponent = ({ dtClass }) => {
  const CountryList = getList();
  const [countryCode, setCountryCode] = React.useState("NP");
  const [openSelect, setOpenSelect] = React.useState(false);

  return (
    <div
      className="flex justify-center items-center gap-2 shadow-md rounded-2xl py-1 px-2 cursor-pointer relative min-w-[100px] "
      onClick={() => {
        setOpenSelect((prev) => !prev);
      }}
    >
      <img
        src={`https://flagcdn.com/16x12/${countryCode.toLowerCase()}.png`}
      ></img>
      <p>|</p>
      <p>{countryCode}</p>
      {openSelect ? (
        <div
          className={`flex flex-col h-[250px] max-w-[200px] overflow-scroll fixed ${dtClass}right-6 z-30 bg-white border-2 rounded-sm shadow-sm`}
        >
          {CountryList.map((country, index) => (
            <div
              key={index}
              className="p-3 hover:bg-blue-100"
              onClick={(e) => {
                e.stopPropagation();
                setOpenSelect((prev) => !prev);
                setCountryCode(country.code);
              }}
            >
              {country.name}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
