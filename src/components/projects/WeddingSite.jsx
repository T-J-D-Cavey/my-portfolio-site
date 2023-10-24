import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import weddingMain from "../../assets/click-a-bug-main-png.png";
import weddingCarousel from "../../assets/click-a-bug-main-png.png";

export function WeddingSite({ mode, modeStyles }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ctaButton = modeStyles[mode].ctaButton;
  const secondaryButton = modeStyles[mode].secondaryButton;
  const backgroundColor = modeStyles[mode].projectBackgroundOne;
  const color = modeStyles[mode].color;

  return (
    <div style={{ backgroundColor: backgroundColor, color: color }}>
      <section className="projectSection">
        <div className="projectTextAndImageContainer">
          <div className="projectsTextContainer">
            <h3>My Wedding site</h3>
            <div>
              <p>
                Find dates and details of my wedding, RSVP and contribute to our
                honeymoon fund.
              </p>
              <ul>
                <li>English / Mandarin conversion</li>
                <li>Framer Motion animations</li>
                <li>PayPal SDK</li>
              </ul>
            </div>
          </div>
          <div className="projectPicMainContainer flex flexCenter">
            <img
              className="projectPicMain"
              src={weddingMain}
              alt="wedding site screenshot"
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
          <a
            href="https://timandcarmen-ourwedding2024.netlify.app/"
            target="_blank"
          >
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
            <h2>My Wedding site</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#FAF9F6", color: "#202020" }}>
          <div className="modalTextContainer">
            <p>
              This site will be shared with the friends and family of my fiance
              and myself, with details of our English and Malaysian weddings. It
              outlines dates, locations, plans for each day, and RSVP google
              forms, as well as a PayPal button which allows the invited guest
              to contribute to our honeymoon fund. This site is written in
              English and Mandarin, and uses the i18next library to allow the
              user to switch language at the tap of a button. The site is
              password protectect, using local storage to ensure the guest only
              has to submit the password correctly once. Wedding bells sound
              effects will great your first visit, and framer motion scroll
              animations with bootstrap modals ensure a pleasant visit.
            </p>
            <h4>TECHNOLOGIES USED:</h4>
            <ul>
              <li>TypeScript / React</li>
              <li>Vite / Rollup</li>
              <li>Redux / React Redux / Redux Toolkit</li>
              <li>React Bootstrap</li>
              <li>Framer Motion</li>
              <li>i18Next</li>
              <li>VSCode</li>
              <li>Git and Github</li>
              <li>Netlify</li>
            </ul>
          </div>
          <div className="modalPicContainer flexBoxCenter">
            <img
              className="projectPicMain"
              src={weddingCarousel}
              alt="Wedding site screenshot"
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
            <a
              href="https://timandcarmen-ourwedding2024.netlify.app/"
              target="_blank"
            >
              Visit site
            </a>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
