import React from 'react'
import styles from "./Cards.module.css"

const Cards = () => {
  return (
    <div className={`${styles.parent_c} mt-4 mb-4`} >
      <div className={styles.child_a}><p style={{color : "white", marginTop : "220px", fontWeight : "bold",fontSize : "24px"}}>Lets talk Science</p></div>
      <div className={styles.child_b}><p style={{color : "white", marginTop : "220px", fontWeight : "bold",fontSize : "24px"}}>Innovative Courses</p></div>
      <div className={styles.child_c}><p style={{color : "white", marginTop : "220px", fontWeight : "bold",fontSize : "24px"}}>Cloud Storage</p></div>
      <div className={styles.child_d}><p style={{color : "white", marginTop : "220px", fontWeight : "bold",fontSize : "24px"}}>Online Education</p></div>
    </div>
  )
}

export default Cards
