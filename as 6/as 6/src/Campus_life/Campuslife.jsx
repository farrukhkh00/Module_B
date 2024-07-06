import React from 'react'
import styles from "./Campuslife.module.css"
import logo from "../assets/acd.png"
const Campuslife = () => {
  return (
    <div className={styles.parent_div}>
      <h1 className={styles.heading1}>Campus Life</h1>
      <img style={{marginLeft : "-110px",height : "auto",width : "200px"}} src={logo} alt="" />
    </div>
  )
}

export default Campuslife
