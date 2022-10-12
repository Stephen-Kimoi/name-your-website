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

      <form className='app-form'>
        <label>Proposed name</label> 
        <input type="text" onChange={handleChange} /> 
      </form>

      <div>
        {
          displayNames.map( name => {
            return (
              <div key={name}>
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
