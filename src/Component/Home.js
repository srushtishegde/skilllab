import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placekitten.com/800/400"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placekitten.com/800/401"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Slide</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
