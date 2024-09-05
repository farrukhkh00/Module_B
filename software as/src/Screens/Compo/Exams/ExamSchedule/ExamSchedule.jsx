import React from 'react';
import './ExamSchedule.css';

const ExamSchedule = () => {
  const examData = [
    { subject: 'English', date: '2024-09-01', time: '09:00 AM' },
    { subject: 'Urdu', date: '2024-09-02', time: '10:00 AM' },
    { subject: 'Maths', date: '2024-09-03', time: '11:00 AM' },
    { subject: 'Science', date: '2024-09-04', time: '12:00 PM' },
    { subject: 'History', date: '2024-09-05', time: '01:00 PM' },
    { subject: 'Islamiat', date: '2024-09-06', time: '02:00 PM' },
  ];

  return (
    <div className="exam-schedule-container">
      <h2>Exam Schedule</h2>
      {examData.map((exam, index) => (
        <div key={index} className="exam-schedule-item">
          <h3>{exam.subject}</h3>
          <p>Date: {exam.date}</p>
          <p>Time: {exam.time}</p>
          <button className="detail-button">View More Detail</button>
        </div>
      ))}
    </div>
  );
};

export default ExamSchedule;
