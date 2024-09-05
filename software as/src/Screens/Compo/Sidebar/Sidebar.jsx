import React, { useState } from "react";
import "./Sidebar.css";
import Navbar from "../Navbar";
import MultipleSelect from "../Student/Student";
import Teacher from "../Teacher/Teacher";
import Subject from "../Subjects/Subjects";
import Syllabus from "../Syllabus/Syllabus";
import Student from "../Student/Student";
import { Outlet } from "react-router-dom";
import School from "../School/School";
import Class from "../Class/Class";
import Fees from "../Fees/Fees";
import Admission from "../Admission/Admission";
import Exams from "../Exams/Exams";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <Navbar functoggleSidebar={toggleSidebar} var={isOpen}/>
    <div className={`sidebar ${isOpen ? "open" : "d-none"} d-md-block d-xl-block mt-5 `}>
    
      <nav  className="mb-5 sidebar-nav">
        <ul>
          <li><Student/></li>
          <li><Teacher/></li>
          <li><Subject/> </li>
          <li><Syllabus/> </li>
          <li><School/> </li>
          <li><Class/> </li>
          <li><Fees/> </li>
          <li><Admission/> </li>
          <li><Exams/> </li>
        </ul>
        
      </nav>
    </div>
    <Outlet/>
    </>
  );
};

export default Sidebar;