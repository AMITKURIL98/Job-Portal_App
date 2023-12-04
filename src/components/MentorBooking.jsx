import React from 'react'

function MentorBooking() {
  return (
    <>
      <div className="text-[#080101] text-4xl font-[Inter] font-semibold pl-12 pt-12 pb-9 break-words">
        Mentor Booking
      </div>
      <hr className="border-black" />
      <div className="flex justify-center text-[#080101] text-5xl font-[Inter] font-bold py-[75px]">
        Mentor Booking
      </div>
      <div className="text-5xl text-black font-[Inter] font-semibold pb-10 ml-14">
        Select Domain
      </div>
      <input
        className="w-4/5 bg-[#DCE1F6] border-[1px] border-black rounded-[36px] placeholder:text-5xl placeholder: px-11 py-10 ml-14 "
        type="text"
        placeholder="Eg. Data Analysis"
      />
      <div className="text-black text-5xl font-[Inter] font-semibold break-words ml-14 mt-32 mb-10">
        Select Mentorship Type
      </div>
      <div className="flex">
        <div className="text-black text-4xl font-[Inter] font-normal break-words px-[87px] py-7 bg-[#DCE1F6] ml-14 border-2 border-black">
          Virtual
        </div>
        <img src="./img/Downbutton.svg" alt="Downbutton" />
      </div>
      <div className="text-black text-4xl font-[Inter] font-normal break-words px-[70px] pt-[27px] pb-[31px] inline-flex bg-[#DCE1F6] ml-14 border-2 border-black mb-20">
        Distance Learning
      </div>
      <div className="text-black text-5xl font-[Inter] font-semibold break-words ml-14 mt-32 mb-8">
        Select Slot
      </div>
      <div className="flex ml-14 gap-28 items-center">
        <div className="bg-[#DCE1F6] border-black border-2 flex gap-20 items-center py-6">
          <div className=" border-black w-5 text-5xl pl-20">/</div>
          <div className=" border-black w-5 text-5xl pr-20">/</div>
        </div>
        <img src="./img/calender.svg" alt="calender" />
        <div className="bg-[#DCE1F6] flex items-center border-2 border-black">
          <div className="px-9 py-5 text-4xl text-black font-{Inter] font-normal ">
            10:30 AM
          </div>
          <div className="px-7 py-3  border-2 border-black">
            <img
              className="pb-2"
              src="./img/UparrowSolid.svg"
              alt="UparrowSolid"
            />
            <img src="./img/DownarrowSolid.svg" alt="DownarrowSolid" />
          </div>
        </div>
        <div className="text-[#4BC42D] text-5xl font-[Inter] font-medium break-words">
          Available
        </div>
      </div>
      <div className="text-black text-5xl font-[Inter] font-normal break-words ml-14 mt-24 mb-8">
        Mentor Name
      </div>
      <div className="text-black text-4xl font-[Inter] font-normal break-words ml-14 mb-8">
        Mr. XYZ Education Details
      </div>
      <div className="text-black text-5xl font-[Inter] font-normal break-words ml-14 mt-24 mb-8">
        Cost
      </div>
      <div className="text-black text-4xl font-[Inter] font-normal break-words ml-14 mb-8">
        2500/- Per Session (1 Hr)
      </div>
      <div className="flex justify-end mr-28 py-32">
        <div className="text-white text-4xl font-[Inter] font-normal px-24 py-5 bg-[#3626A7] rounded-[30px]">
          Next
        </div>
      </div>
    </>
  );
}

export default MentorBooking