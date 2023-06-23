import Button from 'react-bootstrap/Button'

export function HeroBanner({mode, modeStyles}) {

    const ctaButton = modeStyles[mode].ctaButton;
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
        </div>
    )
}