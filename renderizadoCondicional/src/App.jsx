import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [isShow, setIsShow] = useState(true)  
  const [modeView, setModeView] = useState(true)
  function showMe() {
    setIsShow(!isShow)       
    setModeView(!modeView)
  }

  return (
    <>
    <div className={modeView ? "body_dark" : "body_light"}>
      <button onClick={showMe}>Mostrar - Ocultar</button>
      {isShow?
        <img src="https://cdn0.bioenciclopedia.com/es/posts/2/3/0/leon_32_orig.jpg" alt="Imagen Leon" />
        :<>Se oculto la Imagen</>
      }
    </div>
    </>
  )
}

export default App
