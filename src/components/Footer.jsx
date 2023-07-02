import githubIcon from '../assets/githubIcon.svg'
import upChevron from '../assets/upChevron.png'
import linkedInIcon from '../assets/linkedInIcon.svg'

export function Footer({mode, modeStyles}) {

    const backgroundColor = modeStyles[mode].background;
    return (
        <div className='footerContainer flex flexColumn'>
            <ul className="flex">
                <li><button style={{backgroundColor}}><a href='https://github.com/T-J-D-Cavey' target='_blank'><img src={githubIcon} alt="github Icon"></img></a></button></li>
                <li><button style={{backgroundColor}}><a href='#heroBanner'><img src={upChevron} alt="Up arrow"></img></a></button></li>
                <li><button style={{backgroundColor}}><a href='https://uk.linkedin.com/in/timothy-cavey-69b453169' target='_blank'><img src={linkedInIcon} alt="linkedIn Icon"></img></a></button></li>
            </ul>
            <p>Made by Tim Cavey</p>
        </div>
    )
}