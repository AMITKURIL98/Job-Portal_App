import React from 'react'

function CarrerPlanning() {
  return (
    <>
      <div className="text-[#080101] text-4xl font-[Inter] font-semibold pl-12 pt-12 pb-9 break-words">
        Carrer Planning
      </div>
      <hr className="border-black" />
      <div className="flex justify-center text-[#080101] text-5xl font-[Inter] font-bold py-[75px]">
        Carrer Planning
      </div>
      <div className="text-5xl text-black font-[Inter] font-semibold">
        Select Domain
      </div>
      <input
        className="w-full bg-[#DCE1F6] border-[1px] border-black rounded-[36px] placeholder:text-5xl placeholder: px-11 py-10"
        type="text"
        placeholder="Eg. Data Analysis"
      />
    </>
  );
}

export default CarrerPlanning