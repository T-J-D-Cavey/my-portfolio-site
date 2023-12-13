import Button from 'react-bootstrap/Button'
import { ParticlesComponent } from './ParticlesComponent'

export function HeroBanner({mode, modeStyles}) {

    const ctaButton = modeStyles[mode].ctaButton;

    const nameStyle = mode === 'darkMode' ? '#202020': '#FAF9F6';

    return (
        <div className='heroBanner' id='heroBanner'>
            <div className='hero-container'>
                <h1>This site has been <span style={{color: nameStyle}}>replaced</span>.
                    <br />
                    To see my new portfolio site...
                </h1>
                <Button variant={ctaButton} className='projectButton'>
                  <a href='tim-cavey-portfolio.vercel.app'>Click here</a>
                </Button>
                <ParticlesComponent />
            </div>
        </div>
    )
}
