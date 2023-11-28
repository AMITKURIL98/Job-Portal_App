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
import Form2 from "./components/Form2";

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
        <Route path="form2" element={<Form2 />} />
      </Routes>
    </>
  );
}

export default App;
