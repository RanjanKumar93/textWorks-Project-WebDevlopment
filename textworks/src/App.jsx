import About from './components/About.jsx'
import Alert from './components/Alert.jsx'
import Navbar from './components/Navbar.jsx'
import Textbody from './components/Textbody.jsx'
import { useState } from 'react'

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const backgroundColorSet = () => {
    switch (mode) {
      case 'dark':
        return '#12035a'
      case 'light':
        return 'white'
      case 'color':
        return '#fa60de'
    }
  }

  const colorSet = () => {
    switch (backgroundColorSet()) {
      case '#12035a':
        return 'white'
      case 'white':
        return 'black'
      case '#fa60de':
        return '#062702'
    }
  }

  const textAreaBGColor = () => {
    switch (backgroundColorSet()) {
      case '#12035a':
        return '#072d02'
      case 'white':
        return 'white'
      case '#fa60de':
        return '#847826'
    }
  }

  const handleDarkClick = () => {
    setMode('dark')
  }

  const handleLightClick = () => {
    setMode('light')
  }

  const handleColorClick = () => {
    setMode('color')
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  return (
    <div style={{ backgroundColor: backgroundColorSet(), color: colorSet() }}>
      <Navbar title='TextWorks' handleDarkClick={handleDarkClick} handleColorClick={handleColorClick} handleLightClick={handleLightClick} />
      <Alert alert={alert} />
      <Textbody heading='Enter Text To Analyze' mode={mode} textAreaBGColor={textAreaBGColor()} showAlert={showAlert} />
      <About />
    </div>
  )
}

export default App