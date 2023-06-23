import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import bug from '../assets/click-a-bug1.png';

export function CarouselComponent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bug}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide test</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bug}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide test</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bug}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide test</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}