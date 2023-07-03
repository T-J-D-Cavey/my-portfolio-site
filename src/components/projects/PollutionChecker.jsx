import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import pollutionCheckerMain from '../../assets/pollution-checker-main-png.png';
import pollutionCheckerCarousel from '../../assets/pollution-checker-carousel-png.png';


export function PollutionChecker({mode, modeStyles}) {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let ctaButton = modeStyles[mode].ctaButton;
    let secondaryButton = modeStyles[mode].secondaryButton;
    let backgroundColor = modeStyles[mode].projectBackgroundThree;
    let color = modeStyles[mode].color;

    return (
        <div style={{backgroundColor: backgroundColor, color: color}}>
          <section className='projectSection'>
            <div className='projectTextAndImageContainer'>
              <div className='projectsTextContainer'>
                <h3>Pollution-Checker</h3>
                <div>
                  <p>Check the latest air pollution levels near you at the click of a button, 
                    and get practical health advice based on those levels recommended by the World Health Organisation (WHO).
                    </p>
                  <ul>
                    <li>React / Redux</li>
                    <li>World Air Quality Index (WAQI) API</li>
                    <li>Dynamic programming</li>
                  </ul>
                </div>
              </div>
              <div className='projectPicMainContainer flex flexCenter'>
                <img className='projectPicMain' src={pollutionCheckerMain} alt='click a bug screenshot' />
              </div>
            </div>
            <Button variant={secondaryButton} onClick={handleShow} className='projectButton seeDetails'>
              See details
            </Button>
            <Button variant={ctaButton} onClick={handleClose} className='projectButton'>
                  <a href='https://pollution-checker.netlify.app/' target='_blank'>Visit site</a>
            </Button>
          </section>
          {/* Modal: */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton style={{backgroundColor: backgroundColor, color: color}}>
              <Modal.Title>
                <h2>Pollution-Checker</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: '#FAF9F6', color: '#202020'}}>
              <div className='modalTextContainer'>
                <p>
                This SPA hosted on Netlify uses the World Air Quality Index (WAQI) API to check the levels of local air pollution and provide health implications and advice based on the results. 
                The appearance of the app is dynamic based on the local air quality at that time. 
                The call to retrieve the pollution data is made when the app first loads, meaning the results are instantaneous when the user presses the button. 
                There is a basic animation using sun and cloud SVGs which behaves differently based on the pollution results.
                </p>
                <h4>TECHNOLOGIES USED:</h4>
                <ul>
                    <li>React / React Router DOM</li>
                    <li>Redux / React-Redux / Redux Toolkit</li>
                    <li>World Air Quality Index (WAQI) API</li>
                    <li>CSS</li>
                    <li>NPM</li>
                    <li>Git and Github</li>
                    <li>VSCode</li>
                    <li>Netlify</li>
                </ul>
              </div>
              <div className='modalPicContainer flexBoxCenter'>
                <img className='projectPicMain' src={pollutionCheckerCarousel} alt='click a bug screenshot' />
              </div>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor: backgroundColor, color: color}}>
              <Button variant={secondaryButton} onClick={handleClose} className='projectButton'>
                Close
              </Button>
              <Button variant={ctaButton} onClick={handleClose} className='projectButton'>
                <a href='https://pollution-checker.netlify.app/' target='_blank'>Visit site</a>
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
    )
}