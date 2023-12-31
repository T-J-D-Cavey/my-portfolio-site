import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import clickABugMain from '../../assets/click-a-bug-main-png.png';
import clickABugCarousel from '../../assets/click-a-bug-carousel-png.png';

export function ClickABug({mode, modeStyles}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const ctaButton = modeStyles[mode].ctaButton;
    const secondaryButton = modeStyles[mode].secondaryButton;
    const backgroundColor = modeStyles[mode].projectBackgroundThree;
    const color = modeStyles[mode].color;

    return (
        <div style={{backgroundColor: backgroundColor, color: color}}>
          <section className='projectSection'>
            <div className='projectTextAndImageContainer'>
              <div className='projectsTextContainer'>
                <h3>Click-A-Bug</h3>
                <div>
                  <p>An online game to test your reactions: can you save the professor from the bugs in his servers?</p>
                  <ul>
                    <li>React web app game</li>
                    <li>Complex state managed by Redux</li>
                    <li>Retro 80's style and design</li>
                  </ul>
                </div>
              </div>
              <div className='projectPicMainContainer flex flexCenter'>
                <img className='projectPicMain' src={clickABugMain} alt='click a bug screenshot' />
              </div>
            </div>
            <Button variant={secondaryButton} onClick={handleShow} className='projectButton seeDetails'>
              See details
            </Button>
            <Button variant={ctaButton} onClick={handleClose} className='projectButton'>
                  <a href='https://click-a-bug.netlify.app/' target='_blank'>Visit site</a>
            </Button>
          </section>
          {/* Modal: */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton style={{backgroundColor: backgroundColor, color: color}}>
              <Modal.Title>
                <h2>Click-a-bug</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: '#FAF9F6', color: '#202020'}}>
              <div className='modalTextContainer'>
                <p>
                Click-a-bug is a single-page-application (SPA) showcasing React and Redux managing an app with a complex state. 
                The app imitates a 'whack-a-mole' game, where users see a grid (of servers) and have to 'click' (or tap) on any bugs that appear
                whilst avoiding clicking on anything else that pops up. 
                Features include a countdown timer, a score and a lives-left metric. 
                Click on the wrong thing or take too long and the bugs will take over!
                  </p>
                <h4>TECHNOLOGIES USED:</h4>
                <ul>
                    <li>React / React Router DOM</li>
                    <li>Redux / React Redux / Redux Toolkit</li>
                    <li>CSS</li>
                    <li>NPM</li>
                    <li>VSCode</li>
                    <li>Git and Github</li>
                    <li>Netlify</li>
                </ul>
              </div>
              <div className='modalPicContainer flexBoxCenter'>
                <img className='projectPicMain' src={clickABugCarousel} alt='click a bug screenshot' />
              </div>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor: backgroundColor, color: color}}>
              <Button variant={secondaryButton} onClick={handleClose} className='projectButton'>
                Close
              </Button>
              <Button variant={ctaButton} onClick={handleClose} className='projectButton'>
                <a href='https://click-a-bug.netlify.app/' target='_blank'>Visit site</a>
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
    )
}