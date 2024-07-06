import React from 'react'
import Logo from "../assets/sec2img1.png" 
import styles from "./Lms.module.css"

const Lms = () => {
  return (
    <div className={styles.first_sec}>
      <div>
        <img src={Logo} alt="" />
      </div>
      <div style={{marginTop : "70px"}}>
        <span style={{color : "#00306E", fontSize : "44px", fontWeight : "bold"}}>
            Welcome to
        </span>
        <br />
        <span style={{color : "#D2093C", fontSize : "44px", fontWeight : "bold"}}>
            Echooling LMS <br /> Plateform
        </span>
        <br />
        <br />
        <span style={{color : "#777777", fontSize : "16px"}}>
        Education is both the act of teaching knowledge to others <br /> and <br />
        the act of receiving knowledge from someone else. <br /> <br />
        Have questions?<a href="">Get Free Guide</a> 
        <br />
        <br />
        <br />
        <br />
        Education also refers to the knowledge received through schooling <br />instruction <br /> 
        and to the institution of teaching as a whole. The main purpose of <br /> education <br />
        is the integral development of a person
        </span>
        <br />
        <button style={{padding : "8px", marginTop : "30px"}}>
        Read More
      </button>
      </div>
      
    </div>
  )
}

export default Lms
