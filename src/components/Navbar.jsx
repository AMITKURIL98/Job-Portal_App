import React from 'react'

function Navbar() {
  return (
    <>
      <div className="flex bg-[#657ED4] justify-around items-center py-4">
        <div className="flex flex-col align-middle justify-center items-center">
          <img
            className="w-14"
            src="./img/preferable-icon 1.png"
            alt="preferable-icon"
          />
          <div className="text-[#F2F2F2] font-normal text-3xl">Preferable</div>
        </div>
        <div>
          <div className="flex bg-[#373737] py-3 pl-10 pr-14 gap-3 align-middle items-center justify-center">
            <img className="w-7" src="./img/Untitled.svg" alt="" />
            <div className="font-normal text-black">Search for anything</div>
          </div>
        </div>
        <div className="flex gap-8 justify-center align-middle items-center">
          <div className="text-black font-normal font-[Inter]">Home</div>
          <div className="text-black font-normal font-[Inter]">Jobs</div>
          <div className="text-black font-normal font-[Inter]">About</div>
          <div className="text-black font-normal font-[Inter]">Pricing</div>
        </div>
        <div>
          <div className="px-8 py-4 bg-white">
            <div className="text-black text-base font-normal font-[Inter]">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar