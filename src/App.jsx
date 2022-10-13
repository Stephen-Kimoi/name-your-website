import { useState, useEffect } from 'react'; 
import './App.css'
import name from '@rstacruz/startup-name-generator'; 
import Heading from './components/Heading';

function App() {
  const [inputName, setInputName] = useState(""); 
  const [suggestedNames, setSuggestedNames] = useState([]); 
  const [displayNames, setDisplayNames] = useState([]); 
  const [inputActive, setInputActive] = useState(false); 
  // const [displayNamesAvailable, setDisplayNamesAvailable] = useState(false); 

  const handleChange = (e) => {
    setInputName(e.target.value); 
    setSuggestedNames(name(inputName));  
  }

  const handleButtonClean = (e) => {
    e.preventDefault(); 
    setInputName("");
    setDisplayNames([]);
    setInputActive(false); 
  }

  useEffect( () => {
    setDisplayNames(suggestedNames.slice(0,25)); 
  }, [inputName]); 


  return (
    <div className="app">

      <Heading inputActive={inputActive} />

      <form className='app-form'>
        <input type="text" placeholder="Proposed name" onChange={handleChange} onFocus={ () => setInputActive(true)}/> 
        <button className='button-clean' onClick={handleButtonClean}>Clean</button>
      </form>

      {
        displayNames.length !== 0 && (
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

    </div>
  )
}

export default App
