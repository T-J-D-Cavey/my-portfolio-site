import { HeroBanner } from './components/HeroBanner'
import { DarkLightButton } from './components/DarkLightButton'
import { ProjectContainer } from './components/ProjectContainer'
import { Footer } from './components/Footer'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
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