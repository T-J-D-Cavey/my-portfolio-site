import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import professor from '../../assets/click-a-bug1.png';
import game from '../../assets/click-a-bug2.png';

export function ClickABug({mode, modeStyles}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let ctaButton = modeStyles[mode].ctaButton;
    let secondaryButton = modeStyles[mode].secondaryButton;
    let backgroundColor = modeStyles[mode].projectBackgroundOne;
    let color = modeStyles[mode].color;
// I need to redo the pictures so that they're very long portrait

    return (
        <div style={{backgroundColor: backgroundColor, color: color}}>
          <section className='projectSection'>
            <div className='projectTextAndImageContainer'>
              <div className='projectsTextContainer'>
                <h3>Click-A-Bug</h3>
                <div>
                  <p>An online game to test your reactions: can you save the professor from the bugs in his servers?</p>
                  <ul>
                    <li>Demo React project</li>
                    <li>Complex state managed by Redux</li>
                    <li>Client-side-rendering hosted on Netlify</li>
                  </ul>
                </div>
              </div>
              <div className='projectPicMainContainer flex flexCenter'>
                <img className='projectPicMain' src={professor} alt='click a bug screenshot' />
              </div>
            </div>
            <Button variant={secondaryButton} onClick={handleShow} className='projectButton'>
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
                <h2>Click-a-bug</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: backgroundColor, color: color}}>
              <div className='modalTextContainer'>
                <p>
                  Click-a-bug is a single-page-application (SPA) project showcasing React and Redux managing an app with complex state.
                  The app imitates a 'whack-a-mole' game, where users see a grid (of servers) and have to 'click' (or tap) on any bugs that appear. 
                  There's a timer, a score and a lives-left metric. 
                  Click on the wrong thing or take too long, and the bugs will take over!
                  </p>
                <h4>TECHNOLOGIES USED:</h4>
                <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>NPM</li>
                    <li>CSS</li>
                    <li>VSCode</li>
                    <li>Git and Github</li>
                    <li>Netlify</li>
                </ul>
              </div>
              <div className='modalPicContainer flexBoxCenter'>
                <img className='projectPicMain' src={game} alt='click a bug screenshot' />
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