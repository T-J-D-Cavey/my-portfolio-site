import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import treaditMain from '../../assets/treadit-main-png.png';
import treaditCarousel from '../../assets/treadit-carousel-png.png';

export function Treadit({mode, modeStyles}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let ctaButton = modeStyles[mode].ctaButton;
    let secondaryButton = modeStyles[mode].secondaryButton;
    let backgroundColor = modeStyles[mode].projectBackgroundTwo;
    let color = modeStyles[mode].color;

    return (
        <div style={{backgroundColor: backgroundColor, color: color}}>
          <section className='projectSection'>
            <div className='projectTextAndImageContainer'>
              <div className='projectsTextContainer'>
                <h3>Treadit</h3>
                <div>
                  <p>A Reddit-replica for hikers. 
                    Browse a list of the best outdoor & adventure sub-reddits, or create your own filters and scroll the results. 
                    </p>
                  <ul>
                    <li>React and Redux</li>
                    <li>Reddit API</li>
                    <li>Jest and Cypress testing</li>
                  </ul>
                </div>
              </div>
              <div className='projectPicMainContainer flex flexCenter'>
                <img className='projectPicMain' src={treaditMain} alt='click a bug screenshot' />
              </div>
            </div>
            <Button variant={secondaryButton} onClick={handleShow} className='projectButton seeDetails'>
              See details
            </Button>
            <Button variant={ctaButton} onClick={handleClose} className='projectButton'>
                  <a href='https://treadit.netlify.app/' target='_blank'>Visit site</a>
            </Button>
          </section>
          {/* Modal: */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton style={{backgroundColor: backgroundColor, color: color}}>
              <Modal.Title>
                <h2>Treadit</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: '#FAF9F6', color: '#202020'}}>
              <div className='modalTextContainer'>
                <p>
                This SPA hosted on Netlify uses the Reddit JSON API to asynchronously fetch Reddit posts based on the user's filter and search parameters. 
                It has a default filter applied, and contains personally selected sub-reddits that appeal to hikers, walkers and lovers of adventure and the great outdoors. 
                The user interface is a feed of the post results and includes its content, media and engagement metrics. 
                The pictures in these posts are very often beautifully scenic and dynamic by design. Unit, component and end-to-end (E2E) tests using Jest and Cypress frameworks.
                </p>
                <h4>TECHNOLOGIES USED:</h4>
                <ul>
                    <li>React / React Router DOM</li>
                    <li>Redux / React-Redux / Redux Toolkit</li>
                    <li>Reddit JSON API</li>
                    <li>Cypress testing library</li>
                    <li>Jest testing library</li>
                    <li>Mock Server Worker</li>
                    <li>CSS</li>
                    <li>NPM</li>
                    <li>Git / Github</li>
                    <li>VSCode</li>
                    <li>Netlify</li>
                </ul>
              </div>
              <div className='modalPicContainer flexBoxCenter'>
                <img className='projectPicMain' src={treaditCarousel} alt='click a bug screenshot' />
              </div>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor: backgroundColor, color: color}}>
              <Button variant={secondaryButton} onClick={handleClose} className='projectButton'>
                Close
              </Button>
              <Button variant={ctaButton} onClick={handleClose} className='projectButton'>
                <a href='https://treadit.netlify.app/' target='_blank'>Visit site</a>
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
    )
}