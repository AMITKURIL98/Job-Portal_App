import React from "react";

function Info() {
  return (
    <>
      <div className="">
        <div className="py-36 px-11">
          <div className="mb-8 flex gap-[200px] align-middle">
            <div className="text-[#010000] text-4xl font-normal font-[Poppins] h-16">
              Name
            </div>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-[#DCE1F6] w-[63%]"
            />
          </div>
          <div className="mb-8 flex gap-[54px]">
            <div className="text-[#010000] text-4xl font-normal font-[Poppins] h-16">
              Mobile Number
            </div>
            <input
              type="text"
              id="mnumber"
              name="mnumber"
              className="bg-[#DCE1F6] h-16 w-[63%]"
            />
          </div>
          <div className="mb-8 flex gap-[200px]">
            <div className="text-[#010000] text-4xl font-normal font-[Poppins] h-16">
              Email
            </div>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-[#DCE1F6] w-[63%]"
            />
          </div>
        </div>
        <div className="flex gap-56 justify-center">
          <div className="px-14 py-16 bg-[#DCE1F6] text-[#080101] text-4xl font-[Inter] font-normal">
            Experienced
          </div>
          <div className="px-24 py-16 bg-[#DCE1F6] text-[#080101] text-4xl font-[Inter] font-normal">
            Fresher
          </div>
        </div>
        <div className="mt-16 mb-16">
          <div className="flex px-11 gap-[130px] align-middle items-center">
            <div className="text-[#080101] text-4xl font-normal font-[Inter]">
              Company
            </div>
            <input className="bg-[#DCE1F6] w-[50%] h-20" type="text" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-36 mb-3">
          <div className="text-black text-4xl font-[Inter] font-normal">
            Start Date
          </div>
          <div className="text-black text-4xl font-[Inter] font-normal">
            End Date
          </div>
        </div>
        <div className="flex gap-[130px] px-11">
          <div className="text-[#080101] text-4xl font-normal font-[Inter] pr-72">
            Duration
          </div>
          <input
            className="bg-[#DCE1F6] border-[1px] border-black "
            type="text"
            placeholder="Eg.2020"
          />
          <input
            className="bg-[#DCE1F6] border-[1px] border-black "
            type="text"
            placeholder="Eg.2023"
          />
        </div>
        <div className="my-16 px-11 flex gap-[150px] align-middle items-center">
          <div className="text-[#080101] font-[Inter] text-4xl font-normal">
            Position
          </div>
          <input
            className="bg-[#DCE1F6] border-[1px] border-black w-1/2 h-16"
            type="text"
          />
        </div>
        <div className="flex justify-end mr-56">
          <div className="text-white text-4xl font-[Inter] font-normal px-24 py-5 bg-[#3626A7] rounded-[30px]">
            Next
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
