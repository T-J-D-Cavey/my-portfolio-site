import { useState } from 'react'

import { HeroBanner } from './components/HeroBanner'
import { DarkLightButton } from './components/DarkLightButton'
import { ProjectContainer } from './components/ProjectContainer'
import { CarouselComponent } from './components/CarouselComponent'
import { Footer } from './components/Footer'
import { modeStyles } from './assets/stylesObject'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'

export function App() {
  const [mode, setMode] = useState('darkMode');

  const changeMode = () => {
    const oppositeMode = mode === 'darkMode' ? 'lightMode' : 'darkMode';
    setMode(oppositeMode);
  }

  const backgroundColor = modeStyles[mode].background;
  const color = modeStyles[mode].color;

  return (
    <div style={{backgroundColor: backgroundColor, color: color}}>
      <HeroBanner mode={mode} modeStyles={modeStyles} />
      <DarkLightButton mode={mode} changeMode={changeMode} modeStyles={modeStyles} />
      <CarouselComponent mode={mode} modeStyles={modeStyles}/>
      <ProjectContainer mode={mode} modeStyles={modeStyles}/>
      <Footer mode={mode} modeStyles={modeStyles}/>
    </div>
  )
}
