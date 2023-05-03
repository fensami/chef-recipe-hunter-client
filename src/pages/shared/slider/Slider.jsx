import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../../public/images/slider1.jpg'
import slider2 from '../../../../public/images/slider2.jpg'
import slider3 from '../../../../public/images/slider3.jpg'

const Slider = () => {
    
    return (
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome To FOodian Recepes</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>We provied our best recepes</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>We have world best chefs</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Slider;