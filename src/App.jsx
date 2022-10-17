import { useState, useEffect } from 'react'; 
import './App.css'
import name from '@rstacruz/startup-name-generator'; 
import Heading from './components/Heading';
import AppForm from './components/AppForm';
import DisplayNames from './components/DisplayNames';

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
    window.location.reload(); 
  }

  useEffect( () => {
    setDisplayNames(suggestedNames.slice(0,50)); 
  }, [inputName]); 


  return (
    <div className="app">

      <Heading inputActive={inputActive} />

      <AppForm handleChange={handleChange} setInputActive={setInputActive} handleButtonClean={handleButtonClean} /> 
      
      {
        displayNames.length !== 0 && (
            <DisplayNames displayNames={displayNames} /> 
        )
      } 

    </div>
  )
}

export default App
