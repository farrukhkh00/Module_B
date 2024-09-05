import React from 'react';
import './FeeStructure.css';

const FeeStructure = () => {
  const classes = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="fee-structure-container">
      <h2>Fee Structure</h2>
      <table className="fee-table">
        <thead>
          <tr>
            <th>Class</th>
            <th>Monthly Fee</th>
            <th>Yearly Fee</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((e,i) => (
            <tr key={e}>
              <td>Class {e}</td>
              <td>Rs. {500+(i*100)}</td>
              <td>Rs. {6000+(i*1200)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeeStructure;
