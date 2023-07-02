import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import ramenPopUpMain from '../../assets/ramen-pop-up-main.jpg'
import ramenPopUpCarousel from '../../assets/ramen-pop-up-carousel.jpg'

export function RamenPopup({mode, modeStyles}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let ctaButton = modeStyles[mode].ctaButton;
    let secondaryButton = modeStyles[mode].secondaryButton;
    let backgroundColor = modeStyles[mode].projectBackgroundFour;
    let color = modeStyles[mode].color;
// I need to redo the pictures so that they're very long portrait

    return (
        <div style={{backgroundColor: backgroundColor, color: color}}>
          <section className='projectSection'>
            <div className='projectTextAndImageContainer'>
              <div className='projectsTextContainer'>
                <h3>Ramen pop-up</h3>
                <div>
                  <p>A simple and stylish site to promote the upcoming locations and dates for Miura Anjin's pop-up ramen restaurant.</p>
                  <ul>
                    <li>React with Vite</li>
                    <li>OpenLayers mapping library</li>
                    <li>CSS animations</li>
                  </ul>
                </div>
              </div>
              <div className='projectPicMainContainer flex flexCenter'>
                <img className='projectPicMain' src={ramenPopUpMain} alt='click a bug screenshot' />
              </div>
            </div>
            <Button variant={secondaryButton} onClick={handleShow} className='projectButton seeDetails'>
              See details
            </Button>
            <Button variant={ctaButton} onClick={handleClose} className='projectButton'>
                  <a href='https://github.com/T-J-D-Cavey' target='_blank'>Visit site</a>
            </Button>
          </section>
          {/* Modal: */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton style={{backgroundColor: backgroundColor, color: color}}>
              <Modal.Title>
                <h2>Ramen pop-up</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: '#FAF9F6', color: '#202020'}}>
              <div className='modalTextContainer'>
                <p>
                Miura Anjin's pop-up ramen restaurant now has an online presence. 
                This talented ramen chef is able to share this SPA when they want to spread the word about their latest pop-up restaurant date and location. 
                This site is designed to be quick to update with new locations and dates. 
                Changes to the remote repository on Github are updated on Netlify's servers within a few minutes. 
                This app uses the Open Layers mapping library for an embedded map widget showing the location of the latest pop-up site. 
                </p>
                <h4>TECHNOLOGIES USED:</h4>
                <ul>
                    <li>React with Vite</li>
                    <li>OpenLayers mapping library</li>
                    <li>CSS</li>
                    <li>NPM</li>
                    <li>Git / Github</li>
                    <li>VSCode</li>
                    <li>Netlify</li>
                </ul>
              </div>
              <div className='modalPicContainer flexBoxCenter'>
                <img className='projectPicMain' src={ramenPopUpCarousel} alt='click a bug screenshot' />
              </div>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor: backgroundColor, color: color}}>
              <Button variant={secondaryButton} onClick={handleClose} className='projectButton'>
                Close
              </Button>
              <Button variant={ctaButton} onClick={handleClose} className='projectButton'>
                <a href='https://github.com/T-J-D-Cavey' target='_blank'>Visit site</a>
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
    )
}