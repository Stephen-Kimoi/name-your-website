import React from 'react'

const DisplayNames = ({ displayNames }) => {
  return (
    <div className='displayed-names'>
        {
        displayNames.map( name => {
            return (
            <div key={name} className="single-name"> 
                <a
                href={`https://www.namecheap.com/domains/registration/results/?domain=${name}`}
                target="_blank"
                >
                { name }
                </a>
            </div>
            )
        })
        }
    </div>
  )
}

export default DisplayNames