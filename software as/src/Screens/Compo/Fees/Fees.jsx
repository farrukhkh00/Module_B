import React from 'react'
import { Link } from 'react-router-dom'

const Fees = () => {
  return (
    <>
      <div class="accordion accordion-flush" id="accordionFlushExample">
  <div style={{backgroundColor:"#772e50"}} class="border border-black accordion-item">
    <h2 class="accordion-header" id="flush-headingSix">
      <button style={{color:"white",backgroundColor:"#8E3E63"}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
       Fees
      </button>
    </h2>
    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <ul>
          <Link className="" to="feeStruc"><li>Fee Structure</li></Link>
          <Link className="" to="feeVoucher"><li>Fee Voucher</li></Link>
          <Link className="" to="feeSubmission"><li>Fee Submission</li></Link>

        </ul>
      </div>
    </div>
  </div>
  </div>

    </>
  )
}

export default Fees
