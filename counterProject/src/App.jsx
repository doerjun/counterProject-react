import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]=useState(0)//responsible for state changes
  function addValue(){
    //console.log('value added',Math.random())
    setCounter(counter+1)
    if(counter===20){
      setCounter(20)
    }
  }
  function subValue(){
    setCounter(counter-1)
    if(counter===0){
      setCounter(0)
    }

  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={subValue}>Decrease value</button>
    </>
  )
}

export default App
