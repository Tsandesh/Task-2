import React from "react";

const Section2 = () => {
  return (
    <div className="block md:grid md:grid-cols-2 mx-20 w-[90%] item-center bg-[#F4F4F9] rounded-2xl pr-[50px] pl-[50px] pb-[40px] ">
      <div className="pt-[50px] pr[16px] flex flex-col">
        {" "}
        <span className="border rounded-2xl text-[#6a26da] bg-[#6a26da] bg-opacity-[8%] font-normal w-fit py-[6px] px-[24px] text-lg mb-[35px]">
          Fast Performance
        </span>
        <h3 className="font-medium text-3xl text-left mb-[26px] opacity-80">
          Work Smarter with Powerful features
        </h3>
        <ul class="md:list-disc md:list-inside text-lg">
          <li className="text-opacity-60 mb-[16px] opacity-60 ml-0">
            Trust your account with us. Access your entire transaction history
            with confidence knowing you’re protected by first-class payment
            security.
          </li>
          <li className="text-opacity-60 mb-[16px] opacity-60">
            Tailored perfectly for your every need. You can manage your
            customer's order sources in one system compatible with
            cross-platform use.
          </li>
          <li className="text-opacity-60 mb-[16px] opacity-60">
            Order from your phone, and customize your menu. Enhance your guest
            experience with a digital menu or QR Menu solutions to satisfy your
            guests with an excellent and always up-to-date menu
          </li>
        </ul>
      </div>
      <div>
        <img src="img-13.png" alt="mobilemsg" />
      </div>
    </div>
  );
};

export default Section2;
