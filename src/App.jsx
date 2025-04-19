import { useState } from 'react'
import among from './assets/among.png'
import ship from './assets/ship.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Welcome to the Crewmate Creator!</h1>
      <h3>Here is where you can create your own set of crewmates before sending them off into space!</h3>

      <img src={among} className='crew'></img>
      <img src={ship} className='ship'></img>

      <div className='customs'>

      </div>

    </div>
  )
}

export default App
