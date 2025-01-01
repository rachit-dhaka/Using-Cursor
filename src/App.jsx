import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const ClickHandle = () => {
    alert("Bola na mat dabana")
  }
  const MouseHandle = () => {
    alert("Bola na mouse mat lekar aana mere upar ")
  }
  

  return (
    <div className='something'>
      <p onMouseOver={MouseHandle} > 
        Iske upar mouse mat lekar aana
      </p>
      <button onClick={ClickHandle}>
        Dabana mat please
      </button>
    </div>
  )
}

export default App
