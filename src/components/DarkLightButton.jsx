import Button from 'react-bootstrap/Button';
import moon from '../assets/moonIcon.png';
import sun from '../assets/sunIcon.svg';

export function DarkLightButton({mode, changeMode, modeStyles}) {
    const clickHanlder = (e) => {
        e.preventDefault();
        changeMode();
    }
    const src = mode === 'darkMode' ? moon : sun;
    let ctaButton = modeStyles[mode].ctaButton;
    const backgroundColor = modeStyles[mode].background;
    const color = modeStyles[mode].color;

    return (
        <div>
              <Button variant={ctaButton} className='modeButton' onClick={clickHanlder}>
                <img src={src} alt='dark or light mode button' />
              </Button>
        </div>
    )
}