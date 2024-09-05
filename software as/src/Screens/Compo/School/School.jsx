import React from 'react'
import { Link } from 'react-router-dom'

const School = () => {
  return (
    <>
      <div class="accordion accordion-flush" id="accordionFlushExample">
  <div style={{backgroundColor:"#772e50"}} class="border border-black accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button style={{color:"white",backgroundColor:"#8E3E63"}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
       School
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <ul>
          <Link className="" to="studentRegis"><li>Student Registeration</li></Link>
          
          <Link className="" to="teacherRegis"><li>Teacher Registeration</li></Link>

        </ul>
      </div>
    </div>
  </div>
  </div>

    </>
  )
}

export default School;
