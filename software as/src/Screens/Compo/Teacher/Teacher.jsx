import React from 'react'
import { Link } from 'react-router-dom'

const Teacher = () => {
  return (
    <>
      <div class="accordion accordion-flush" id="accordionFlushExample">
  <div style={{backgroundColor:"#772e50"}} class="border border-black accordion-item">
    <h2 class="accordion-header" id="flush-headingNine">
      <button  style={{color:"white",backgroundColor:"#8E3E63"}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
      Teachers
      </button>
    </h2>
    <div id="flush-collapseNine" class="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <ul>
          <Link className="" to="teacherRegis"><li>Teacher Registeration</li></Link>
          
          <Link className="" to="teacherlist"><li>Teacher List</li></Link>

        </ul>
      </div>
    </div>
  </div>
  </div>

    </>
  )
}

export default Teacher
