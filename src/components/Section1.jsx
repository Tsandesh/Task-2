import React from "react";

const Section1 = () => {
  const datas = [
    {
      img: <img src="restroX-best-for-operation.png" />,
      tile: "Best for Operation",
      desc: "Operate your restaurant from the menu to inventory, staffing to department, social media to reviews, and many more.",
    },
    {
      img: <img src="restroX-best-for-owners.png" />,
      tile: "Best for Owners",
      desc: "Keep track of your employees and staff wherever you go anywhere at any time.",
    },
    {
      img: <img src="RestroX-best-startups.png" />,
      tile: "Best for Startups",
      desc: "RestroX is free so it is the best app for any startup business that is in need of a restaurant operating system.",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center text-center pt-[100px] pb-[60px] mx-20">
      <div className="flex flex-col justify-center  items-center max-w-[67%] mb-[70px]">
        <h2 className="font-medium text-[42px] mb-5">
          We are better Here is why?
        </h2>
        <p className="opacity-60 text-lg">
          RestroX is not just a POS system. It is an ultimate restaurant
          operating system gathered with high-end features compacted all in one
          app. It is enclosed with all the multifaceted requirements from
          orders, billings, sales, inventory, staff, social media, and
          accounting management in a single system.
        </p>
      </div>
      <div className="md:grid md:grid-cols-3 gap-6 ">
        {datas.map((data) => (
          <div className=" flex-col mb-[40px] text-center  rounded-2xl bg-gradient-to-b from-[#F6F6F9] to-white">
            <div className="pl-[40px] pt-[18%] pr-[50px] mb-[70px]">
              {data.img}
            </div>

            <h2 className="text-2xl">{data.tile}</h2>
            <p className="text-center opacity-60">{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
