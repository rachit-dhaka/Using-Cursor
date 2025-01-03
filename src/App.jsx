import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EventHandling from './Components/EventHandling'

function App() {

  const ClickHandle = () => {
    alert("Bola na mat dabana")
  }
  
  const MouseHandle = () => {
    alert("Bola na mouse mat lekar aana mere upar ")
  }
  

  return (
    <div className='something'>

      <EventHandling />

      <p onMouseOver={MouseHandle} className='styling'>
      
        Iske upar mouse mat lekar aana
      </p>

      <button onClick={ClickHandle} className='styling'>
        Dabana mat please
      </button>

    </div>
  )
}

export default App
