import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://media.giphy.com/media/iOsvtCFxu9U4rOtKRe/giphy.gif" target="_blank">
          <img src={"https://media.giphy.com/media/iOsvtCFxu9U4rOtKRe/giphy.gif"} className="logo" alt="Vite logo" style={{ width: '500px', height: '500px' }}/>
        </a>
      </div>
      <h1>Le m**t diya tere thought pr.</h1>
     
    </>
  )
}

export default App
