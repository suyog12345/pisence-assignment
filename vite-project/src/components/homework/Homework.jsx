import React from 'react'
import '../homework/Homework.css'
const Homework = () => {
    const data = {
        "NAME": "PISENCE",
        "ATTENDANCE": {
          "monday": { "date": "21/7/23", "fn": "present", "an": "present" },
          "tuesday": { "date": "22/7/23", "fn": "absent", "an": "present" },
          "wednesday": { "date": "23/7/23", "fn": "present", "an": "absent" },
          "thursday": { "date": "24/7/23", "fn": "present", "an": "present" },
          "friday": { "date": "25/7/23", "fn": "absent", "an": "present" }
        },
        "homework": ["ENGLISH", "SCIENCE", "MATHS","SOCIAL","TAMIL"],
        "Behavioral Analytics": ["good", "bad", "good", "bad", "good"]
      };
  return (
    <>
    <div className="hw-main">
    <div className='hw-body'>Homeworks</div>
    <div className='hw-items'>
    <ul>
      {data.homework.map((subject, index) => (
        <div key={index}>{subject}</div>
      ))}
    </ul>
    </div>
    </div>
</>
  )
}

export default Homework