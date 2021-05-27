import React from 'react';
import { Carousel } from 'react-bootstrap';
import froCarousel1 from '../img/for-carusel-1.jpg';
import froCarousel2 from '../img/for-carusel-2.jpg';
import froCarousel3 from '../img/for-carusel-3.jpg';

const styleImg = {
       
    overflow: 'hidden',

}

const wrapp = {
    background: 'black',
    maxHeight: window.innerHeight - 54,
}

export const HomePage = () => {
    return (
        <Carousel >
            <Carousel.Item style={wrapp}>
                <img
                className="d-block w-100 m-auto"
                style={styleImg}
                src={froCarousel1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={wrapp}>
                <img
                className="d-block w- m-auto"
                style={styleImg}
                src={froCarousel2}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={wrapp}>
                <img
                className="d-block w- m-auto"
                style={styleImg}
                src={froCarousel3}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            
            </Carousel>
    );
};