import Button from 'react-bootstrap/Button'
import { ParticlesComponent } from './ParticlesComponent'

export function HeroBanner({mode, modeStyles}) {

    const ctaButton = modeStyles[mode].ctaButton;

    const nameStyle = mode === 'darkMode' ? '#202020': '#FAF9F6';

    return (
        <div className='heroBanner' id='heroBanner'>
            <div className='hero-container'>
                <h1>Hi, I'm <span style={{color: nameStyle}}>Tim Cavey</span>.
                    <br />
                    A front-end web developer.
                </h1>
                <Button variant={ctaButton} className='projectButton'>
                  <a href='/#projectID'>View my work</a>
                </Button>
                <ParticlesComponent mode={mode} modeStyles={modeStyles} />
            </div>
        </div>
    )
}