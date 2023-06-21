import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function ClickABug({mode, modeStyles}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let ctaButton = modeStyles[mode].ctaButton;
    let secondaryButton = modeStyles[mode].secondaryButton;




    return (
        <div>
          <section>
            <h3>Click-A-Bug</h3>
            <p>An online game to test your reactions: can you save the professor from the bugs in his servers?
            </p>
            <h4>*Picture to go here</h4>
            <Button variant={secondaryButton} onClick={handleShow}>
              See details
            </Button>
            <Button variant={ctaButton} onClick={handleClose}>
                  <a href='https://github.com/T-J-D-Cavey' target='_blank'>Visit site</a>
            </Button>
          </section>
          {/* Modal: */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Click-a-bug</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
              <h3>Image to go here</h3>
            </Modal.Body>
            <Modal.Footer>
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