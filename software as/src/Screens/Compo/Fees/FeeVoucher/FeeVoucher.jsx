import React from 'react';
import './FeeVoucher.css';
import { useNavigate } from 'react-router-dom';

const FeeVoucher = () => {
  const classes = Array.from({ length: 10 }, (_, i) => i + 1);

  const navigate = useNavigate();
  return (
    <div className="voucher-container">
      <h2>Fee Voucher</h2>
      <div className="voucher-grid">
        {classes.map((e,i) => (
          <div key={i} className="voucher-card">
            <div className="voucher-header">
              <h3>Class {e}</h3>
            </div>
            <div className="voucher-body">
              <p><strong>Monthly Fee:</strong> Rs. {500+(i*100)}</p>
              <p><strong>Yearly Fee:</strong> Rs. {6000+(i*1200)}</p>
            </div>
            <div className="voucher-footer">
              <button onClick={()=>navigate("/dash/feeSubmission")} className="pay-now-btn">Pay Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeeVoucher;
