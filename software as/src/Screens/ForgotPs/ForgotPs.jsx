import React, { useState } from 'react';
import './ForgotPassword.css'; // Import the CSS file for styling
// import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../Config/firebase';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPs = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleForgotPassword = () => {
        sendPasswordResetEmail(auth, email)
          .then(() => {
            alert(`email sent to ${email} `);
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
      };
    return (
        <div className="forgot-password-container">
            <form className="forgot-password-form" onSubmit={handleSubmit}>
                <h2>Forgot Password</h2>
                <p>Enter your email address below, and we'll send you instructions to reset your password.</p>
                
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                
                <button onClick={handleForgotPassword}  type="submit">Reset Password</button>
                
                <p className="back-login">
                    Remembered your password? <a href="/">Back to Login</a>
                </p>
            </form>
        </div>
    );
};

export default ForgotPs;

