/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';

import Tilt from "react-tilt";


import wheel1 from '../../../assets/images/features/wheels/img1.webp';
import wheel2 from '../../../assets/images/features/wheels/img2.webp';
import wheel3 from '../../../assets/images/features/wheels/img3.webp';
import wheel4 from '../../../assets/images/features/wheels/img4.webp';
import wheel5 from '../../../assets/images/features/wheels/img5.webp';

import {Link} from "react-router-dom";

import { Carousel } from 'react-bootstrap';

const FeatureComponent = () => {

    return (
        <div>
            <div className="spacer feature4 ">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h2 className="title">Awesome with Extra Ordinary Flexibility</h2>
                            <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                        </Col>
                    </Row>
                    <Row className="m-t-40">
                        <Col md="6" className="wrap-feature4-box">

                         <Tilt options={{ max: 25 }}>
                            <Card>
                                <CardBody>
                                    <div className="icon-round bg-light-info" style={{padding: "0"}}><i className="fa fa-star"></i></div>
                                    <h5 className="font-medium">Instant Solutions</h5>
                                    <p className="m-t-20">Instant customer service with reliable solutions.</p>
                                    <Link to="/contact"  className="linking text-themecolor" >Contact Us<i className="ti-arrow-right"></i></Link>
                                </CardBody>
                            </Card>
                            </Tilt>
                        </Col>
                        <Col md="6" className="wrap-feature4-box">
                         <Tilt options={{ max: 25 }}>
                            <Card>
                                <CardBody>
                                    <div className="icon-round bg-light-info" style={{padding: "0"}}><i className="fa fa-check-circle"></i></div>
                                    <h5 className="font-medium">Expertise</h5>
                                    <p className="m-t-20">Our expert will help with your enquiries with world class quality.</p>
                                  <Link to="/contact"  className="linking text-themecolor">Contact Us<i className="ti-arrow-right"></i></Link>
                                </CardBody>
                            </Card>

                            </Tilt>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="spacer ">
                <Container className="feature30">
                    <Row>
                        <Col lg="10">
                        <Carousel className="carFeature">
                        <Carousel.Item interval={1000}>
                        <img
                        className="rounded img-responsive"
                        src={wheel1}
                        alt="First slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                        <img
                      className="rounded img-responsive"
                        src={wheel2}
                        alt="Third slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                        <img
                        className="rounded img-responsive"
                        src={wheel3}
                        alt="Third slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                        <img
                        className="rounded img-responsive"
                        src={wheel4}
                        alt="First slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                        <img
                        className="rounded img-responsive"
                        src={wheel5}
                        alt="First slide"
                        />
                        </Carousel.Item>
                        </Carousel>

                        </Col>
                        <Col lg="5" md="7" className="text-center wrap-feature30-box">
                            <Card className="card-shadow">
                                <CardBody>
                                    <div className="p-20">
                                        <h3 className="title">Explore our Rehamo Store</h3>
                                        <p>Explore new products and wheelchair on Rehamo Store.</p>
                                      <a href="https://www.rehamo.com/" target="_blank" className="btn btn-info-gradiant btn-md btn-arrow m-t-20"><span>Rehamo Shop <i className="ti-arrow-right"></i></span></a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default FeatureComponent;
