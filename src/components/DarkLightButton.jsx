import moon from '../assets/moonIcon.png';
import sun from '../assets/sunIcon.svg';

export function DarkLightButton({mode, changeMode, modeStyles}) {
    const clickHanlder = (e) => {
        e.preventDefault();
        changeMode();
    }
    const src = mode === 'darkMode' ? moon : sun;
    const backgroundColor = modeStyles[mode].background;
    const color = modeStyles[mode].color;

    return (
        // I may need to change this structure, depends on how the div interacts with other elements
        // I want the button to stick to the top only after it reaches the top by scroll. 
        <div>
            {/* I should be able to avoid a Bootstrap component here as just need a Sun / Moon icon, 
            which is affected by the mode state and changes the file dynamically */}
              <button className='modeButton' style={{backgroundColor: backgroundColor, color: color}} onClick={clickHanlder}>
                <img src={src} alt='dark or light mode button' />
              </button>
        </div>
    )
}