import React from 'react'

function Assesment() {
  return (
    <>
      <div className="text-black text-5xl font-[Inter] font-semibold pl-24 pt-24 pb-14 break-words">
        Assesment
      </div>
      <hr className="border-black" />
      <div className="flex justify-center py-28">
        <div className="text-black text-5xl font-normal font-[Inter] px-24 py-5 bg-[rgba(217,217,217,0.70)] border-[1px] border-black">
          Jobs
        </div>
        <div className="text-black text-5xl font-normal font-[Inter] px-24 py-5 bg-[#DCE1F6] border-[1px] border-black">
          Assesment
        </div>
        <div className="text-black text-5xl font-normal font-[Inter] px-24 py-5 bg-[rgba(217,217,217,0.70)] border-[1px] border-black">
          Job Assistance
        </div>
      </div>
      <div className="gap-72 flex items-center px-16 pt-28">
        <div className="text-black text-5xl font-medium font-[Inter]">
          Select Stream
        </div>
        <div className="flex">
          <div className="bg-[#DCE1F6] pl-12 pr-60 py-6 border-[1px] border-black text-black text-5xl font-medium font-[Inter]">
            Select Stream
          </div>
          <img src="./img/Downbutton.svg" alt="Button" />
        </div>
      </div>
      <div className="gap-[280px] flex items-center px-16 py-40">
        <div className="text-black text-5xl font-medium font-[Inter]">
          Select Subject
        </div>
        <div className="flex">
          <div className="bg-[#DCE1F6] pl-12 pr-60 py-6 border-[1px] border-black text-black text-5xl font-medium font-[Inter]">
            Select Subject
          </div>
          <img src="./img/Downbutton.svg" alt="Button" />
        </div>
      </div>
      <div className="flex justify-end mr-28 py-32">
        <div className="text-white text-4xl font-[Inter] font-normal px-24 py-5 bg-[#3626A7] rounded-[30px]">
          Start Assessment
        </div>
      </div>
    </>
  );
}

export default Assesment