import React from 'react'
import Navbar from './Navbar'
import UserDetails from './UserDetails'
import './home.css'
import Chart from './Chart'
import RetirmentStatergy from './RetirmentStatergy'

function Home() {
  return (
    <>
    <div className='home'>
    <Navbar/>
        <UserDetails/>
       
        <Chart/>
        <RetirmentStatergy/>
  
        

    </div>
    






       
    
    
    
    </>
  )
}

export default Home