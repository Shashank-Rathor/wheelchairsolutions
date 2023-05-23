/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';

import DetailComponent from "./detailcomponent";

import img0 from '../../../assets/images/portfolio/img0.webp';
import img1 from '../../../assets/images/portfolio/img1.webp';
import img2 from '../../../assets/images/portfolio/img2.jpg';
import img3 from '../../../assets/images/portfolio/img3.jfif';
import img4 from '../../../assets/images/portfolio/img4.png';
import img5 from '../../../assets/images/portfolio/img5.webp';
import img6 from '../../../assets/images/portfolio/img6.jpg';
import {Link} from "react-router-dom";
import source from '../../../assets/videos/Electro Rhb-1.mp4';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const PortfolioComponent = () => {

    return (
        <div>
            <div className="spacer">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="6" className="text-justify">
                            <h2 className="title"><strong>Rehamo Wheelchair Solutions</strong></h2>
                            <h6 className="subtitle">A wheelchair is important piece of item for differently abled people for mobility. There are many wheelchairs available in the market however, not all wheelchairs are suitable for every person. At this situation, a solution is required where a series of experts will guide you through the wheelchair availability and select you the required wheelchair as per your body anatomy or your function of why you need the wheelchair.
                            <br/><br/>At Rehamo, which is a store whole and sole dedicated to Rehab and Mobility where we have host of wheelchairs which you can enquire, undergo assessments and chose the best wheelchair. Our in-house wheelchair expert has years of experience in wheelchair who will guide you to the best which would come into your assistance for years to come.
                            </h6>
                        </Col>
                        <Col>
                        <video className="videos" autoPlay loop muted style={{width: '100%',marginTop: '90px'}}>
                        <source src={source} type='video/mp4' />
                        </video>
                        </Col>
                    </Row></Container>

                    <br/><br/>
                    <DetailComponent/>
                    <Container>
                    <Row className="m-t-40">
                        <Col md="3">
                            <Card className="card-shadow">
                                <Link to={{
                                   pathname: `/contact`,
                                   data: 2
                                 }} className="img-ho" ><img className="card-img-top" src={img2} alt="services" /></Link>
                                <CardBody>
                                    <h5 className="font-medium m-b-0">Services</h5>
                                    <p className="m-b-0 font-14" style={{textAlign: 'justify'}}>We accept repairs of select wheelchairs that are purchased from our outlet. Our repair team are experienced......</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="3">
                            <Card className="card-shadow">
                                <Link  to={{
                                   pathname: `/contact`,
                                   data: 3
                                 }} className="img-ho" ><img className="card-img-top" src={img3} alt="enquiry" /></Link>
                                <CardBody>
                                    <h5 className="font-medium m-b-0">Enquiry</h5>
                                    <p className="m-b-0 font-14" style={{textAlign: 'justify'}}>Having doubts on what kind of wheelchair to chose in the array of wheelchairs available on the market? Then fret not......</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="3">
                            <Card className="card-shadow">
                                <Link  to={{
                                   pathname: `/contact`,
                                   data: 4
                                 }} className="img-ho"><img className="card-img-top" src={img4} alt="assessment" /></Link>
                                <CardBody>
                                    <h5 className="font-medium m-b-0">Assessment</h5>
                                    <p className="m-b-0 font-14" style={{textAlign: 'justify'}}>Once booked an appointment after enquiry of the wheelchair, our team will assess your issues and go through the list......</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="3">
                            <Card className="card-shadow">
                                <Link  to={{
                                   pathname: `/products`,
                                   data: 5
                                 }}  className="img-ho"><img className="card-img-top" src={img6} alt="appointment" /></Link>
                                <CardBody>
                                    <h5 className="font-medium m-b-0">Products</h5>
                                    <p className="m-b-0 font-14" style={{textAlign: 'justify'}}>Explore our wide range of products which includes Active, Semi-active, power, sports wheelchairs......</p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default PortfolioComponent;
