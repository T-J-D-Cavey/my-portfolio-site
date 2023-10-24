import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import xChangeMain from "../../assets/click-a-bug-main-png.png";
import xChangeCarousel from "../../assets/click-a-bug-main-png.png";

export function XChange({ mode, modeStyles }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let ctaButton = modeStyles[mode].ctaButton;
  let secondaryButton = modeStyles[mode].secondaryButton;
  let backgroundColor = modeStyles[mode].projectBackgroundTwo;
  let color = modeStyles[mode].color;

  return (
    <div style={{ backgroundColor: backgroundColor, color: color }}>
      <section className="projectSection">
        <div className="projectTextAndImageContainer">
          <div className="projectsTextContainer">
            <h3>xChange app</h3>
            <div>
              <p>
                A web app that allows quick and easy conversion of the world's
                top currencies.
              </p>
              <ul>
                <li>TypeScript</li>
                <li>FreeCurrency API</li>
                <li>TS-Particles</li>
              </ul>
            </div>
          </div>
          <div className="projectPicMainContainer flex flexCenter">
            <img
              className="projectPicMain"
              src={xChangeMain}
              alt="xChange app screenshot"
            />
          </div>
        </div>
        <Button
          variant={secondaryButton}
          onClick={handleShow}
          className="projectButton seeDetails"
        >
          See details
        </Button>
        <Button
          variant={ctaButton}
          onClick={handleClose}
          className="projectButton"
        >
          <a href="https://xchange-cavey-app.netlify.app/" target="_blank">
            Visit site
          </a>
        </Button>
      </section>
      {/* Modal: */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          style={{ backgroundColor: backgroundColor, color: color }}
        >
          <Modal.Title>
            <h2>xChange app</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#FAF9F6", color: "#202020" }}>
          <div className="modalTextContainer">
            <p>
              xChange connects to the{" "}
              <a href="https://freecurrencyapi.com/docs" target="_blank">
                Free currency API{" "}
              </a>
              for daily exchange rates of the world's top currencies. Choose any
              of the available base and target currencies and get that day's
              conversion rate. Use one of the inputs and the app will
              automatically create the equivilent amount of the other currency
              based on the conversion rate. Interact with the tsparticles
              animation. Open up a Bootstrap modal containing links to the API
              documentation and disclaimers. Fast and Responsive for any screen
              size.
            </p>
            <h4>TECHNOLOGIES USED:</h4>
            <ul>
              <li>React / TypeScript</li>
              <li>Redux / React-Redux / Redux Toolkit</li>
              <li>Vite / Rollup</li>
              <li>React Bootstrap</li>
              <li>TS-Particles</li>
              <li>Git / Github</li>
              <li>VSCode</li>
              <li>Netlify</li>
            </ul>
          </div>
          <div className="modalPicContainer flexBoxCenter">
            <img
              className="projectPicMain"
              src={xChangeCarousel}
              alt="xChange app screenshot"
            />
          </div>
        </Modal.Body>
        <Modal.Footer
          style={{ backgroundColor: backgroundColor, color: color }}
        >
          <Button
            variant={secondaryButton}
            onClick={handleClose}
            className="projectButton"
          >
            Close
          </Button>
          <Button
            variant={ctaButton}
            onClick={handleClose}
            className="projectButton"
          >
            <a href="https://xchange-cavey-app.netlify.app/" target="_blank">
              Visit site
            </a>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
