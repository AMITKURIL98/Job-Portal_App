import React from 'react'

const MentorBooking2 = () => {
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
      <table>
        
      </table>
    </>
  );
}

export default MentorBooking2