import React from "react";
import { AiOutlineFolder } from "react-icons/ai";
import { MdAdsClick } from "react-icons/md";
import { BiExtension } from "react-icons/bi";
import { SlShareAlt } from "react-icons/sl";

const style = {
  width: "70px",
  height: "70px",
  opacity: "40%",
};
const datas = [
  {
    icon: <MdAdsClick style={style} />,
    header: "Free Forever",
    para: "Turn your smartphone or tablet into a powerful tool. Manage sales, inventory, and employees with ease, engage customers, and increase your revenue. Whether you have single or multiple stores, RestroX helps run your business.",
  },
  {
    icon: <AiOutlineFolder style={style} />,
    header: "Digital Menu",
    para: "Our system creates unique QR codes for each table in your restaurant. When a customer uses their smartphone to scan one of these codes, the system recognizes the table the order is coming from and takes the customer to your restaurant's menu, which is available through their restrox account.",
  },
  {
    icon: <BiExtension style={style} />,
    header: "Multi Restaurant Management",
    para: "Designed for shops, cafes, or restaurants, you can easily keep track of your inventories, allowing you complete control over your stock. It also gives you an easy tool to track and manage your orders and receive goods. Also, get a detailed overview of your inventory with a list of all the items and variants you have in stock.",
  },
  {
    icon: <SlShareAlt style={style} />,
    header: "Free Forever",
    para: "If you have different outlets in different locations, you can adapt to changing market conditions, grow your business, and better serve your customers. You can compare your performances in different locations and manage inventories, employees, and customers with a single account.",
  },
];

const Significance = () => {
  return (
    <div className="mx-20 mt-[80px] mb-[40px]">
      {" "}
      <div className="md:grid md:grid-cols-2">
        {datas.map((data) => (
          <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row gap-5 align-center ">
            <div className="relative">
              <img
                src="icons/ico-bkg.png"
                alt="icon-bg"
                className="min-w-[60px] min-h-[70px]"
              />
              <span className="absolute top-2 text-xl flex items-center ml-3">
                {data.icon}
              </span>
            </div>

            <div className="m-5 text-center lg:text-left">
              <h5 className="font-medium text-2xl  mb-[10px] opacity-85">
                {data.header}
              </h5>
              <p className="text-left opacity-60"> {data.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Significance;
