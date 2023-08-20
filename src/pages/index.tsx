import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Component/Home/Home";
import { Suspense } from "react";

const Pages = () => {
  return (
    <Suspense>
      <Routes>
        <Route index path="/" element={<Navigate to="/home" />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/about-me/*" element={<div>About ME</div>} />
        <Route path="/resume/*" element={<div>Resume</div>} />
        <Route path="/experience/*" element={<div>Experience</div>} />
        <Route path="/contact-me/*" element={<div>Contact ME</div>} />
      </Routes>
    </Suspense>
  );
};

export default Pages;
