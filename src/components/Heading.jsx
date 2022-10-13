import React from 'react'

const Heading = ({ inputActive }) => {
  return (
    <div className='heading'>
          <h1>NAME YOUR WEBSITE</h1> 
          {
            !inputActive && (
              <p>
                Input your preferred website name and get over 20+ suggestions<br/>
                Click on your preferred name and get to see available domain names
              </p>
            )
          }
    </div>
  )
}

export default Heading