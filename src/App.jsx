import { useState } from 'react'

import { HeroBanner } from './components/HeroBanner'
import { DarkLightButton } from './components/DarkLightButton'
import { ProjectContainer } from './components/ProjectContainer'
import { Footer } from './components/Footer'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'

export function App() {
  const [mode, setMode] = useState('darkMode');

  const changeMode = () => {
    const oppositeMode = mode === 'darkMode' ? 'lightMode' : 'darkMode';
    setMode(oppositeMode);
  }

  return (
    <div>
      <HeroBanner mode={mode}/>
      <DarkLightButton mode={mode} changeMode={changeMode} />
      <ProjectContainer mode={mode}/>
      <Footer mode={mode}/>
    </div>
  )
}

// Add a carousel component to list the tech used for this portfolio project