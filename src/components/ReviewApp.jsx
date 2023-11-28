import React from "react";

function ReviewApp() {
  return (
    <>
      <div className="flex justify-between px-11 py-9">
        <div className="text-black text-5xl font-[Inter] font-normal break-words">
          Review your application
        </div>
        <img className="w-3" src="./img/X-Cross.svg" alt="cross" />
      </div>
      <div className="border-[1px] border-black"></div>
      <div className="px-11 pt-6 text-black text-4xl font-[Inter] font-normal break-words">
        Contact info
      </div>
      <div className="text-black px-11 pb-6 text-3xl font-[Inter] font-normal break-words">
        Be sure to include an updated resume
      </div>
      <div className="ml-11 mr-6 mb-10 flex bg-[#DCE1F6] rounded-[30px] py-5 items-center justify-center align-middle text-3xl font-[Inter] font-normal break-words">
        User profile card
      </div>
      <div className="ml-11 mr-6 mb-10 bg-[#DCE1F6] rounded-[30px]">
        <div className="text-[#3626A7] text-3xl font-[Poppins] font-medium break-words flex justify-end pr-8">
          Edit
        </div>
        <div className="text-3xl font-[Inter] font-normal break-words flex justify-center pb-5">
          Email Address Mobile number
        </div>
      </div>
      <div className="ml-11 mr-6 mb-10 bg-[#DCE1F6] rounded-[30px]">
        <div className="text-[#3626A7] text-3xl font-[Poppins] font-medium break-words flex justify-end pr-8">
          Edit
        </div>
        <div className="text-3xl font-[Inter] font-normal break-words flex justify-center pb-5">
          resume
        </div>
      </div>
      <div className="ml-11 flex justify-end pb-24 mr-6">
        <div className="flex justify-center align-middle items-center">
          <div className="text-3xl text-[#3626A7] font-[Poppins] font-medium">
            Show 3 more resumes
          </div>
          <img
            className="w-10 h-4 left-[9.17px] top-4 px-2 border-[#3626A7]"
            src="./img/DownArrow.svg"
            alt="DownArrow"
          />
        </div>
      </div>
      <div className="border-[1px] border-black"></div>
      <div className="flex gap-6 p-10 justify-end items-center">
        <div className="text-[#3626A7] text-3xl font-medium font-[Poppins] break-words">
          Back
        </div>
        <div className="bg-[#657ED4] pl-4 pr-8 rounded-[30px] flex justify-center items-center text-3xl text-white py-3">
          Submit application
        </div>
      </div>
    </>
  );
}

export default ReviewApp;
