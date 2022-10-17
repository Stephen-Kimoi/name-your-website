import React from 'react'

const Heading = ({ inputActive }) => {
  return (
    <div className='heading'>
          <h1>NAME YOUR WEBSITE</h1> 
          {
            !inputActive && (
              <p>
                Enter your proposed website name and get over 50+ suggestions<br/>
                Click on your preferred name and get to see available domain names
              </p>
            )
          }
    </div>
  )
}

export default Heading