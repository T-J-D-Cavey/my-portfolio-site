import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import bug from '../assets/sunIcon.svg';

export function CarouselComponent({mode, modeStyles}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const backgroundColor = modeStyles[mode].background;
  const color = modeStyles[mode].color;

  const gradient = `linear-gradient(0deg, ${backgroundColor} 0%, #5D3FD3 100%)`

  // I need to make a white image and a black img with relevant Icons centered at the  and change the src dynamically based on the mode

  // I need to try and change the colour of the buttons on this so they are visible with different modes

  // I need to edit the text to include a mention of tsparticles for animation
  return (
    <div style={{background: gradient}}>

    <div className='carouselContainer'>
        <div style={{color: color}} className='headerContainer'>
          <h2 id='projectID'>This Site:</h2>
        </div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bug}
            alt="First slide"
            />
          <Carousel.Caption >
            <h3 style={{color: color}}>Dynamic and Interactive</h3>
            <p style={{color: color}}>Leveraging a modern Javascript framework in React, powered by Vite and Rollup.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bug}
            alt="Second slide"
            />

          <Carousel.Caption>
            <h3 style={{color: color}}>Sleek and Responsive Design</h3>
            <p style={{color: color}}>React-Bootstrap componants, focusing on a responsive design that adapts across devices for a user-friendly web experience.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bug}
            alt="Third slide"
            />

          <Carousel.Caption>
            <h3 style={{color: color}}>Seamless Deployment with Netlify</h3>
            <p style={{color: color}}>
            Single-page application harnessing the power and reliability of Netlify's continuous deployment with Github</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bug}
            alt="Fourth slide"
            />
          <Carousel.Caption>
            <h3 style={{color: color}}>Version Control with Git and GitHub</h3>
            <p style={{color: color}}>Leveraging industry-standard tools for a collaborative and flexible development workflow.</p>
          </Carousel.Caption>
          <Carousel.Item>
          <img
            className="d-block w-100"
            src={bug}
            alt="Fifth slide"
            />
          <Carousel.Caption>
            <h3 style={{color: color}}>Optimized Development with NPM and VSCode</h3>
            <p style={{color: color}}>Efficient, scalable and maintainable code, managed by NPM, made with the powerful VSCode editor</p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  );
}