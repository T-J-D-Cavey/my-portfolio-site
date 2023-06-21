import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import professor from '../../assets/click-a-bug1.png';

export function ClickABug({mode, modeStyles}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let ctaButton = modeStyles[mode].ctaButton;
    let secondaryButton = modeStyles[mode].secondaryButton;
    let backgroundColor = modeStyles[mode].projectBackgroundOne;
    let color = modeStyles[mode].color;


    return (
        <div>
          <section style={{backgroundColor: backgroundColor, color: color}}>
            <h3>Click-A-Bug</h3>
            <p>An online game to test your reactions: can you save the professor from the bugs in his servers?
            </p>
            <div className='projectPicMainContainer flexBoxCenter'>
              <img className='projectPicMain' src={professor} alt='click a bug screenshot' />
            </div>
            <Button variant={secondaryButton} onClick={handleShow}>
              See details
            </Button>
            <Button variant={ctaButton} onClick={handleClose}>
                  <a href='https://github.com/T-J-D-Cavey' target='_blank'>Visit site</a>
            </Button>
          </section>
          {/* Modal: */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton style={{backgroundColor: backgroundColor, color: color}}>
              <Modal.Title>Click-a-bug</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: backgroundColor, color: color}}>
              <p>An online game to test your reactions: can you save the professor from the bugs in his servers?
              </p>
              <h4>TECHNOLOGIES USED:</h4>
              <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Some tech used</li>
                  <li>Some tech used</li>
                  <li>Some tech used</li>
                  <li>Netlify</li>
              </ul>
              <div className='projectPicMainContainer flexBoxCenter'>
                <img className='projectPicMain' src={professor} alt='click a bug screenshot' />
              </div>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor: backgroundColor, color: color}}>
              <Button variant={secondaryButton} onClick={handleClose}>
                Close
              </Button>
              <Button variant={ctaButton} onClick={handleClose}>
                <a href='https://github.com/T-J-D-Cavey' target='_blank'>Visit site</a>
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
    )
}