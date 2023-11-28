import React from "react";

function JobSection() {
  return (
    <>
      <div className="bg-[#657ED4]">
        <div className="flex bg-[#657ED4] justify-around items-center py-4">
          <div className="flex flex-col align-middle justify-center items-center">
            <img
              className="w-14"
              src="./img/preferable-icon 1.png"
              alt="preferable-icon"
            />
            <div className="text-[#F2F2F2] font-normal text-3xl">
              Preferable
            </div>
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
        <div className="bg-[#3F3D56]">
          <div className="text-white text-4xl font-[Inter] font-normal pl-11 pt-6 pb-3">
            Find Better Through ACCESS,Better CONNECTIONS,Better Jobs.
          </div>
          <div className="text-white text-xl font-[Inter] font-normal pl-11 pt-3 pb-3">
            Preferable helps you find the perfect job for you
          </div>
          <div className="w-full flex gap-5 pl-11 pt-3 pb-3 align-middle">
            <div className="w-full text-2xl text-[#0C0000] font-normal font-[Inter] bg-white rounded-xl px-4 py-4">
              Job Title,Keywords or Company Name
            </div>
            <div className="w-full bg-white flex justify-between rounded-xl px-4 py-4">
              <div className="text-2xl text-[#0C0000] font-normal font-[Inter]">
                City or State
              </div>
              <img
                className="w-10"
                src="./img/Navigation.svg"
                alt="Navigation Bar"
              />
            </div>
            <div className="w-full bg-white flex justify-between rounded-xl px-4 py-4">
              <div className="text-2xl text-[#0C0000] font-normal font-[Inter]">
                Experience
              </div>
              <img className="w-5" src="./img/DownArrow.svg" alt="DownArrow" />
            </div>
          </div>
          <div className="bg-[#657ED4] inline-block rounded-xl ml-11 mt-3 mb-8">
            <div className="text-[#ddcd9d] text-4xl font-[Inter] font-semibold px-8 py-3">
              Find Jobs
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 my-16">
        <div className="col-start-1 col-end-2 bg-[#DCE1F6] px-12 py-9 rounded-3xl m-6 h-3/6">
          <div className="flex py-5 gap-3">
            <img className="w-8" src="./img/tick.svg" alt="tick" />
            <div className="text-3xl font-[Inter] font-medium ">
              Applied Jobs
            </div>
          </div>
          <div className="flex py-5 gap-3">
            <img className="w-8" src="./img/skills.svg" alt="skills" />
            <div className="text-3xl font-[Inter] font-medium ">
              Skill Assessment
            </div>
          </div>
          <div className="flex py-5 gap-3">
            <img
              className="w-8"
              src="./img/jobassist.svg"
              alt="job_Assistance"
            />
            <div className="text-3xl font-[Inter] font-medium ">
              Job Assistance
            </div>
          </div>
          <div className="flex py-5 gap-3">
            <img className="w-8" src="./img/interview.svg" alt="Interview" />
            <div className="text-3xl font-[Inter] font-medium ">
              Interview Prep
            </div>
          </div>
        </div>
        <div className="col-start-2 col-end-4 px-6 py-6">
          <div className="flex gap-8 bg-[#DCE1F6] rounded-3xl justify-start align-middle items-center px-24 py-14 mb-14">
            <img
              className="px-8 py-5 bg-white"
              src="./img/image 53.png"
              alt="lenskart"
            />
            <div>
              <div className="text-4xl font-[Inter] font-medium text-[#FF331F]">
                Full Stack Developer
              </div>
              <div className="text-black text-4xl font-[Inter] font-normal">
                Lenskart
              </div>
              <div className="text-black text-4xl font-[Inter] font-light">
                India (Remote)
              </div>
              <div className="text-[#005F59] text-4xl font-[Inter] font-normal">
                3 hours ago
              </div>
            </div>
          </div>
          <div className="flex gap-8 bg-[#DCE1F6] rounded-3xl justify-start align-middle items-center px-24 py-14 mb-14">
            <img
              className="px-8 py-5 bg-white"
              src="./img/image 53.png"
              alt="lenskart"
            />
            <div>
              <div className="text-4xl font-[Inter] font-medium text-[#FF331F]">
                Full Stack Developer
              </div>
              <div className="text-black text-4xl font-[Inter] font-normal">
                Lenskart
              </div>
              <div className="text-black text-4xl font-[Inter] font-light">
                India (Remote)
              </div>
              <div className="text-[#005F59] text-4xl font-[Inter] font-normal">
                3 hours ago
              </div>
            </div>
          </div>
          <div className="flex gap-8 bg-[#DCE1F6] rounded-3xl justify-start align-middle items-center px-24 py-14 mb-14">
            <img
              className="px-8 py-5 bg-white"
              src="./img/image 53.png"
              alt="lenskart"
            />
            <div>
              <div className="text-4xl font-[Inter] font-medium text-[#FF331F]">
                Full Stack Developer
              </div>
              <div className="text-black text-4xl font-[Inter] font-normal">
                Lenskart
              </div>
              <div className="text-black text-4xl font-[Inter] font-light">
                India (Remote)
              </div>
              <div className="text-[#005F59] text-4xl font-[Inter] font-normal">
                3 hours ago
              </div>
            </div>
          </div>
          <div className="flex gap-8 bg-[#DCE1F6] rounded-3xl justify-start align-middle items-center px-24 py-14 mb-14">
            <img
              className="px-8 py-5 bg-white"
              src="./img/image 53.png"
              alt="lenskart"
            />
            <div>
              <div className="text-4xl font-[Inter] font-medium text-[#FF331F]">
                Full Stack Developer
              </div>
              <div className="text-black text-4xl font-[Inter] font-normal">
                Lenskart
              </div>
              <div className="text-black text-4xl font-[Inter] font-light">
                India (Remote)
              </div>
              <div className="text-[#005F59] text-4xl font-[Inter] font-normal">
                3 hours ago
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobSection;
