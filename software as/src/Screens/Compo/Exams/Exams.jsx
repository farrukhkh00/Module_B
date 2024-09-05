import React from 'react'
import { Link } from 'react-router-dom'

const Exams = () => {
  return (
    <>
      <div class="accordion accordion-flush" id="accordionFlushExample">
  <div style={{backgroundColor:"#772e50"}} class="border border-black accordion-item">
    <h2 class="accordion-header" id="flush-headingEight">
      <button style={{color:"white",backgroundColor:"#8E3E63"}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
       Exams
      </button>
    </h2>
    <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <ul>
           <Link className="" to="examSchedule"><li>Exam Schedule</li></Link>
           <Link className="" to="examResultSheet"><li>Exam Result</li></Link>

        </ul>
      </div>
    </div>
  </div>
  </div>     
    </>
  )
}

export default Exams
