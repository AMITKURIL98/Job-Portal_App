import React from 'react'

function ResumeUpload() {
  return (
    <>
      <div className="text-[#080101] text-4xl font-[Inter] font-semibold px-12 py-12">
        Resume Upload
      </div>
      <hr className="border-black" />
      <div className="px-16 py-20 flex items-center gap-20">
        <img
          className="px-6 py-7 border-[1px] border-black"
          src="./img/upload.svg"
          alt="uploadimg"
        />
        <div className="text-black text-5xl font-[Inter] font-semibold">
          Upload Resume
        </div>
      </div>
      <div className="px-12 pb-8 text-black text-5xl font-[Inter] font-semibold">
        Short Description about Yourself
      </div>
      <div className="pl-12 pr-28 py-9">
        <input
          className="w-full bg-[#DCE1F6] border-[1px] border-black rounded-[36px] placeholder:text-5xl placeholder: px-11 py-10"
          type="text"
          placeholder="Eg. Data Analysis"
        />
      </div>
      <div className="px-12 pb-10 pt-24 text-black text-5xl font-[Inter] font-semibold">
        Preffered work Location
      </div>
      <div className="pl-12 pr-28 py-8 flex gap-44 pb-32">
        <div className="flex items-center gap-8 bg-[#DCE1F6] px-14 py-1 rounded-[45px] border-[1px] border-black w-full">
          <img className="w-10 h-10" src="./img/search.png" alt="search" />
          <div className="text-black text-[53px] font-[Inter] font-normal">
            Search
          </div>
        </div>
        <div className="flex gap-9">
          <div className="flex items-center gap-8 bg-[#D9D9D9] px-14 py-1 rounded-[45px] border-[1px] border-black w-full justify-center">
            <img className="w-10 h-10" src="./img/plus.png" alt="search" />
            <div className="text-black text-[53px] font-[Inter] font-normal">
              Pune
            </div>
          </div>
          <div className="flex items-center gap-8 bg-[#D9D9D9] px-14 py-1 rounded-[45px] border-[1px] border-black w-full justify-center">
            <img className="w-10 h-10" src="./img/plus.png" alt="search" />
            <div className="text-black text-[53px] font-[Inter] font-normal">
              Mumbai
            </div>
          </div>
        </div>
      </div>
      <div className="px-12 text-black text-5xl font-[Inter] font-semibold">
        Preffered Salary
      </div>
      <div className="flex gap-9 px-12 py-10">
        <img src="./img/rupeesymbol.svg" alt="Rupee_Symbol" />
        <input
          className="bg-[#DCE1F6] border-[1px] border-black rounded-[36px] placeholder:text-5xl placeholder: px-11 py-8 w-1/2"
          type="text"
          placeholder="Eg. Data 300000 PA"
        />
      </div>
      <div className="px-12 pt-10 text-black text-5xl font-[Inter] font-semibold">
        Gender
      </div>
      <div className="flex px-12 py-11 gap-28">
        <div className="text-black text-5xl font-[Inter] font-normal pl-11 pr-48 py-3 bg-[#DCE1F6]">
          Male
        </div>
        <div className="text-black text-5xl font-[Inter] font-normal pl-11 pr-48 py-3 bg-[#DCE1F6]">
          Female
        </div>
      </div>
      <div className="flex justify-end mr-28 pb-32">
        <div className="text-white text-4xl font-[Inter] font-normal px-24 py-5 bg-[#3626A7] rounded-[30px]">
          Next
        </div>
      </div>
    </>
  );
}

export default ResumeUpload