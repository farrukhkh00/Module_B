import React, { useState } from 'react';
import styles from './Signup.module.css';

const Signup = (props) => {





  return (
    <div className={styles.signupForm}>
      <h1 style={{textAlign : "center"}}>{props.heading} Form</h1>

      <form>
        <div className={styles.formGroup} style={{display : props.display}}>
          <label htmlFor="firstName" >First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            
          />
        </div>
        <div className={styles.formGroup} style={{display : props.display}}>
          <label htmlFor="lastName">Last Name</label>
          <input 
            type="text"
            id="lastName"
            name="lastName"
            
           
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Password</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
          />
        </div>
        <button  type="submit" className={styles.submitButton}>{props.submit}</button>
        <p style={{textAlign : "center", fontSize : "20px"}}>{props.lastline} <span onClick={props.click} style={{color : "blue"}}>{props.in}</span></p>
      </form>
    </div>
  );
};

export default Signup;
