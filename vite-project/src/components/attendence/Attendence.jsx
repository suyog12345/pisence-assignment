import '../attendence/Attendence.css'
import Chart from '../chart/Chart';
const Attendence = () => {
    const data = {
      "NAME": "PISENCE",
      "ATTENDANCE": {
        "monday": { "date": "21/7/23", "fn": "present", "an": "present" },
        "tuesday": { "date": "22/7/23", "fn": "absent", "an": "present" },
        "wednesday": { "date": "23/7/23", "fn": "present", "an": "absent" },
        "thursday": { "date": "24/7/23", "fn": "present", "an": "present" },
        "friday": { "date": "25/7/23", "fn": "absent", "an": "present" }
      },
      "homework": ["english", "science", "maths"],
      "Behavioral Analytics": ["good", "bad", "good", "bad", "good"]
    };
  
    const days = Object.keys(data.ATTENDANCE);

  return (
    <div>

      <table>
        <thead>
          <tr>
            {days.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {days.map(day => (
              <td key={day}>{data.ATTENDANCE[day].date}</td>
            ))}
          </tr>
          <span className='attendence-fn'>FN</span>
          <tr>
            {days.map(day => (
              <td
                key={day}
                className={data.ATTENDANCE[day].fn === 'absent' ? 'red-box' : 'green-box'}
              >
                
              </td>
            ))}
          </tr>
          <span className='attendence-an'>AN</span>
          <tr>
            {days.map(day => (
              <td
                key={day}
                className={data.ATTENDANCE[day].an === 'absent' ? 'red-box' : 'green-box'}
              >
                
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      
    </div>
  );
};
  
  export default Attendence;