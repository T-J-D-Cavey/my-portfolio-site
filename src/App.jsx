import { useState } from 'react'

import { HeroBanner } from './components/HeroBanner'
import { DarkLightButton } from './components/DarkLightButton'
import { ProjectContainer } from './components/ProjectContainer'
import { CarouselComponent } from './components/CarouselComponent'
import { Footer } from './components/Footer'


import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'

export function App() {
  const [mode, setMode] = useState('darkMode');

  const changeMode = () => {
    const oppositeMode = mode === 'darkMode' ? 'lightMode' : 'darkMode';
    setMode(oppositeMode);
  }
// I should store this object in it's own file and then import and pass it as props
  const modeStyles = {
    darkMode: {
      ctaButton: 'light',
      secondaryButton: 'outline-light',
      color: '#FAF9F6',
      background: '#121212',
      projectBackgroundOne: '#574734',
      projectBackgroundTwo: '#333333',
      projectBackgroundThree: '#193652',
      projectBackgroundFour: '#1D1F20',
    },
    lightMode: {
      ctaButton: 'dark',
      secondaryButton: 'outline-dark',
      color: '#202020',
      background: '#fafafa',
      projectBackgroundOne: '#C3E6EB',
      projectBackgroundTwo: '#F9F3F1',
      projectBackgroundThree: '#E6FFE0',
      projectBackgroundFour: '#FFFBEB',
    },
  };

  const backgroundColor = modeStyles[mode].background;
  const color = modeStyles[mode].color;

  // Do I need a 'page not found' and/or a 'loading' page?

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
