import React from "react";
import { Bar, Line, Pie } from 'react-chartjs-2';
import {Chart as chartjs} from 'chart.js/auto'
import '../chart/Chart.css'

function Chart(){

  const chardData= {
    labels :["GOOD","BAD"],
    datasets:[{
      label:"BEHAVIORAL ANALYTICS",
      data:[3,2],
      backgroundColor:[" rgb(128, 232, 128)","red"],
    //   borderColor:["BLACK"],
      borderWidth:3
    }]
  }
  return(
    <>
    <div className="chart-main">
        <h1>BEHAVIORAL ANALYTICS</h1>
      <div className="chart-body" >
        <Pie data={chardData} />
      </div>
      </div>
    </>
  )
}
export default Chart;
