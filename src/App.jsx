import { useState } from 'react'
import './App.css'
import Status from './Components/Status'

function App() {
  const [input, setInput] = useState("")
  const [selectedvalue, setSelectedValue] = useState("Inprogress") 
  const [submit, setSubmit] = useState({
    Inprogress: [],
    Pending: [],
    Completed: []
  })

  const handlechange = (event) => {
    setInput(event.target.value)
  }

  const handleSelect = (event) => {
    setSelectedValue(event.target.value)
  }

  const handlesubmit = (event) => {
    event.preventDefault();
    
    setSubmit(prevState => ({
      ...prevState,
      [selectedvalue]: [...prevState[selectedvalue], input] 
    }))
    setInput(''); 
  }

  console.log(">> submit:", submit)
  console.log(">> selected value:", selectedvalue);

  return (
    <>
      <div className='app'>
        <form onSubmit={handlesubmit}>
          <input type='text' placeholder='Enter Task' value={input} onChange={handlechange} />
          <select onChange={handleSelect} value={selectedvalue}>
            <option value="Inprogress">Inprogress</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
          <h2>Status: {selectedvalue}</h2>
          <button type='submit'>Submit</button>
        </form>
      </div>
      <Status submit={submit}/>
    </>
  )
}

export default App
