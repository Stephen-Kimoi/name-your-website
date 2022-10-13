import React from 'react'

const AppForm = ({ handleChange, handleButtonClean, setInputActive}) => {
  return (
    <form className='app-form'>
        <input type="text" placeholder="Proposed name" onChange={handleChange} onFocus={ () => setInputActive(true)}/> 
        <button className='button-clean' onClick={handleButtonClean}>Clean</button>
      </form>
  )
}

export default AppForm