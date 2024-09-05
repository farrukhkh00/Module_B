import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Admission = () => {
  return (
    <>
         <div class="accordion accordion-flush" id="accordionFlushExample">
  <div style={{backgroundColor:"#772e50"}} class="border border-black accordion-item">
    <h2 class="accordion-header" id="flush-headingSeven">
      <button style={{color:"white",backgroundColor:"#8E3E63"}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
       Admission
      </button>
    </h2>
    <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <ul>
           <Link className="" to="AdmissionForm"><li>Admission Form</li></Link>

        </ul>
      </div>
    </div>
  </div>
  </div>    
    </>
  )
}

export default Admission
