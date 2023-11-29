import React from "react";

function Info() {
  return (
    <>
      <div className="py-36 px-11">
        <div className="mb-8 flex gap-[200px] mr-80">
          <div className="text-[#010000] text-4xl font-normal font-[Poppins]">
            Name
          </div>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-[#DCE1F6] w-full"
          ></input>
        </div>
        <div className="mb-8 flex gap-[56px] mr-80">
          <div className="text-[#010000] text-4xl font-normal font-[Poppins]">
            Mobile Number
          </div>
          <input
            type="text"
            id="mnumber"
            name="mnumber"
            className="bg-[#DCE1F6] w-full"
          ></input>
        </div>
        <div className="mb-8 flex gap-[200px] mr-80">
          <div className="text-[#010000] text-4xl font-normal font-[Poppins]">
            Email
          </div>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-[#DCE1F6] w-full"
          ></input>
        </div>
      </div>
    </>
  );
}

export default Info;
