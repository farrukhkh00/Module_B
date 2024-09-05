import React, { useState } from "react";
import "./SubjectAddForm.css";
import { collection, addDoc } from "firebase/firestore"; 
import { database } from '../../../../Config/firebase';

const SubjectAddForm = () => {
  const [subjectName, setSubjectName] = useState("");
  const [className, setClassName] = useState("");
  const [subjectType, setSubjectType] = useState("GeneralScience");

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add your form submission logic here
    const subjectData = {
      subject: subjectName,
      class: className,
      subjecttype: subjectType,
    };

    try {
      await addDoc(collection(database, "Subject"), { subject: subjectData});
      alert("Data Added Successfully");
      // Clear the form after successful submission
      setSubjectName("");
      setClassName("");
      setSubjectType("");
    } catch (err) {
      alert(`Error adding data: ${err.message}`);
    }
  
  }

  return (
    <div className="subject-add-container">
      <h2>Add New Subject</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="subjectName">Subject Name:</label>
          <input
            type="text"
            id="subjectName"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="className">Class:</label>
          <input
            type="text"
            id="className"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Subject Type:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="subjectType"
                value="GeneralScience"
                checked={subjectType === "GeneralScience"}
                onChange={() => setSubjectType("GeneralScience")}
              />
              General Science
            </label>
            <label>
              <input
                type="radio"
                name="subjectType"
                value="PreEngineering"
                checked={subjectType === "PreEngineering"}
                onChange={() => setSubjectType("PreEngineering")}
              />
              Pre-Engineering
            </label>
          </div>
        </div>
        <button type="submit">Add Subject</button>
      </form>
    </div>
  );
};

export default SubjectAddForm;
