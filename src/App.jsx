import { useState, useEffect } from 'react'; 
import './App.css'
import name from '@rstacruz/startup-name-generator'; 

function App() {
  const [inputName, setInputName] = useState(""); 
  const [suggestedNames, setSuggestedNames] = useState([]); 
  const [displayNames, setDisplayNames] = useState([]); 

  const handleChange = (e) => {
    setInputName(e.target.value); 
    setSuggestedNames(name(inputName));  
  }

  useEffect( () => {
    setDisplayNames(suggestedNames.slice(0,25)); 
  }, [inputName])
  

  return (
    <div className="app">

      <div className='heading'>
          <h1>NAME YOUR WEBSITE</h1> 
          <p>Input your preferred website name and get over 20+ suggestions<br/>Click on your preferred name and get to see available domain names</p>
      </div>

      <form className='app-form'>
        <label>Proposed name</label> 
        <input type="text" onChange={handleChange} /> 
      </form>

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
    </div>
  )
}

export default App
