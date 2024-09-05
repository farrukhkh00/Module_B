import React, { useState } from 'react';
import './FeeSubmission.css';
import { collection, addDoc } from "firebase/firestore"; 
import { database } from '../../../../Config/firebase';

const FeeSubmission = () => {
  let [username,setUsername] = useState("");
  let [clas,setClas] = useState("")
  let [amount,setAmount] = useState("")
  let [payMethod,setPayMethod] = useState("")
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add your form submission logic here
    const FeeSub = {
      username: username,
      clas: clas,
      amount: amount,
      payMethod: payMethod
        };

    try {
      await addDoc(collection(database, "FeeSubmission"), { feeSub: FeeSub});
      alert("Payment Done");
      // Clear the form after successful submission
      setUsername("");
      setClas("");
      setAmount("");
      setPayMethod("");
    } catch (err) {
      alert(`Error adding data: ${err.message}`);
    }

  }
  return (
    <div className="fee-submission-container">
      <h2>Fee Submission</h2>
      <form onSubmit={handleSubmit} className="fee-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
          onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="class">Class</label>
          <input
          onChange={(e) => setClas(e.target.value)}
            type="text"
            id="class"
            name="class"
            placeholder="Enter your class"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
          onChange={(e) => setAmount(e.target.value)}
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter the amount"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select 
          onChange={(e) => setPayMethod(e.target.value)}
          id="paymentMethod" name="paymentMethod" required>
            <option value="" disabled selected>
              Select payment method
            </option>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default FeeSubmission;
