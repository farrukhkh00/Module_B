import React from 'react'
import { Link } from 'react-router-dom'


const Subject = () => {

  
  return (
    <>
       <div class="accordion accordion-flush" id="accordionFlushExample">
  <div style={{backgroundColor:"#772e50"}} class="border border-black accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button style={{color:"white",backgroundColor:"#8E3E63"}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       Subjects
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <ul>
          <Link to="subAdd"><li>Subjects Add</li></Link>
          <Link to="subList"><li>Subject List</li></Link>
          
        </ul>
      </div>
    </div>
  </div>
  </div>


    </>
  )
}

export default Subject
