import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import JobSection from "./components/JobSection";
import JobDetails from "./components/JobDetails";
import Apply from "./components/Apply";
import ReviewApp from "./components/ReviewApp";
import AppSend from "./components/AppSend";
import StudentCards from "./components/StudentCards";
import TPOCards from "./components/TPOCards";
import CorporateReq from "./components/CorporateReq";
import Form from "./components/Form";
import SignUp from "./components/SignUp";
import Info from "./components/Info";
import Education from "./components/Education";
import ResumeUpload from "./components/ResumeUpload";
import Assesment from "./components/Assesment";
import MentorBooking from "./components/MentorBooking"
import CarrerPlanning from "./components/CarrerPlanning";
import LiveProject from "./components/LiveProject";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<JobSection />} />
        <Route path="jobdetails" element={<JobDetails />} />
        <Route path="apply" element={<Apply />} />
        <Route path="review" element={<ReviewApp />} />
        <Route path="appsend" element={<AppSend />} />
        <Route path="stdCards" element={<StudentCards />} />
        <Route path="tpoCards" element={<TPOCards />} />
        <Route path="corpoReq" element={<CorporateReq />} />
        <Route path="form" element={<Form />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="info" element={<Info />} />
        <Route path="education" element={<Education />} />
        <Route path="resume" element={<ResumeUpload />} />
        <Route path="assignment" element={<Assesment />} />
        <Route path="mentor" element={<MentorBooking />} />
        <Route path="Carrerplanning" element={<CarrerPlanning />} />
        <Route path="liveproject" element={<LiveProject />} />
      </Routes>
    </>
  );
}

export default App;
