import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const Carrusel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\imagenes\img1.jpg"
          alt="Primera imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\imagenes\imagen1.jpg"
          alt="Segunda imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\imagenes\imagen1.jpg"
          alt="Tercera imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\imagenes\img4.jpg"
          alt="Cuarta imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\imagenes\img5.jpg"
          alt="Quinta imagen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\imagenes\img6.png"
          alt="Sexta imagen"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrusel;
