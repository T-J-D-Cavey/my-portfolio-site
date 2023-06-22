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
// These styles all need adjusting (jut not the ones specific to bootstrap)
  const modeStyles = {
    darkMode: {
      ctaButton: 'light',
      secondaryButton: 'outline-light',
      color: '#FAF9F6',
      projectBackgroundOne: '#574734',
      projectBackgroundTwo: '#121212',
      projectBackgroundThree: '#193652',
      projectBackgroundFour: '#1D1F20',
    },
    lightMode: {
      ctaButton: 'dark',
      secondaryButton: 'outline-dark',
      color: '#202020',
      projectBackgroundOne: '#C3E6EB',
      projectBackgroundTwo: '#F9F3F1',
      projectBackgroundThree: '#E6FFE0',
      projectBackgroundFour: '#FFFBEB',
    },
  };

  return (
    <div>
      <HeroBanner mode={mode}/>
      <DarkLightButton mode={mode} changeMode={changeMode} />
      <ProjectContainer mode={mode} modeStyles={modeStyles}/>
      <Footer mode={mode}/>
    </div>
  )
}

// Add a carousel component to list the tech used for this portfolio project