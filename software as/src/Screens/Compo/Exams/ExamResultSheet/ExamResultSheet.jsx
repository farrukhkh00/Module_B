import React from 'react';
import './ExamResultSheet.css';

const ExamResultSheet = () => {
  // Example data for the result sheet
  const resultsData = [
    { name: 'John Doe', rollNumber: '01', grade: 'A+' },
    { name: 'Jane Smith', rollNumber: '02', grade: 'A' },
    { name: 'Michael Johnson', rollNumber: '03', grade: 'B+' },
    { name: 'Emily Davis', rollNumber: '04', grade: 'A-' },
    { name: 'Daniel Brown', rollNumber: '05', grade: 'B' },
    { name: 'Jessica Wilson', rollNumber: '06', grade: 'A+' },
  ];

  return (
    <div className="result-sheet-container">
      <h2>Exam Result Sheet</h2>
      {resultsData.map((result, index) => (
        <div key={index} className="result-sheet-item">
          <h3>{result.name}</h3>
          <p>Roll Number: {result.rollNumber}</p>
          <p>Grade: {result.grade}</p>
        </div>
      ))}
    </div>
  );
};

export default ExamResultSheet;
