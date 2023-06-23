import Button from 'react-bootstrap/Button'
import { Particles } from 'react-tsparticles'

import bug from '../assets/click-a-bug1.png'

export function HeroBanner({mode, modeStyles}) {

    const ctaButton = modeStyles[mode].ctaButton;

    const particleOptions = {
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
        },
      };

    return (
        <div className='heroBanner'>
            <div className='hero-container'>
                <h1>Hi, I'm <span>Tim Cavey</span>.
                    <br />
                    A front-end web developer.
                </h1>
                <Button variant={ctaButton} className='projectButton'>
                  <a href='/#projectID'>View my work</a>
                </Button>
            </div>
            <Particles 
                id='tsparticles'
                options={particleOptions}
            />
        </div>
    )
}