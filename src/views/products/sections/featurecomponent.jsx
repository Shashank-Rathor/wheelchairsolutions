/* eslint-disable */
import React from 'react';
import Header from "../../../components/header/header"

import img1 from '../../../assets/images/features/products/img1.webp';
import img2 from '../../../assets/images/features/products/Active-wheelchair.webp';
import img3 from '../../../assets/images/features/products/Semi-active-Wheelchair.webp';
import img4 from '../../../assets/images/features/products/Transit-Wheelchair.webp';
import img5 from '../../../assets/images/features/products/Sports-Wheelchair.webp';
import img6 from '../../../assets/images/features/products/Pediatric-Wheelchair.webp';

import {Link} from "react-router-dom";

import { Carousel } from 'react-bootstrap';

const FeatureComponent = ({activekey}) => {

    return (
            <div >
            <Header />
            <Carousel pause= "false" className="static-slider-head car" height="80%">
            <Carousel.Item interval={3000}>
            <img
            className="d-block w-100 carImage"
            src={img2}
            alt="First slide"
            />
            <Carousel.Caption className="carText">
            <h2>Active Wheelchair</h2>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img
            className="d-block w-100 carImage"
            src={img3}
            alt="Third slide"
            />

            <Carousel.Caption className="carText">
            <h2>SemiActive Wheelchair</h2>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img
            className="d-block w-100 carImage"
            src={img1}
            alt="Third slide"
            />

            <Carousel.Caption className="carText">
            <h2>Power Wheelchair</h2>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img
            className="d-block w-100 carImage carImage"
            src={img4}
            alt="First slide"
            />
            <Carousel.Caption className="carText">
            <h2>Transit Wheelchair</h2>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img
            className="d-block w-100 carImage"
            src={img5}
            alt="Third slide"
            />

            <Carousel.Caption className="carText">
            <h2>Sports Wheelchair</h2>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img
            className="d-block w-100 carImage"
            src={img6}
            alt="First slide"
            />
            <Carousel.Caption className="carText">
            <h2>Paediatric  Wheelchair</h2>
            </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            </div>
    );
}

export default FeatureComponent;
