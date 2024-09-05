import React, { useState } from 'react';
import './RegisTform.css';
import { collection, addDoc, } from "firebase/firestore"; 
import { database } from '../../../../Config/firebase';

const RegisTForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [className, setClassName] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    const teacherData = {
      firstname: fname,
      lastname: lname,
      email: email,
      class: className,
      gender: gender,
    };

    try {
      await addDoc(collection(database, "Teachers"), { teacher: teacherData });
      alert("Data Added Successfully");
      // Clear the form after successful submission
      setFname("");
      setLname("");
      setEmail("");
      setClassName("");
      setGender("");
    } catch (err) {
      alert(`Error adding data: ${err.message}`);
    }
  };

  return (
    <div className="registration-form-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Registration</h2>

        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={(e) => setFname(e.target.value)}
            type="text"
            id="firstName"
            name="firstName"
            required
            value={fname}
            placeholder="Enter first name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={(e) => setLname(e.target.value)}
            type="text"
            id="lastName"
            name="lastName"
            required
            value={lname}
            placeholder="Enter last name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            required
            value={email}
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="class">Class</label>
          <input
            onChange={(e) => setClassName(e.target.value)}
            type="text"
            id="class"
            name="class"
            required
            value={className}
            placeholder="Enter class"
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                required
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              /> Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                required
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              /> Female
            </label>
          </div>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisTForm;