import React, { useState } from 'react';
import './SyallabusForm.css';
import { collection, addDoc } from "firebase/firestore"; 
import { database } from '../../../../Config/firebase';

const SyllabusForm = () => {

  const [subjectName, setSubjectName] = useState("");
  const [className, setClassName] = useState("");
  const [file, setFile] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add your form submission logic here
    const syllabusData = {
      subject: subjectName,
      class: className,
      file: file,
    };

    try {
      await addDoc(collection(database, "Syllabus"), { subject: syllabusData});
      alert("Data Added Successfully");
      // Clear the form after successful submission
      setSubjectName("");
      setClassName("");
      setFile("");
    } catch (err) {
      alert(`Error adding data: ${err.message}`);
    }
  
  }
  return (
    <div className="syllabus-form-container">
      <h2>Add Syllabus</h2>
      <form onSubmit={handleSubmit} className="syllabus-form">
        <div className="form-group">
          <label htmlFor="subjectName">Subject Name:</label>
          <input 
          onChange={(e) => setSubjectName(e.target.value)}
          type="text" id="subjectName" name="subjectName" required value={subjectName} />
        </div>
        <div className="form-group">
          <label htmlFor="class">Class:</label>
          <input
          onChange={(e) => setClassName(e.target.value)} 
          type="text" id="class" name="class" required value={className} />
        </div>
        <div className="form-group" >
          <label htmlFor="syllabusFile">Upload File:</label>
          <input 
          style={{cursor:'pointer'}}
          onChange={(e) => setFile(e.target.value)}
          type="file" id="syllabusFile" name="syllabusFile" value={file}/>
        </div>
        <button  type="submit" className="add-btn">Add</button>
      </form>
    </div>
  );
};

export default SyllabusForm;
