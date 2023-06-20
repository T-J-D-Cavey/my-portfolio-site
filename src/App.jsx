import { HeroBanner } from './components/HeroBanner'
import { DarkLightButton } from './components/DarkLightButton'
import { ProjectContainer } from './components/projects/ProjectContainer'
import { Footer } from './components/Footer'

import './App.css'

export function App() {

  return (
    <div>
      <HeroBanner />
      <DarkLightButton />
      <ProjectContainer />
      <Footer />
    </div>
  )
}