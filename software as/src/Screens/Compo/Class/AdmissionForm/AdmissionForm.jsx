import React, { useState } from 'react';
import './AdmissionForm.css';
import { collection, addDoc } from "firebase/firestore"; 
import { database } from '../../../../Config/firebase';

const AdmissionForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add your form submission logic here
    const classAdmission = {
      firstname: fname,
      lastname: lname,
      email: email,
      phone: phone,
      dateofbirth : birthDate,
      gender: gender,
    };

    try {
      await addDoc(collection(database, "ClassAdmission"), { form: classAdmission});
      alert("Data Added Successfully");
      // Clear the form after successful submission
      setFname("");
      setLname("");
      setEmail("");
      setPhone("");
      setbirthDate("");
      setGender("");
    } catch (err) {
      alert(`Error adding data: ${err.message}`);
    }

  }

  return (
    <div className="admission-form-container">
      <h2>Admission Form</h2>
      <form onSubmit={handleSubmit} className="admission-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
          onChange={(e) => setFname(e.target.value)}
          type="text" id="firstName" name="firstName" placeholder="Enter first name" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input 
          onChange={(e) => setLname(e.target.value)}
          type="text" id="lastName" name="lastName" placeholder="Enter last name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
          onChange={(e) => setEmail(e.target.value)}
          type="email" id="email" name="email" placeholder="Enter email address" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
          onChange={(e) => setPhone(e.target.value)}
          type="tel" id="phone" name="phone" placeholder="Enter phone number" required />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
          onChange={(e) => setbirthDate(e.target.value)}
          type="date" id="dob" name="dob" required />
        </div>
        <div className="form-group">
          <label htmlFor="qualification">Qualification:</label>
          <input type="text" id="qualification" name="qualification" placeholder="Enter qualification" required />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <div className="radio-group">
            <input 
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
            type="radio" id="male" name="gender" value="male" required />
            <label htmlFor="male">Male</label>
            <input 
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
            type="radio" id="female" name="gender" value="female" required />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default AdmissionForm;
