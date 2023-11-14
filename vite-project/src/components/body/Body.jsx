import React from 'react'
import Attendence from '../attendence/Attendence'
import '../body/Body.css'
import Homework from '../homework/Homework'
import Chart from '../chart/Chart'
const Body = () => {
  return (
    <>
    <div className='body'>
    <div className='body-main'>
    <h1 className='heading-left'>HELLO PISENCE!</h1>
    <h1>ATTENDENCE</h1>
    <Attendence/>
    <div className='body-footer'>
    <Homework/>
    <Chart />
    </div>
    </div>
    </div>
    </>
  )
}

export default Body