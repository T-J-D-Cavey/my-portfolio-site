import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react'
import reactDark from '../assets/600x800-react-dark.png'
import reactLight from '../assets/600x800-react-light.png'
import bootstrapDark from '../assets/600x800-bootstrap-dark.png'
import bootstrapLight from '../assets/600x800-bootstrap-light.png'
import netlifyDark from '../assets/600x800-netlify-dark.png'
import netlifyLight from '../assets/600x800-netlify-light.png'
import gitDark from '../assets/600x800-git-dark.png'
import gitLight from '../assets/600x800-git-light.png'
import npmDark from '../assets/600x800-npm-dark.png'
import npmLight from '../assets/600x800-npm-light.png'

export function CarouselComponent({mode, modeStyles}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const backgroundColor = modeStyles[mode].background;
  const color = modeStyles[mode].color;
  const gradient = `linear-gradient(0deg, ${backgroundColor} 0%, #5D3FD3 100%)`;
  const srcOne = mode === 'darkMode' ? reactDark : reactLight; 
  const srcTwo = mode === 'darkMode' ? bootstrapDark : bootstrapLight; 
  const srcThree = mode === 'darkMode' ? netlifyDark : netlifyLight; 
  const srcFour = mode === 'darkMode' ? gitDark : gitLight; 
  const srcFive = mode === 'darkMode' ? npmDark : npmLight; 

  return (
    <div style={{background: gradient, color: color}}>

    <div className='carouselContainer'>
        <div style={{color: color}} className='headerContainer'>
          <h2 id='projectID'>This Site:</h2>
        </div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={srcOne}
            alt="First slide"
            />
          <Carousel.Caption >
            <h3 style={{color: color}}>Dynamic and Interactive</h3>
            <p style={{color: color}}>Made with React, powered by Vite and Rollup. Animations by TSParticles. Images via Gimp</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={srcTwo}
            alt="Second slide"
            />

          <Carousel.Caption>
            <h3 style={{color: color}}>Sleek and Responsive Design</h3>
            <p style={{color: color}}>React-Bootstrap componants, light/dark mode and responsive design for all screen sizes.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={srcThree}
            alt="Third slide"
            />

          <Carousel.Caption>
            <h3 style={{color: color}}>Seamless Deployment with Netlify</h3>
            <p style={{color: color}}>
            Single-page application harnessing the power and reliability of Netlify's continuous deployment</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={srcFour}
            alt="Fourth slide"
            />
          <Carousel.Caption>
            <h3 style={{color: color}}>Version Control with Git and GitHub</h3>
            <p style={{color: color}}>Leveraging industry-standard tools for a collaborative and flexible development workflow.</p>
          </Carousel.Caption>
        </Carousel.Item>
          <Carousel.Item>
          <img
            className="d-block w-100"
            src={srcFive}
            alt="Fifth slide"
            />
          <Carousel.Caption>
            <h3 style={{color: color}}>Optimized Development with NPM and VSCode</h3>
            <p style={{color: color}}>Efficient, scalable and maintainable code, managed by NPM, made with the powerful VSCode editor</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  );
}