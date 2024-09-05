import React from 'react'
import Login from './Screens/Login/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './Screens/Signup/Signup'
import ForgotPs from './Screens/ForgotPs/ForgotPs'
import Dashboard from './Screens/Dashboard/Dashboard'
import MultipleSelect from './Screens/Compo/Student/Student'
import Student from './Screens/Compo/Student/Student'
import RegistrationForm from './Screens/Compo/Student/RegisterationForm/Rform'
import StudentList from './Screens/Compo/Student/StudentList/StudentList'
import SubjectAddForm from './Screens/Compo/Subjects/SubjectAddForm/SubjectAddForm'
import SubjectList from './Screens/Compo/Subjects/SubjectList/SubjectList'
import SyllabusAdd from './Screens/Compo/Syllabus/SylabusForm/SyllabusAdd'
import SyllabusList from './Screens/Compo/Syllabus/SyllabusList/SyllabusList'
import AdmissionForm from './Screens/Compo/Class/AdmissionForm/AdmissionForm'
import ClassList from './Screens/Compo/Class/ClassList/ClassList'
import FeeStructure from './Screens/Compo/Fees/FeeStructure/FeeStructure'
import FeeVoucher from './Screens/Compo/Fees/FeeVoucher/FeeVoucher'
import FeeSubmission from './Screens/Compo/Fees/FeeSubmission/FeeSubmission'
import ExamSchedule from './Screens/Compo/Exams/ExamSchedule/ExamSchedule'
import ExamResultSheet from './Screens/Compo/Exams/ExamResultSheet/ExamResultSheet'
import RegisTForm from './Screens/Compo/Teacher/RegisTForm/RegisTForm'
import TeacherList from './Screens/Compo/Teacher/TeacherList/TeacherList'
import Auth from './Screens/Routes/Auth'
import DashAuth from './Screens/Routes/DashAuth'

const App = () => {
  return (
    <Routes>
      <Route element={<Auth/> }>
        <Route index element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='forgotps' element={<ForgotPs/>}/>
      </Route>

      <Route element={<DashAuth/> }>

        <Route path='/dash' element={<Dashboard/>}>

        <Route path='studentRegis' element={<RegistrationForm/>}/>
        <Route path='teacherRegis' element={<RegisTForm/>}/>
        <Route path='studentlist' element={<StudentList/>}/>
        <Route path='teacherlist' element={<TeacherList/>}/>
        <Route path='subAdd' element={<SubjectAddForm/>}/>
        <Route path='subList' element={<SubjectList/>}/>
        <Route path='syllabusForm' element={<SyllabusAdd/>}/>
        <Route path='syllabusList' element={<SyllabusList/>}/>
        <Route path='admissionForm' element={<AdmissionForm/>}/>
        <Route path='classList' element={<ClassList/>}/>
        <Route path='feeStruc' element={<FeeStructure/>}/>
        <Route path='feeVoucher' element={<FeeVoucher/>}/>
        <Route path='feeSubmission' element={<FeeSubmission/>}/>
        <Route path='examSchedule' element={<ExamSchedule/>}/>
        <Route path='examResultSheet' element={<ExamResultSheet/>}/>
         </Route>
        </Route>
        

    </Routes>
  )
}

export default App
