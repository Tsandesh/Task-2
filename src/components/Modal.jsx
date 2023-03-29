import React from "react";

const Modal = ({ setModal }) => {
  const toggleModal = () => {
    setModal((prev) => !prev);
  };
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 z-20 flex justify-center items-center">
      <div
        className=" bg-black opacity-60 absolute top-0 left-0 bottom-0 right-0"
        onClick={toggleModal}
      ></div>
      <div className="absolute z-21 m-auto">
        <h1
          className="font-bold text-sm text-white mb-2 mr-2 text-right cursor-pointer hover:opacity-80"
          onClick={toggleModal}
        >
          X
        </h1>
        <iframe
          className=""
          width="900"
          height="507"
          src="https://www.youtube.com/embed/LO0U7PwNlcs"
          title="RestroX"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Modal;
